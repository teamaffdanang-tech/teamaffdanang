import { after, NextResponse } from "next/server";

import { getPayloadClient } from "@/lib/payload";
import { getSiteUrl } from "@/lib/seo/shared";
import { escapeHtml, sendTelegram, vnTime } from "@/lib/telegram";

// Server-only newsletter subscribe endpoint. By DEFAULT it saves the email
// straight into our own `subscribers` collection, so the form works with no
// third-party setup. Set NEWSLETTER_USE_BREVO=true (with BREVO_API_KEY +
// BREVO_LIST_ID) to sync to Brevo instead — the code is kept for that.
// Lives at /newsletter (not /api/*) because Payload owns /api/[...slug].

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Sync a subscriber to Brevo. Returns the outcome; never throws. */
async function subscribeViaBrevo(email: string, source?: string): Promise<"ok" | "already" | "doi" | "error"> {
  const apiKey = process.env.BREVO_API_KEY!;
  const listId = Number(process.env.BREVO_LIST_ID);
  const doiTemplateId = process.env.BREVO_DOI_TEMPLATE_ID ? Number(process.env.BREVO_DOI_TEMPLATE_ID) : undefined;
  const headers = { "api-key": apiKey, "content-type": "application/json", accept: "application/json" };
  const attributes = source ? { SIGNUP_SOURCE: source } : undefined;
  try {
    let res: Response;
    if (doiTemplateId) {
      res = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
        method: "POST",
        headers,
        body: JSON.stringify({
          email,
          includeListIds: [listId],
          templateId: doiTemplateId,
          redirectionUrl: `${getSiteUrl()}/?subscribed=1`,
          attributes,
        }),
      });
    } else {
      res = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers,
        body: JSON.stringify({ email, listIds: [listId], updateEnabled: true, attributes }),
      });
    }
    if (res.ok || res.status === 204) return doiTemplateId ? "doi" : "ok";
    const data = (await res.json().catch(() => ({}))) as { code?: string; message?: string };
    if (res.status === 400 && (data.code === "duplicate_parameter" || /already/i.test(data.message || ""))) return "already";
    console.error("Brevo subscribe failed", res.status, data);
    return "error";
  } catch (err) {
    console.error("Brevo subscribe threw", err);
    return "error";
  }
}

export async function POST(req: Request) {
  let body: { email?: string; company?: string; source?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: the hidden "company" field is only filled by bots.
  if (body.company) return NextResponse.json({ ok: true });

  const email = (body.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  const source = typeof body.source === "string" ? body.source.slice(0, 100) : undefined;

  // Optional Brevo path — only when explicitly enabled.
  if (process.env.NEWSLETTER_USE_BREVO === "true" && process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID) {
    const outcome = await subscribeViaBrevo(email, source);
    if (outcome === "error") {
      return NextResponse.json({ error: "Could not subscribe right now. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ ok: true, provider: "brevo", already: outcome === "already", doi: outcome === "doi" });
  }

  // Default: save into our own database.
  try {
    const payload = await getPayloadClient();
    const existing = await payload.find({
      collection: "subscribers",
      where: { email: { equals: email } },
      limit: 1,
      depth: 0,
    });
    if (existing.docs.length > 0) {
      return NextResponse.json({ ok: true, already: true });
    }
    await payload.create({ collection: "subscribers", data: { email, source, status: "subscribed" } });
    // Notify Telegram after the response — never blocks the signup, and a
    // Telegram failure can't break it (sendTelegram swallows its own errors).
    after(async () => {
      const total = await payload
        .count({ collection: "subscribers" })
        .then((r) => r.totalDocs)
        .catch(() => undefined);
      await sendTelegram(
        `🎉 <b>New subscriber</b>\n` +
          `📧 ${escapeHtml(email)}\n` +
          `📍 Source: ${escapeHtml(source || "—")}\n` +
          `🕒 ${vnTime()} (VN)\n` +
          `👥 Total: ${total ?? "?"}`,
      );
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // A unique-constraint race means they're already in — treat as success.
    if (err instanceof Error && /unique|duplicate/i.test(err.message)) {
      return NextResponse.json({ ok: true, already: true });
    }
    console.error("Newsletter DB save failed", err);
    return NextResponse.json({ error: "Could not subscribe right now. Please try again later." }, { status: 502 });
  }
}
