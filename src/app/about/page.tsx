"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-[100svh] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/2001.jpg')" }}
      >
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 h-full min-h-[100svh] flex items-end justify-start">
          <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">

            <div className="w-full md:max-w-xl max-w-sm text-left">

              <h1
                className="text-3xl md:text-5xl font-semibold mb-4"
                style={{
                  color: beige,
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                }}
              >
                About Klara
              </h1>

              <div
                style={{
                  width: "100px",
                  height: "2px",
                  backgroundColor: beige,
                  opacity: 0.8,
                  marginBottom: "18px",
                }}
              />

              <div
                className="rounded-2xl p-5 md:p-7 shadow-2xl"
                style={{
                  background: "rgba(20,20,20,0.14)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-4">
                  Klara is a family company from Ostrobothnia, Finland — a region known for craftsmanship, boatbuilding, and entrepreneurship.
                </p>

                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Our mission is to make Finnish building quality accessible across Europe.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section
        className="relative py-24 px-6"
        style={{ backgroundColor: beige, color: forestGreen }}
      >
        <div className="max-w-6xl mx-auto">

          {/* TOP GRID */}
          <div className="grid md:grid-cols-12 gap-10 items-stretch">

            {/* IMAGE - LEFT (5/12) */}
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/About3.jpg"
                alt="Founders"
                width={800}
                height={1000}
                className="w-full h-full object-cover"
              />
            </div>

            {/* STORY - RIGHT (7/12) */}
            <div
              className="md:col-span-7 rounded-2xl p-7 md:p-10 shadow-xl flex flex-col"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(47,62,47,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h2 className="text-3xl font-semibold mb-6">
                Our Story
              </h2>

              <div className="space-y-5 text-gray-800 leading-relaxed flex-1">

                <p>
                  Klara was founded by us, Nicolina and Jakob — a family of soon four children.
                </p>

                <p>
                  For over four years, Nicolina has run a successful Airbnb in our backyard — creating an additional income stream that made it possible to spend more time at home with our children.
                  That experience showed us how a small, well-designed space can create real value, and we want to offer that same opportunity to others.
                </p>

                <p>
                  We’ve also lived and worked abroad — in Germany, Sweden, Australia, China, and South America. We’ve seen different ways of building and living.

                  When we later built our own home in Finland, working with skilled local craftsmen, we experienced a level of quality and care that stood out. That’s what we want to share.
                </p>

                <p>
                  Growing up in a region with relatively affordable housing gave us the opportunity to buy our first home early. We know the value of owning your own place — building equity instead of paying rent.
                  Today, that path is harder for many. With Klara, we want to offer a simpler entry point: a first home, an investment, or a flexible space that can grow into something more over time.
                </p>

              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
                  style={{
                    backgroundColor: "rgba(47, 62, 47, 0.55)",
                    color: beige,
                    border: `1px solid rgba(245,240,230,0.65)`,
                    backdropFilter: "blur(8px)",
                    width: "220px",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

          </div>

          {/* BOTTOM GRID (same order + same ratio) */}
          <div className="grid md:grid-cols-12 gap-10 mt-12 items-stretch">

            {/* SLOGAN - LEFT */}
            <div
              className="md:col-span-7 rounded-2xl p-10 flex items-center justify-center text-center shadow-xl"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(47,62,47,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <div
                className="text-3xl md:text-5xl font-semibold leading-tight"
                style={{
                  color: forestGreen,
                  letterSpacing: "-0.03em",
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                }}
              >
                Modular Homes.
                <br />
                Nordic Quality.
                <br />
                Finnish Precision.
              </div>
            </div>

            {/* MEANING - RIGHT */}
            <div
              className="md:col-span-5 rounded-2xl p-10 flex flex-col justify-center shadow-xl"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(47,62,47,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p className="text-lg md:text-xl text-gray-800 mb-4 leading-relaxed">
                Klara means “ready” and “clear” in Swedish.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                It represents simplicity, clarity, and Nordic quality without compromise.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}