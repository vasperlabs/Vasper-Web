import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: "https://vasperlabs.com/sitemap.xml",
    host: "https://vasperlabs.com",
  };
}
