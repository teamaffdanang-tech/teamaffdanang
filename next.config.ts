import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

// Media served from local disk uses relative URLs (no config needed). Once Hostinger
// SFTP or S3_ENDPOINT (Cloudflare R2/S3/MinIO) is set, product/media images become
// absolute URLs on that host — allow it here so next/image can optimize them without
// a code change.
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];
if (process.env.HOSTINGER_PUBLIC_BASE_URL) {
  try {
    const url = new URL(process.env.HOSTINGER_PUBLIC_BASE_URL);
    remotePatterns.push({ protocol: "https", hostname: url.hostname });
  } catch {
    // Malformed HOSTINGER_PUBLIC_BASE_URL — leave remotePatterns empty rather than crash the build.
  }
}
if (process.env.S3_ENDPOINT) {
  try {
    const url = new URL(
      process.env.S3_ENDPOINT.startsWith("http") ? process.env.S3_ENDPOINT : `https://${process.env.S3_ENDPOINT}`,
    );
    remotePatterns.push({ protocol: "https", hostname: url.hostname });
    if (process.env.S3_BUCKET) {
      remotePatterns.push({ protocol: "https", hostname: `${process.env.S3_BUCKET}.${url.hostname}` });
    }
  } catch {
    // Malformed S3_ENDPOINT — leave remotePatterns empty rather than crash the build.
  }
}

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns,
  },
  // ssh2 (via ssh2-sftp-client, used only server-side by the Hostinger media
  // adapter) ships an optional native .node binary for accelerated crypto.
  // Webpack tries to parse it as a JS module and fails outright when the
  // binary is actually present (e.g. Vercel's Linux build image) — locally on
  // Windows the binary doesn't exist so webpack only warns, which is why this
  // wasn't caught by a local build. Marking the package external makes
  // Next.js require() it natively at runtime instead of bundling it.
  serverExternalPackages: ["ssh2", "ssh2-sftp-client"],
  // The Buying Guides feature was renamed to Blog (/guides -> /blog). Permanent
  // redirects preserve existing SEO/backlinks to the old URLs instead of letting
  // them 404.
  async redirects() {
    return [
      { source: "/guides", destination: "/blog", permanent: true },
      { source: "/guides/:slug", destination: "/blog/:slug", permanent: true },
    ];
  },
};

export default withPayload(nextConfig);
