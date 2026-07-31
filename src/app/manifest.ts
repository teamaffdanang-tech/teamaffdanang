import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Get Trendy Finds",
    short_name: "Trendy Finds",
    description: "Independent, tested product reviews — Fashion, Tech, Lifestyle.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#18181b",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
