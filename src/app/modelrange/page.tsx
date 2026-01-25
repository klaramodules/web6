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
    "/nr1_1.jpg",
    "/nr1_2.jpg",
    "/nr1_3.jpg",
    "/nr1_4.jpg",
    "/nr1_5.png",
    "/nr1_6.png",
  ];

  const model2Images = [
    "/nr2_1.jpg",
    "/nr2_2.jpg",
    "/nr2_3.jpg",
    "/nr2_4.jpg",
    "/nr2_5.jpg",
    "/nr2_6.jpg",
    "/nr2_7.jpg",
    "/nr2_8.png",
    "/nr2_9.png",
  ];

  const [currentImages, setCurrentImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const buttonStyle = {
  backgroundColor: "rgba(47, 62, 47, 0.6)",
  color: beige,
  border: `1px solid ${beige}`,
  backdropFilter: "blur(4px)",
};

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCurrentIndex(null);
        setCurrentImages(null);
      }
      if (currentIndex !== null && currentImages) {
        if (e.key === "ArrowRight")
          setCurrentIndex((currentIndex + 1) % currentImages.length);
        if (e.key === "ArrowLeft")
          setCurrentIndex(
            (currentIndex + currentImages.length - 1) %
              currentImages.length
          );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, currentImages]);

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full bg-gradient-to-b from-[#f5f0e6] to-[#e6e1d8]">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5f0e6] to-[#e6e1d8]" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* ===== Title ===== */}
        <section className="max-w-3xl mx-auto text-center mt-8 mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: forestGreen,
              fontFamily: "'Outfit', 'Inter', sans-serif",
              lineHeight: "1.3",
            }}
          >
            Our Model Range
            <br />
            Modular Homes, Delivered Ready
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

        {/* ===== Intro ===== */}
        <section className="max-w-3xl mx-auto mb-20 text-lg leading-relaxed text-gray-700">
          <p>
            Our modular homes are designed and built in Finland with a focus on
            quality, efficiency, and timeless Nordic design. Each home is fully
            completed indoors, loaded onto a trailer, and delivered ready to
            use — ensuring predictable quality and fast installation.
          </p>
        </section>

        {/* ===== MODEL 1 ===== */}
        <section className="max-w-4xl mx-auto text-left mb-24 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: forestGreen }}>
            Model 01 — 30 m²
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            A compact and efficient modular home designed for modern living.
            Ideal as a guest house, rental unit, or independent living space.
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-6 text-lg">
            <li>Total area: 30 m²</li>
            <li>Price: €75,000 + transport</li>
            <li>Delivered fully finished on trailer</li>
            <li>Delivery time: 12–15 working weeks plus transportation</li>
          </ul>

          <div className="grid grid-cols-3 gap-4 my-8">
            {model1Images.map((src, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentImages(model1Images);
                  setCurrentIndex(index);
                }}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={src}
                  alt={`Model 01 image ${index + 1}`}
                  width={500}
                  height={350}
                  className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <Link
              href="/contact"
              className="inline-block font-semibold py-3 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg text-center"
              style={{ ...buttonStyle, width: "260px" }}
            >
              Request More Information
            </Link>
          </div>
        </section>

        {/* ===== MODEL 2 ===== */}
        <section className="max-w-4xl mx-auto text-left mb-32 text-gray-700">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: forestGreen }}>
            Model 02 — 40.8 m²
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            A spacious and versatile modular home offering increased comfort
            and flexibility. Perfect for full-time living, premium rentals, or
            remote work environments.
          </p>

          <ul className="list-disc ml-6 space-y-2 mb-6 text-lg">
            <li>Total area: 40.8 m²</li>
            <li>Price: €90,000 + transport</li>
            <li>Delivered fully finished on trailer</li>
            <li>Delivery time: 12–15 working weeks plus transportation</li>
          </ul>

          <div className="grid grid-cols-3 gap-4 my-8">
            {model2Images.map((src, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentImages(model2Images);
                  setCurrentIndex(index);
                }}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={src}
                  alt={`Model 02 image ${index + 1}`}
                  width={500}
                  height={350}
                  className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-8">
            <Link
              href="/contact"
              className="inline-block font-semibold py-3 rounded-lg shadow-md transition hover:scale-105 hover:shadow-lg text-center"
              style={{ ...buttonStyle, width: "260px" }}
            >
              Request More Information
            </Link>
          </div>
        </section>

        {/* ===== Modal gallery ===== */}
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

      {/* ◀ Previous */}
      <button
        onClick={() =>
          setCurrentIndex(
            (currentIndex + currentImages.length - 1) %
              currentImages.length
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-2xl"
      >
        ‹
      </button>

      {/* ▶ Next */}
      <button
        onClick={() =>
          setCurrentIndex(
            (currentIndex + 1) % currentImages.length
          )
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-2xl"
      >
        ›
      </button>
    </div>
  </div>
)}

        <footer className="text-gray-700 text-sm py-6 text-center">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}
