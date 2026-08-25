import { getExploreArticles } from "@/lib/explore";

export default async function ExplorePage() {
  const exploreItems = await getExploreArticles();

  return (
    <main className="bg-[#f5f0e6] min-h-screen">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-medium tracking-tight text-[#2F3E2F] md:text-6xl">
            Explore ideas for small homes, guest houses and extra income.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#2F3E2F]/70">
            From guest houses and Airbnb to modular homes and small living,
            explore practical ideas for making better use of space, property
            and investment.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 lg:px-16">
        <div className="border-t border-[#2F3E2F]/15">
          <div className="grid gap-0 md:grid-cols-2">
            {exploreItems.map((article) => (
              <a
                key={article.slug}
                href={`/explore/${article.slug}`}
                className="group border-b border-[#2F3E2F]/15 py-10 md:mr-10"
              >
                <p className="text-sm uppercase tracking-[0.15em] text-[#5A6B4E]">
                  {article.metadata.category}
                </p>

                <h2 className="mt-4 text-2xl font-medium text-[#2F3E2F] transition-opacity group-hover:opacity-60">
                  {article.metadata.title}
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-[#2F3E2F]/65">
                  {article.metadata.description}
                </p>

                <span className="mt-6 inline-block text-sm font-medium text-[#2F3E2F]">
                  Read article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}