import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

// Media served from local disk uses relative URLs (no config needed). Once S3_ENDPOINT
// (Cloudflare R2/S3/MinIO) is set, product/media images become absolute URLs on that
// host — allow it here so next/image can optimize them without a code change.
const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [];
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
};

export default withPayload(nextConfig);
