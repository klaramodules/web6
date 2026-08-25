import Link from "next/link";
import { getExploreArticle } from "@/lib/explore";

export default async function ExploreArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = await getExploreArticle(slug);
  const ArticleContent = article.Content;

  return (
    <div className="min-h-screen bg-[#f7f3eb]">
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16">

        <div className="mb-12">
          <Link
            href="/explore"
            className="text-sm uppercase tracking-widest text-[#5A6B4E] transition-opacity hover:opacity-70"
          >
            ← Explore
          </Link>
        </div>

        <article className="text-[#2F3E2F]">
          <ArticleContent />
        </article>

        <div className="mt-16 border-t border-[#2F3E2F]/10 pt-8">
          <Link
            href="/explore"
            className="text-sm font-medium text-[#2F3E2F] hover:opacity-70"
          >
            ← Explore more
          </Link>
        </div>

      </div>
    </div>
  );
}