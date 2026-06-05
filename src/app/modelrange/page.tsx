"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

export default function ModelRange() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

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

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!currentImages) return;

      if (e.key === "Escape") {
        setCurrentImages(null);
        setCurrentIndex(null);
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % currentImages.length;
        });
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => {
          if (prev === null) return null;
          return (prev + currentImages.length - 1) % currentImages.length;
        });
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentImages]);

  return (
    <>
      <Header />

      {/* HERO FIXAD (Concept-matching version) */}
<section
  className="relative w-full min-h-[100svh] overflow-hidden bg-cover bg-no-repeat bg-[58%_center] md:bg-center"
  style={{ backgroundImage: "url('/2004.jpg')" }}
>

  {/* Gradient overlay – samma som Concept */}
  <div
    className="absolute inset-0 hidden md:block"
    style={{
      background: `
        linear-gradient(
          to right,
          rgba(15,15,15,0.58) 0%,
          rgba(15,15,15,0.38) 30%,
          rgba(15,15,15,0.18) 58%,
          rgba(15,15,15,0.42) 100%
        )
      `,
    }}
  />

  <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

  {/* HERO CONTENT */}
  <div className="relative z-10 h-full min-h-[100svh] flex items-end justify-start">
    <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">

      <div className="w-full md:max-w-xl max-w-sm text-left">

        <h1
          className="text-3xl md:text-5xl font-semibold mb-4 leading-tight"
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
            marginBottom: "20px",
          }}
        />

        <div
          className="rounded-2xl p-5 md:p-7 shadow-2xl"
          style={{
            background: "rgba(20,20,20,0.14)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <p className="text-gray-100 mb-4">
            Our modular homes are compact, energy-efficient, and fully equipped with sauna and underfloor heating.
          </p>

          <p className="text-gray-100">
            Designed and built in Finland for predictable quality and fast installation — perfect for guest houses, rental units, or full-time living.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* CONTENT */}
      <section
        className="relative py-24 px-6"
        style={{ backgroundColor: beige, color: forestGreen }}
      >
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-center gap-6 mb-20 flex-wrap">
            <Link href="#model1" className="underline font-semibold text-lg">
              View Model 01
            </Link>
            <Link href="#model2" className="underline font-semibold text-lg">
              View Model 02
            </Link>
          </div>

          {/* MODEL 1 */}
          <section id="model1" className="max-w-5xl mx-auto mb-28">
            <div className="rounded-2xl p-8 md:p-10 shadow-xl bg-white/55">
              <h2 className="text-3xl font-semibold mb-5">Model 01 — 30 m²</h2>

              <p className="text-lg mb-6 text-gray-700">
                A compact and efficient modular home designed for modern living.
                Ideal as a guest house, rental unit, or independent living space.
              </p>

              <ul className="list-disc ml-6 space-y-2 mb-8 text-gray-700">
                <li>Total area: 30 m²</li>
                <li>Sauna and underfloor heating</li>
                <li>Well-insulated and energy-efficient</li>
                <li>Price: €75,000 + transport</li>
                <li>Delivered fully finished on trailer</li>
                <li>Delivery time: 12–15 working weeks plus transportation</li>
                <li>
                  If you have questions, don’t hesitate to{" "}
                  <Link href="/contact" className="underline font-semibold">
                    contact us
                  </Link>
                  .
                </li>
              </ul>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {model1Images.map((src, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCurrentImages(model1Images);
                      setCurrentIndex(i);
                    }}
                    className="cursor-pointer overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={500}
                      height={350}
                      className="object-cover w-full h-[180px] hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Link href="/contact" style={buttonStyle} className="px-6 py-3 rounded-xl">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>

          {/* MODEL 2 */}
          <section id="model2" className="max-w-5xl mx-auto">
            <div className="rounded-2xl p-8 md:p-10 shadow-xl bg-white/55">
              <h2 className="text-3xl font-semibold mb-5">Model 02 — 40 m²</h2>

              <p className="text-lg mb-6 text-gray-700">
                A spacious and versatile modular home offering increased comfort
                and flexibility. Perfect for full-time living, premium rentals,
                or remote work environments.
              </p>

              <ul className="list-disc ml-6 space-y-2 mb-8 text-gray-700">
                <li>Total area: 40.8 m²</li>
                <li>Sauna and underfloor heating</li>
                <li>Well-insulated and energy-efficient</li>
                <li>Price: €90,000 + transport</li>
                <li>Delivered fully finished on trailer</li>
                <li>Delivery time: 12–15 working weeks plus transportation</li>
                <li>
                  If you have questions, don’t hesitate to{" "}
                  <Link href="/contact" className="underline font-semibold">
                    contact us
                  </Link>
                  .
                </li>
              </ul>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {model2Images.map((src, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCurrentImages(model2Images);
                      setCurrentIndex(i);
                    }}
                    className="cursor-pointer overflow-hidden rounded-2xl"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={500}
                      height={350}
                      className="object-cover w-full h-[180px] hover:scale-110 transition"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <Link href="/contact" style={buttonStyle} className="px-6 py-3 rounded-xl">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* MODAL (unchanged) */}
      {currentImages && currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => {
            setCurrentImages(null);
            setCurrentIndex(null);
          }}
        >
          <Image
            src={currentImages[currentIndex]}
            alt=""
            width={1200}
            height={800}
            className="max-h-[90vh] object-contain rounded-2xl"
          />
        </div>
      )}
    </>
  );
}