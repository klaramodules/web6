"use client";

import Header from "../Header";

export default function AboutPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const buttonStyle = {
    backgroundColor: "rgba(47, 62, 47, 0.55)",
    color: beige,
    border: `1px solid rgba(245,240,230,0.65)`,
    backdropFilter: "blur(8px)",
  };

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full min-h-[78vh] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/2001.jpg')" }}
      >
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(15,15,15,0.62) 0%,
                rgba(15,15,15,0.38) 34%,
                rgba(15,15,15,0.18) 60%,
                rgba(15,15,15,0.42) 100%
              )
            `,
          }}
        />

        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 min-h-[78vh] flex flex-col">
          <div className="sticky top-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
            <Header />
          </div>

          <div className="flex-1 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">
              <div className="w-full md:max-w-xl max-w-sm">
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

                <p className="text-base md:text-lg text-gray-100 leading-relaxed mb-4">
                  Klara is a family company from the Jakobstad region of
                  Ostrobothnia, a region known for boatbuilding,
                  entrepreneurship, and skilled craftsmen. This tradition of
                  precision and practical problem-solving shapes how we build.
                </p>

                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  Our mission is to make Finnish craftsmanship and building
                  excellence accessible across Europe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section
        className="relative py-24 px-6"
        style={{ backgroundColor: beige, color: forestGreen }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 items-stretch">
            <div className="md:w-[42%] w-full">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
                <img
                  src="/About3.jpg"
                  alt="Founders"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="md:w-[58%] w-full">
              <div
                className="rounded-2xl p-7 md:p-10 h-full"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(47,62,47,0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <h2
                  className="text-3xl font-semibold mb-6"
                  style={{ color: forestGreen }}
                >
                  Our Story
                </h2>

                <div className="space-y-5">
                  <p className="text-lg leading-relaxed text-gray-800">
                    Klara was founded by us, Nicolina and Jakob — a family of
                    soon four children.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-800">
                    For over four years, Nicolina has run a successful Airbnb in
                    our backyard — creating an additional income stream that
                    made it possible to spend more time at home with our
                    children. That experience showed us how a small,
                    well-designed space can create real value, and we want to
                    offer that same opportunity to others.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-800">
                    We’ve also lived and worked abroad — in Germany, Sweden,
                    Australia, China, and South America. We’ve seen different
                    ways of building and living. When we later built our own
                    home in Finland, working with skilled local craftsmen, we
                    experienced a level of quality and care that stood out.
                    That’s what we want to share.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-800">
                    Growing up in a region with relatively affordable housing
                    gave us the opportunity to buy our first home early. We know
                    the value of owning your own place — building equity instead
                    of paying rent. Today, that path is harder for many. With
                    Klara, we want to offer a simpler entry point: a first home,
                    an investment, or a flexible space that can grow into
                    something more over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CLEAN BRAND STATEMENT (NO BOX FEELING) */}
          <div className="max-w-3xl mx-auto text-center mt-28">
            <p className="text-lg md:text-xl text-gray-800 mb-6">
              Klara means “ready” and “clear” in Swedish.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
              More than a name, it embodies plug & play modules,
              straightforward processes, and the reliability of true Nordic
              quality.
            </p>

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

          {/* CTA */}
          <div className="flex justify-center mt-20">
            <a
              href="/contact"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{ ...buttonStyle, width: "240px" }}
            >
              Contact Us
            </a>
          </div>

          {/* FOOTER */}
          <div className="text-center text-sm text-gray-600 mt-20">
            © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
          </div>
        </div>
      </section>
    </>
  );
}