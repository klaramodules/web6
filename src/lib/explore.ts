import fs from "fs";
import path from "path";

const exploreDirectory = path.join(
  process.cwd(),
  "content",
  "explore"
);

export function getExploreSlugs() {
  return fs
    .readdirSync(exploreDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getExploreArticle(slug: string) {
  const article = await import(
    `../../content/explore/${slug}.mdx`
  );

  return {
    slug,
    metadata: article.metadata,
    Content: article.default,
  };
}

export async function getExploreArticles() {
  const slugs = getExploreSlugs();

  const articles = await Promise.all(
    slugs.map((slug) => getExploreArticle(slug))
  );

  return articles.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );
}