"use client";

import Header from "../Header";

export default function AboutPage() {
  const forestGreen = "#2F3E2F";

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full bg-[#f5f0e6]">
      <div className="absolute inset-0 -z-10 bg-[#f5f0e6]" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* Rubrik */}
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

        {/* Intro Text */}
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

        {/* Mission segment */}
        <section className="max-w-5xl mx-auto mb-16 px-6 md:px-0">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">

            {/* Bild */}
            <div className="md:w-1/3 w-full">
              <div className="rounded-lg shadow-lg overflow-hidden h-full">
                <img
                  src="/bild5.jpg"
                  alt="Our mission illustration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="md:w-2/3 w-full flex flex-col justify-between text-left">
              <div>
                <p
                  className="text-lg leading-relaxed mb-4 text-gray-800"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  While Klara’s model range and concept are brand new, we collaborate with Walltec Finland Ab — a trusted Finnish timber-element producer. We export what matters most: know-how, reliability, and consistent quality.
                </p>

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
                  className="text-lg leading-relaxed font-medium text-gray-900 mt-6"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  Modular Homes. Nordic Quality. Finnish Precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-gray-700 text-sm py-6 text-center">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}
