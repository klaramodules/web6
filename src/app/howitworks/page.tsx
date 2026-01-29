"use client";

import Header from "../Header";
import { useState, useEffect } from "react";
import { ShoppingCart, Factory, Truck, Plug } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function HowItWorksPage() {
  const forestGreen = "#2F3E2F";
  const mossGreenTransparent = "rgba(47,62,47,0.38)";
  const beige = "#f7f3eb";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Order Online",
      text: "Get in touch through our contact form to request a free, no-obligation quote. After you submit your details, we’ll reach out with a personalised offer, clarify any options, and guide you through the next steps. The model is pre-designed and optimized — no complicated decisions.",
      cta: true
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
      if (e.key === "Escape") setCurrentIndex(null);
      if (currentIndex !== null) {
        if (e.key === "ArrowRight")
          setCurrentIndex((currentIndex + 1) % introImages.length);
        if (e.key === "ArrowLeft")
          setCurrentIndex(
            (currentIndex + introImages.length - 1) % introImages.length
          );
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, introImages.length]);

  return (
    <section className="relative text-center overflow-hidden w-full bg-[#f5f0e6]">
      <div className="absolute inset-0 -z-10 bg-[#f5f0e6]" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* Main Title */}
        <section className="max-w-5xl mx-auto text-center mt-8 mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: forestGreen,
              fontFamily: "'Outfit', 'Inter', sans-serif",
              lineHeight: "1.3",
            }}
          >
            How It Works
          </h1>
          <div
            className="mx-auto mb-8"
            style={{ width: "220px", height: "2px", backgroundColor: forestGreen }}
          />
        </section>

        {/* Intro Text */}
        <p className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-gray-800">
          Ordering a Klara home is simple and transparent. We offer optimized
          models — designed to fit on a standard trailer, maximize interior space,
          and deliver the best possible price without compromising Nordic quality.
        </p>

        {/* IMAGE GRID – 4 cols desktop, 2 cols mobile */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {introImages.map((src, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={src}
                  alt={`Production image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="max-w-5xl mx-auto py-12 px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start md:items-center text-left md:text-left transition-transform hover:scale-[1.02]"
              >
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full mb-4 md:mb-0 md:mr-6 flex-shrink-0"
                  style={{ backgroundColor: mossGreenTransparent }}
                >
                  {React.cloneElement(step.icon, { color: beige })}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {step.cta ? (
                      <Link href="/contact" className="hover:underline">
                        {step.title}
                      </Link>
                    ) : (
                      step.title
                    )}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fullscreen Modal */}
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
                  setCurrentIndex(
                    (currentIndex + introImages.length - 1) % introImages.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/80 hover:bg-white text-2xl"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setCurrentIndex(
                    (currentIndex + 1) % introImages.length
                  )
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

      {/* Responsiv tweak */}
      <style jsx>{`
        @media (max-width: 768px) {
          img[class*='object-cover'] {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
}
