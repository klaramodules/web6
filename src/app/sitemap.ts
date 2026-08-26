import type { MetadataRoute } from "next";
import { getExploreArticles } from "@/lib/explore";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://klaramodules.com";

  const staticPages = [
    "",
    "/concept",
    "/howitworks",
    "/modelrange",
    "/about",
    "/contact",
    "/download-catalogue",
    "/explore",
    "/privacy",
  ];

  const exploreArticles = await getExploreArticles();

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const articleUrls = exploreArticles.map((article) => ({
    url: `${baseUrl}/explore/${article.slug}`,
    lastModified: new Date(article.metadata.publishedAt),
  }));

  return [...staticUrls, ...articleUrls];
}