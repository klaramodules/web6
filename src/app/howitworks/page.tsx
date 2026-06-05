"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Factory, Truck, Plug } from "lucide-react";
import Link from "next/link";

export default function HowItWorksPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Order Online",
      text:
        "Get in touch through our contact form to request a free, no-obligation quote. After you submit your details, we’ll reach out with a personalised offer, clarify any options, and guide you through the next steps. The model is pre-designed and optimized — no complicated decisions.",
      cta: true,
    },
    {
      icon: <Factory size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Built in Finland",
      text:
        "We begin production as soon as your order is confirmed. Thanks to our optimized model, construction takes 12–15 weeks. Your home is built by experienced Finnish craftsmen following Nordic building traditions. Each module is completed indoors, fully finished, and inspected before transport.",
    },
    {
      icon: <Truck size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Delivered",
      text:
        "Once ready, the module is loaded onto a standard trailer and delivered anywhere in Europe. Delivery typically takes 1–2 weeks depending on destination. The home is unloaded by crane, and transport costs are quoted individually.",
    },
    {
      icon: <Plug size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Connected & Ready",
      text:
        "Upon arrival, your home is lifted into place and connected to electricity and water. Within just a few hours, your Klara module is fully ready — step inside and start living.",
    },
  ];

  const introImages = ["/jrt12.jpg", "/jrt8.jpg", "/jrt11.jpg", "/jrt9.jpg"];

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCurrentIndex(null);

      if (currentIndex !== null) {
        if (e.key === "ArrowRight") {
          setCurrentIndex((currentIndex + 1) % introImages.length);
        }

        if (e.key === "ArrowLeft") {
          setCurrentIndex(
            (currentIndex + introImages.length - 1) % introImages.length
          );
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, introImages.length]);

  const buttonStyle = {
    backgroundColor: "rgba(47, 62, 47, 0.55)",
    color: beige,
    border: "1px solid rgba(245,240,230,0.65)",
    backdropFilter: "blur(8px)",
  };

  return (
    <>
      <section
        className="relative w-full min-h-screen overflow-hidden bg-cover bg-no-repeat bg-[60%_center] md:bg-center"
        style={{ backgroundImage: "url('/1002.jpg')" }}
      >
        <div className="absolute inset-0 hidden md:block bg-black/40" />
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        <div className="relative z-10 min-h-screen flex items-end">
          <div className="w-full max-w-7xl mx-auto px-5 md:px-12 pb-12 md:pb-16">
            <div className="w-full md:max-w-xl max-w-sm">
              <h1
                className="text-3xl md:text-5xl font-semibold mb-4 leading-tight"
                style={{ color: beige }}
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
                  Ordering a Klara home is simple and transparent.
                </p>

                <p className="text-gray-100">
                  We offer optimized models — designed to fit on a standard
                  trailer, maximize interior space, and deliver the best
                  possible price without compromising Nordic quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-24 px-6"
        style={{ backgroundColor: beige, color: forestGreen }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-8 bg-white/50 border border-black/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/70 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(245,240,230,0.25))",
                }}
              />

              <div className="relative flex items-start gap-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(245,240,230,0.8)]">
                  {step.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-3 transition-transform duration-500 group-hover:translate-x-1">
                    {step.cta ? (
                      <Link href="/contact" className="hover:underline">
                        {step.title}
                      </Link>
                    ) : (
                      step.title
                    )}
                  </h3>

                  <p className="text-sm leading-relaxed opacity-80">
                    {step.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          {introImages.map((src, i) => (
            <div
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Klara Module ${i + 1}`}
                className="w-full h-[220px] object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-20">
          <Link
            href="/concept"
            style={buttonStyle}
            className="px-6 py-3 rounded-xl w-[220px] text-center"
          >
            Our Concept
          </Link>

          <Link
            href="/howitworks"
            style={buttonStyle}
            className="px-6 py-3 rounded-xl w-[220px] text-center"
          >
            How It Works
          </Link>

          <Link
            href="/modelrange"
            style={buttonStyle}
            className="px-6 py-3 rounded-xl w-[220px] text-center"
          >
            Model Range
          </Link>

          <Link
            href="/about"
            style={buttonStyle}
            className="px-6 py-3 rounded-xl w-[220px] text-center"
          >
            About Us
          </Link>
        </div>
      </section>

      {currentIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setCurrentIndex(null)}
        >
          <img
            src={introImages[currentIndex]}
            alt="Expanded view"
            className="max-h-[90vh] rounded-xl"
          />
        </div>
      )}
    </>
  );
}