"use client";

import Header from "../Header";

export default function AboutPage() {
  const forestGreen = "#2F3E2F";

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full bg-[#f5f0e6]">
      <div className="absolute inset-0 -z-10 bg-[#f5f0e6]" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* ================= ABOUT ================= */}
        <section className="max-w-3xl mx-auto text-center mt-8 mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: forestGreen,
              letterSpacing: "0.5px",
              fontFamily: "'Outfit', 'Inter', sans-serif",
              lineHeight: "1.3",
            }}
          >
            About Klara
          </h1>
          <div
            className="mx-auto"
            style={{
              width: "220px",
              height: "2px",
              backgroundColor: forestGreen,
            }}
          />
        </section>

        <section className="max-w-3xl mx-auto text-center mb-16 px-6 md:px-0">
          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Klara is a family company from the Jakobstad region of Ostrobothnia, a region known for boatbuilding, entrepreneurship, and skilled craftsmen. This tradition of precision and practical problem-solving shapes how we build.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            <strong>
              Our mission is to make Finnish craftsmanship and building excellence accessible across Europe.
            </strong>
          </p>
        </section>

        {/* ================= OUR STORY ================= */}
        <section className="max-w-5xl mx-auto mb-16 px-6 md:px-0">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">

            {/* Bild */}
            <div className="md:w-1/3 w-full">
              <div className="rounded-lg shadow-lg overflow-hidden h-full">
                <img
                  src="/About3.jpg"
                  alt="Our story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:w-2/3 w-full flex flex-col justify-between text-left">
              <div>

                <h2
                  className="text-2xl font-semibold mb-4"
                  style={{
                    color: forestGreen,
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                  }}
                >
                  Our Story
                </h2>

                <p
                  className="text-lg leading-relaxed mb-4 text-gray-800"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  <p>Klara was founded by us, Nicolina and Jakob — a family of soon four children. </p>
                  <p>For over four years, Nicolina has run a successful Airbnb in our backyard — creating an additional income stream that made it possible to spend more time at home with our children. That experience showed us how a small, well-designed space can create real value, and we want to offer that same opportunity to others.</p>
                </p>

                <p
                  className="text-lg leading-relaxed mb-4 text-gray-800"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  We’ve also lived and worked abroad — in Germany, Sweden, Australia, China, and South America. We’ve seen different ways of building and living. When we later built our own home in Finland, working with skilled local craftsmen, we experienced a level of quality and care that stood out. That’s what we want to share.
                </p>

                <p
                  className="text-lg leading-relaxed text-gray-800"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  Growing up in a region with relatively affordable housing gave us the opportunity to buy our first home early. We know the value of owning your own place — building equity instead of paying rent. Today, that path is harder for many. With Klara, we want to offer a simpler entry point: a first home, an investment, or a flexible space that can grow into something more over time.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* ================= FINAL BRAND STATEMENT ================= */}
        <section className="max-w-3xl mx-auto text-center mb-16 px-6 md:px-0">
          <p
            className="text-lg leading-relaxed mb-4 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Klara means “ready” and “clear” in Swedish.
          </p>

          <p
            className="text-lg leading-relaxed mb-4 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            More than a name, it embodies plug & play modules, straightforward processes, and the reliability of true Nordic quality.
          </p>

          <p
            className="text-lg font-medium text-gray-900"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Modular Homes. Nordic Quality. Finnish Precision.
          </p>
        </section>

        {/* Footer */}
        <footer className="text-gray-700 text-sm py-6 text-center">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}