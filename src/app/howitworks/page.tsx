"use client";

import Header from "../Header";
import { useState, useEffect } from "react";
import { ShoppingCart, Factory, Truck, Plug } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function HowItWorksPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Order Online",
      text: "Get in touch through our contact form to request a free, no-obligation quote. After you submit your details, we’ll reach out with a personalised offer, clarify any options, and guide you through the next steps. The model is pre-designed and optimized — no complicated decisions.",
      cta: true,
    },
    {
      icon: <Factory size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Built in Finland",
      text: "We begin production as soon as your order is confirmed. Thanks to our optimized model, construction takes 12–15 weeks. Your home is built by experienced Finnish craftsmen following Nordic building traditions. Each module is completed indoors, fully finished, and inspected before transport.",
    },
    {
      icon: <Truck size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Delivered",
      text: "Once ready, the module is loaded onto a standard trailer and delivered anywhere in Europe. Delivery typically takes 1–2 weeks depending on destination. The home is unloaded by crane, and transport costs are quoted individually.",
    },
    {
      icon: <Plug size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Connected & Ready",
      text: "Upon arrival, your home is lifted into place and connected to electricity and water. Within just a few hours, your Klara module is fully ready — step inside and start living.",
    },
  ];

  const introImages = ["/jrt12.jpg", "/jrt8.jpg", "/jrt11.jpg", "/jrt9.jpg"];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setCurrentIndex(null);
      }

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % introImages.length;
        });
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => {
          if (prev === null) return null;
          return (prev + introImages.length - 1) % introImages.length;
        });
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

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
        className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-[60%_center] md:bg-center"
        style={{
          backgroundImage: "url('/1002.jpg')",
        }}
      >
        {/* Desktop gradient */}
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

        {/* Mobile gradient */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 min-h-screen flex flex-col">
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
                    How It Works.
                    <br />
                    Simple Process.
                    <br />
                    Nordic Precision.
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
                    Ordering a Klara home is simple and transparent.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-gray-100">
                    We offer optimized models — designed to fit on a standard
                    trailer, maximize interior space, and deliver the best
                    possible price without compromising Nordic quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section
        className="relative py-24 px-6"
        style={{
          backgroundColor: beige,
          color: forestGreen,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 transition duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(47,62,47,0.08)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div className="flex items-start">
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-full mr-6 flex-shrink-0 shadow-md"
                    style={{
                      backgroundColor: "white",
                    }}
                  >
                    {step.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {step.cta ? (
                        <Link href="/contact" className="hover:underline">
                          {step.title}
                        </Link>
                      ) : (
                        step.title
                      )}
                    </h3>

                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "rgba(47,62,47,0.85)" }}
                    >
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* IMAGE GRID */}
          <section className="max-w-5xl mx-auto mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {introImages.map((src, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                >
                  <img
                    src={src}
                    alt={`Production image ${index + 1}`}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-5 mt-20">
            <Link
              href="/concept"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              Our Concept
            </Link>

            <Link
              href="/howitworks"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              How It Works
            </Link>

            <Link
              href="/modelrange"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              Model Range
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center font-semibold py-4 rounded-xl shadow-md transition hover:scale-[1.02]"
              style={{
                ...buttonStyle,
                width: "220px",
              }}
            >
              About Us
            </Link>
          </div>

          {/* FOOTER TEXT */}
          <div className="text-center text-sm text-gray-600 mt-16">
            © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
          </div>
        </div>
      </section>

      {/* MODAL */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setCurrentIndex(null)}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={introImages[currentIndex]}
              alt="Full view"
              className="rounded-2xl shadow-2xl object-contain max-h-[90vh]"
            />

            <button
              onClick={() =>
                setCurrentIndex((prev) => {
                  if (prev === null) return null;
                  return (
                    (prev + introImages.length - 1) % introImages.length
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
                  return (prev + 1) % introImages.length;
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