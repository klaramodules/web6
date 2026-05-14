"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

export default function ModelRange() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  /* ===== Image galleries ===== */
  const model1Images = [
    "/1001.png",
    "/1002.png",
    "/1003.png",
    "/1004.png",
    "/1005.png",
    "/1006.png",
    "/1007.png",
    "/nr1_5.png",
    "/nr1_6.png",
  ];

  const model2Images = [
    "/2001.png",
    "/2002.png",
    "/2003.png",
    "/2004.png",
    "/2006.png",
    "/3001.png",
    "/3002.png",
    "/3003.png",
    "/3006.png",
    "/3007.png",
    "/nr2_8.png",
    "/nr2_9.png",
  ];

  const [currentImages, setCurrentImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const buttonStyle = {
    backgroundColor: "rgba(47, 62, 47, 0.55)",
    color: beige,
    border: `1px solid rgba(245,240,230,0.65)`,
    backdropFilter: "blur(8px)",
  };

  /* ===== Keyboard navigation FIXED ===== */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCurrentIndex(null);
        setCurrentImages(null);
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => {
          if (prev === null || !currentImages) return null;
          return (prev + 1) % currentImages.length;
        });
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => {
          if (prev === null || !currentImages) return null;
          return (
            (prev + currentImages.length - 1) %
            currentImages.length
          );
        });
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="relative w-full h-[78vh] md:h-[82vh] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/2004.jpg')",
        }}
      >
        {/* Desktop gradient */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background: `
              linear-gradient(
                to right,
                rgba(15,15,15,0.60) 0%,
                rgba(15,15,15,0.38) 35%,
                rgba(15,15,15,0.18) 62%,
                rgba(15,15,15,0.42) 100%
              )
            `,
          }}
        />

        {/* Mobile gradient */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        {/* Soft darkening */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 h-full flex flex-col">
          {/* HEADER */}
          <div className="sticky top-0 z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
            <Header />
          </div>

          {/* HERO CONTENT */}
          <div className="flex-1 flex items-end">
            <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">
              <div className="w-full md:max-w-xl max-w-sm">
                {/* HEADLINE */}
                <div className="mb-6 md:mb-8">
                  <h1
                    className="text-3xl md:text-5xl font-semibold mb-4 md:mb-5 leading-tight"
                    style={{
                      color: beige,
                      letterSpacing: "-0.02em",
                      fontFamily: "'Outfit', 'Inter', sans-serif",
                    }}
                  >
                    Our Model Range.
                    <br />
                    Modular Homes.
                    <br />
                    Delivered Ready.
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

                {/* CONTENT BOX */}
                <div
                  className="rounded-2xl p-5 md:p-7 shadow-2xl"
                  style={{
                    background: "rgba(20,20,20,0.14)",
                    backdropFilter: "blur(5px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <p className="text-base md:text-lg leading-relaxed text-gray-100 mb-4">
                    Our modular homes are compact, energy-efficient, and fully
                    equipped with sauna and underfloor heating.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-100">
                    Designed and built in Finland for predictable quality and
                    fast installation — perfect for guest houses, rental units,
                    or full-time living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section
        className="relative py-24 px-6"
        style={{
          backgroundColor: beige,
          color: forestGreen,
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* QUICK LINKS */}
          <div className="flex justify-center gap-6 mb-20 flex-wrap">
            <Link
              href="#model1"
              className="underline font-semibold text-lg"
            >
              View Model 01
            </Link>

            <Link
              href="#model2"
              className="underline font-semibold text-lg"
            >
              View Model 02
            </Link>
          </div>

          {/* ===== MODEL 1 ===== */}
          <section
            id="model1"
            className="max-w-5xl mx-auto mb-28 scroll-mt-32"
          >
            <div
              className="rounded-2xl p-8 md:p-10 shadow-xl"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(47,62,47,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h2
                className="text-3xl font-semibold mb-5"
                style={{ color: forestGreen }}
              >
                Model 01 — 30 m²
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                A compact and efficient modular home designed for modern living.
                Ideal as a guest house, rental unit, or independent living
                space.
              </p>

              <ul className="list-disc ml-6 space-y-2 mb-8 text-lg text-gray-700">
                <li>Total area: 30 m²</li>
                <li>Sauna and underfloor heating</li>
                <li>Well-insulated and energy-efficient</li>
                <li>Price: €75,000 + transport</li>
                <li>Delivered fully finished on trailer</li>
                <li>
                  Delivery time: 12–15 working weeks plus transportation
                </li>
                <li>
                  If you have questions, don’t hesitate to{" "}
                  <Link
                    href="/contact"
                    className="underline font-semibold"
                  >
                    contact us
                  </Link>
                  .
                </li>
              </ul>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {model1Images.map((src, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentImages(model1Images);
                      setCurrentIndex(index);
                    }}
                    className="group cursor-pointer overflow-hidden rounded-2xl shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Model 01 image ${index + 1}`}
                      width={500}
                      height={350}
                      className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
                  style={{
                    ...buttonStyle,
                    width: "260px",
                  }}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </section>

          {/* ===== MODEL 2 ===== */}
          <section
            id="model2"
            className="max-w-5xl mx-auto scroll-mt-32"
          >
            <div
              className="rounded-2xl p-8 md:p-10 shadow-xl"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(47,62,47,0.08)",
                backdropFilter: "blur(6px)",
              }}
            >
              <h2
                className="text-3xl font-semibold mb-5"
                style={{ color: forestGreen }}
              >
                Model 02 — 40 m²
              </h2>

              <p className="text-lg leading-relaxed mb-6 text-gray-700">
                A spacious and versatile modular home offering increased comfort
                and flexibility. Perfect for full-time living, premium rentals,
                or remote work environments.
              </p>

              <ul className="list-disc ml-6 space-y-2 mb-8 text-lg text-gray-700">
                <li>Total area: 40.8 m²</li>
                <li>Sauna and underfloor heating</li>
                <li>Well-insulated and energy-efficient</li>
                <li>Price: €90,000 + transport</li>
                <li>Delivered fully finished on trailer</li>
                <li>
                  Delivery time: 12–15 working weeks plus transportation
                </li>
                <li>
                  If you have questions, don’t hesitate to{" "}
                  <Link
                    href="/contact"
                    className="underline font-semibold"
                  >
                    contact us
                  </Link>
                  .
                </li>
              </ul>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                {model2Images.map((src, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCurrentImages(model2Images);
                      setCurrentIndex(index);
                    }}
                    className="group cursor-pointer overflow-hidden rounded-2xl shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`Model 02 image ${index + 1}`}
                      width={500}
                      height={350}
                      className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
                  style={{
                    ...buttonStyle,
                    width: "260px",
                  }}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <div className="text-center text-sm text-gray-600 mt-20">
            © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
          </div>
        </div>
      </section>

      {/* MODAL */}
      {currentIndex !== null && currentImages && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => {
            setCurrentIndex(null);
            setCurrentImages(null);
          }}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImages[currentIndex]}
              alt="Full view"
              width={1800}
              height={1200}
              className="rounded-2xl shadow-2xl object-contain max-h-[90vh]"
            />

            <button
              onClick={() =>
                setCurrentIndex((prev) => {
                  if (prev === null) return null;
                  return (
                    (prev + currentImages.length - 1) %
                    currentImages.length
                  );
                })
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-2xl"
            >
              ‹
            </button>

            <button
              onClick={() =>
                setCurrentIndex((prev) => {
                  if (prev === null) return null;
                  return (prev + 1) % currentImages.length;
                })
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-2xl"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}