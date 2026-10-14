/**
 * Minimal Telegram bot notifier. Used to ping a chat when someone subscribes
 * and for the daily summary. Reads TELEGRAM_BOT_TOKEN + TELEGRAM_CHAT_ID from
 * the environment; if either is missing it silently no-ops (the feature is
 * simply off). Never throws — a Telegram failure must never break a signup.
 */
export async function sendTelegram(text: string): Promise<boolean> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return false;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    if (!res.ok) {
      console.error("Telegram sendMessage failed", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("Telegram sendMessage threw", err);
    return false;
  }
}

/** Escape the few characters Telegram's HTML parse mode treats specially. */
export function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Format a date as Vietnam local time (Asia/Ho_Chi_Minh), e.g. "13/10/2026 14:05". */
export function vnTime(d: Date = new Date()): string {
  return new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(d);
}
