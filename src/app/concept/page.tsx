"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../Header";

export default function Concept() {
  const forestGreen = "#2F3E2F";

  /* ===== Image gallery state ===== */
  const images = [
    "/jrt1.jpg",
    "/jrt2.jpg",
    "/jrt3.jpg",
    "/jrt4.jpg",
    "/jrt5.jpg",
    "/jrt6.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCurrentIndex(null);
      if (currentIndex !== null) {
        if (e.key === "ArrowRight")
          setCurrentIndex((currentIndex + 1) % images.length);
        if (e.key === "ArrowLeft")
          setCurrentIndex((currentIndex + images.length - 1) % images.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full bg-gradient-to-b from-[#f5f0e6] to-[#e6e1d8]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5f0e6] to-[#e6e1d8]" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* Main Title */}
        <section className="max-w-3xl mx-auto text-center mt-8 mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: forestGreen,
              fontFamily: "'Outfit', 'Inter', sans-serif",
              lineHeight: "1.3",
            }}
          >
            Modular Homes. Nordic Quality.
            <br />
            Finnish Precision.
          </h1>
          <div
            className="mx-auto"
            style={{ width: "220px", height: "2px", backgroundColor: forestGreen }}
          />
        </section>

        {/* Intro */}
        <section className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <p className="md:w-3/4 text-lg leading-relaxed text-gray-700">
              When you choose a Klara modular home, you choose Nordic craftsmanship,
              natural materials, and Finnish reliability. Our homes are built in
              Finland and delivered ready-to-use across Europe, combining durability,
              design, and comfort.
            </p>

            <div className="md:w-1/4 w-full flex justify-center">
              <Image
                src="/jrt8.jpg"
                alt="Macro view"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover max-h-[260px]"
              />
            </div>
          </div>
        </section>

        {/* Text Sections */}
        <section className="max-w-3xl mx-auto text-left mb-20 space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen }}>
              Built the Nordic Way
            </h2>
            <p>
              Our homes are crafted from natural materials that age beautifully and
              withstand harsh climates. No unnecessary plastics, no shortcuts —
              just solid construction with longevity and healthy indoor air in mind.
            </p>
          </div>

          {/* ===== Finnish Precision + Images ===== */}
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen }}>
              Finnish Precision, Delivered by Experts
            </h2>
            <p>
              Our builders work with a straightforward Nordic mindset: do the job
              properly, use good materials, and keep things simple — ensuring
              consistent quality and a home that feels well-built from day one.
              The modules are manufactured in Finland by Walltec Finland Ab.
            </p>

            {/* Image grid 2x3 */}
            <div className="my-8 grid grid-cols-3 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={src}
                    alt={`Production image ${index + 1}`}
                    width={500}
                    height={350}
                    className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <p>
              Learn more:{" "}
              <a
                href="https://walltec.fi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                walltec.fi
              </a>
            </p>
          </div>

          {/* ===== REST OF ORIGINAL CONTENT (UNCHANGED) ===== */}
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen }}>
              Designed for Modern Living
            </h2>
            <p>
              Whether you want a guest house, a tiny home, or a rental property,
              Klara offers flexible solutions that fit your lifestyle. Our plug-&-play
              homes arrive fully finished, energy-efficient, and ready from day one.
              No construction hassle — simply place, connect, and start living.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen }}>
              Adaptable for Tomorrow
            </h2>
            <p>
              Life changes — and your Klara home can change with it. Move it to a new
              location, repurpose it, or sell it on to someone else.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 my-8">
            <div className="md:w-1/3">
              <Image
                src="/jrt7.jpg"
                alt="Illustration"
                width={400}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>

            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen }}>
                What You Get
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>A home built from honest, natural materials</li>
                <li>Nordic durability designed for European climates</li>
                <li>Finnish craftsmanship with dependable quality</li>
                <li>A fully finished living space delivered ready-to-use</li>
                <li>Flexibility to adapt, relocate, or resell</li>
              </ul>
              <p className="mt-4">
                Klara homes are made to last — built with integrity and designed
                for long-term comfort.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Premium Modal ===== */}
        {currentIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setCurrentIndex(null)}
          >
            <div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentIndex]}
                alt="Full view"
                width={1800}
                height={1200}
                className="rounded-2xl shadow-2xl object-contain max-h-[90vh]"
              />

              <button
                onClick={() =>
                  setCurrentIndex((currentIndex + images.length - 1) % images.length)
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-2xl"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((currentIndex + 1) % images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-2xl"
              >
                ›
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-gray-700 text-sm py-6 text-center">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}
