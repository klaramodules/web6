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

        {/* Textinnehåll */}
        <section className="max-w-3xl mx-auto text-center mb-16 px-6 md:px-0">
          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Klara is a newly founded family company with a clear mission — to make
            owning a high-quality modular home simple, sustainable, and accessible.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Although our company is young, we collaborate with experienced Finnish
            builders and craftsmen who work according to the highest standards of
            quality and precision. Every home is built with care, using durable
            materials and Nordic craftsmanship that stands the test of time.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Our goal is to make Finnish craftsmanship and building excellence
            accessible across Europe — exporting the know-how and quality of
            Finnish construction without flying builders across the continent.
            Each Klara home is designed and built in Finland, then delivered
            ready-to-use, bringing Nordic building tradition to new markets in an
            efficient and sustainable way.
          </p>

          <p
            className="text-lg leading-relaxed mb-6 text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Our team combines design, practicality, and reliability — merging the
            warmth of a family business with the professionalism of Finland’s most
            trusted builders. We believe in honest partnerships, transparent
            communication, and homes that are made to last.
          </p>

          <p
            className="text-lg leading-relaxed text-gray-800"
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
          >
            Klara is more than a name — it’s our promise: clear processes,
            transparent quality, and living made simple.
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
