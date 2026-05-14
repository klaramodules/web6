"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../Header";
import Link from "next/link";

export default function Concept() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const buttonStyle = {
    backgroundColor: "rgba(47, 62, 47, 0.6)",
    color: beige,
    border: `1px solid rgba(245,240,230,0.65)`,
    backdropFilter: "blur(8px)",
  };

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
        if (e.key === "ArrowRight") {
          setCurrentIndex((currentIndex + 1) % images.length);
        }

        if (e.key === "ArrowLeft") {
          setCurrentIndex(
            (currentIndex + images.length - 1) % images.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, images.length]);

  return (
    <>
     {/* HERO */}
<section
  className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-[58%_center] md:bg-center"
  style={{
    backgroundImage: "url('/jrt8.jpg')",
  }}
>
  {/* Desktop overlay */}
  <div
    className="absolute inset-0 hidden md:block"
    style={{
      background: `
        linear-gradient(
          to right,
          rgba(15,15,15,0.62) 0%,
          rgba(15,15,15,0.42) 30%,
          rgba(15,15,15,0.18) 58%,
          rgba(15,15,15,0.45) 100%
        )
      `,
    }}
  />

  {/* Mobile overlay */}
  <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

  {/* Soft darkening */}
  <div className="absolute inset-0 bg-black/10" />

  {/* MAIN WRAPPER */}
  <div className="relative z-10 min-h-screen flex flex-col pt-[96px] md:pt-[120px]">

    {/* HEADER */}
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
      <Header />
    </div>

    {/* HERO CONTENT */}
    <div className="flex-1 flex items-end">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">

        {/* SAME POSITIONING AS LANDING PAGE */}
        <div className="w-full md:max-w-xl max-w-sm">

          {/* TITLE */}
          <div className="mb-6 md:mb-8">
            <h1
              className="text-3xl md:text-5xl font-semibold mb-4 md:mb-5 leading-tight"
              style={{
                color: beige,
                letterSpacing: "-0.02em",
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              Modular Homes.
              <br />
              Nordic Quality.
              <br />
              Finnish Precision.
            </h1>

            <div
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: beige,
                opacity: 0.8,
              }}
            />
          </div>

          {/* HERO BOX */}
          <div
            className="rounded-2xl p-5 md:p-7 shadow-2xl"
            style={{
              background: "rgba(20,20,20,0.14)",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-4">
              When you choose a Klara modular home, you choose Nordic craftsmanship.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-6">
              Built in Finland using natural materials that age beautifully
              and perform in harsh climates — delivered ready-to-use across Europe.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-semibold py-3 md:py-4 rounded-xl shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-2xl text-sm md:text-base"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* MAIN CONTENT */}
      <section
        className="w-full"
        style={{
          background: "linear-gradient(to bottom, #f5f0e6, #e6e1d8)",
        }}
      >
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-20 text-left text-gray-700 text-lg leading-relaxed">
          {/* Built the Nordic Way */}
          <div className="mb-24">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{
                color: forestGreen,
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              Built the Nordic Way
            </h2>

            <div
              className="mb-8"
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: forestGreen,
                opacity: 0.7,
              }}
            />

            <p>
              Our homes are built in Finland using natural materials that age
              beautifully and perform in harsh climates. Delivered ready-to-use
              across Europe, each home combines Finnish reliability with
              long-lasting durability, thoughtful design, and everyday comfort.
              No unnecessary plastics, no shortcuts — just solid construction with
              longevity and healthy indoor air in mind.
            </p>
          </div>

          {/* Finnish Precision */}
          <div className="mb-24">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{
                color: forestGreen,
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              Finnish Precision, Delivered by Experts
            </h2>

            <div
              className="mb-8"
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: forestGreen,
                opacity: 0.7,
              }}
            />

            <p className="mb-8">
              Our builders work with a straightforward Nordic mindset: do the job
              properly, use good materials, and keep things simple — ensuring
              consistent quality and a home that feels well-built from day one.
              The modules are manufactured in Finland by Walltec Finland Ab.
            </p>

            {/* IMAGE GRID */}
            <div className="my-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={src}
                    alt={`Production image ${index + 1}`}
                    width={500}
                    height={350}
                    className="rounded-2xl object-cover w-full h-[180px] md:h-[220px] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>

            <p>
              Learn more about our partner:{" "}
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

          {/* Designed */}
          <div className="mb-24">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{
                color: forestGreen,
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              Designed for Modern Living
            </h2>

            <div
              className="mb-8"
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: forestGreen,
                opacity: 0.7,
              }}
            />

            <p>
              Whether you want a guest house, a tiny home, or a rental property,
              Klara offers flexible solutions that fit your lifestyle. Our
              plug-&-play homes arrive fully finished, energy-efficient, and
              ready from day one. No construction hassle — simply place,
              connect, and start living.
            </p>
          </div>

          {/* Adaptable */}
          <div className="mb-24">
            <h2
              className="text-3xl md:text-4xl font-semibold mb-5"
              style={{
                color: forestGreen,
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              Adaptable for Tomorrow
            </h2>

            <div
              className="mb-8"
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: forestGreen,
                opacity: 0.7,
              }}
            />

            <p>
              Life changes — and your Klara home can change with it. Move it to a new
              location, repurpose it, or sell it on to someone else.
            </p>
          </div>

          {/* WHAT YOU GET */}
          <div className="flex flex-col md:flex-row gap-8 my-12 items-stretch">
            {/* IMAGE */}
            <div className="md:w-1/3">
              <Image
                src="/jrt7.jpg"
                alt="Illustration"
                width={400}
                height={600}
                className="rounded-2xl shadow-xl object-cover w-full h-full min-h-[420px]"
              />
            </div>

            {/* TEXT */}
            <div className="md:w-2/3 flex flex-col justify-center">
              <h2
                className="text-3xl md:text-4xl font-semibold mb-5"
                style={{
                  color: forestGreen,
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                }}
              >
                What You Get
              </h2>

              <div
                className="mb-8"
                style={{
                  width: "100px",
                  height: "2px",
                  backgroundColor: forestGreen,
                  opacity: 0.7,
                }}
              />

              <ul className="list-disc ml-6 space-y-3">
                <li>A home built from honest, natural materials</li>
                <li>Nordic durability designed for European climates</li>
                <li>Finnish craftsmanship with dependable quality</li>
                <li>A fully finished living space delivered ready-to-use</li>
                <li>Flexibility to adapt, relocate, or resell</li>
              </ul>

              <p className="mt-6">
                Klara homes are made to last — built with integrity and designed
                for long-term comfort.
              </p>
            </div>
          </div>
        </div>

        {/* PREMIUM MODAL */}
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
                  setCurrentIndex(
                    (currentIndex + images.length - 1) % images.length
                  )
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

        {/* FOOTER */}
        <footer className="text-gray-700 text-sm py-8 text-center">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </section>
    </>
  );
}