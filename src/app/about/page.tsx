"use client";

import Header from "../Header";

export default function AboutPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

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

        {/* Text */}
        <section className="max-w-3xl mx-auto text-center mb-16 px-6 md:px-0">

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Klara is a family company rooted in the Jakobstad region of Ostrobothnia — a place known for its boatbuilding heritage, entrepreneurship, and skilled craftsmen. This culture of precision and practical problem-solving shapes how we build.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            <strong>Our mission is to make Finnish craftsmanship and building excellence accessible across Europe.</strong>
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Although Klara is young, we collaborate with experienced Finnish builders and craftsmen who work with a straightforward Nordic mindset: do the job properly, use good materials, and keep things simple. Each home is built with care using natural, durable materials that ensure healthy indoor air and reflect Nordic quality.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Every Klara home is designed and manufactured in Finland, in cooperation with Walltec Finland Ab — a trusted timber-element producer that shares our appreciation for solid construction and clean craftsmanship. Instead of flying builders across the continent, we export what truly matters: know-how, reliability, and the steady quality of Finnish construction.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            As a family-run company, we value honesty, transparency, and clear communication. We aim to create homes that are built to last — offering long-term comfort, durability, and simplicity for modern living.
          </p>

          <p
            className="text-lg leading-relaxed text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Klara is more than a name — it is our promise: clear processes, reliable quality, and living made simple.
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
