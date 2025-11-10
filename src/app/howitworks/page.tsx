"use client";

import Header from "../Header";
import { useState } from "react";
import { ShoppingCart, Factory, Truck, Plug, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function HowItWorksPage() {
  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  const steps = [
    {
      icon: <ShoppingCart size={48} strokeWidth={1.5} color={forestGreen} />,
      title: "Order Online",
      text: "Get in touch through our contact form to request a free, no-obligation quote. After you submit your details, we’ll reach out with a personalised offer, clarify any options, and guide you through the next steps. The model is pre-designed and optimized — no complicated decisions.",
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

  /* ---- IMAGE GALLERY ---- */

  const images = [
    { src: "/fasad1.png", alt: "Facade 1" },
    { src: "/fasad2.png", alt: "Facade 2" },
    { src: "/fasad3.png", alt: "Facade 3" },
    { src: "/floorplan1.png", alt: "Floorplan" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => setSelectedIndex(index);
  const closeImage = () => setSelectedIndex(null);

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full bg-[#f5f0e6]">
      <div className="absolute inset-0 -z-10 bg-[#f5f0e6]" />

      <div className="relative z-10 mt-32 px-4 md:px-0">
        <Header />

        {/* Rubrik */}
        <section className="max-w-5xl mx-auto text-center mt-8 mb-12">
          <h1
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{
              color: forestGreen,
              letterSpacing: "0.5px",
              fontFamily: "'Outfit', 'Inter', sans-serif",
              lineHeight: "1.3",
            }}
          >
            How It Works
          </h1>
          <div
            className="mx-auto"
            style={{ width: "220px", height: "2px", backgroundColor: forestGreen }}
          />
        </section>

        {/* Intro */}
        <p
          className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-gray-800"
          style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
        >
          Ordering a Klara home is simple and transparent. We offer one optimized model — designed
          to fit on a standard trailer, maximize interior space, and deliver the best possible price
          without compromising Nordic quality. A fully equipped module starts from €75,000 + delivery.
          Groundwork is not included, and transport is priced by destination. No hidden extras — the
          kitchen, bathroom, interior doors, and essential fittings are all included.
        </p>

        {/* Steps */}
        <section className="max-w-5xl mx-auto py-12 px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
              >
                <div
                  className="flex items-center justify-center w-20 h-20 rounded-full mb-4 shadow-md"
                  style={{ backgroundColor: beige }}
                >
                  {step.icon}
                </div>

                <h3
                  className="text-xl font-semibold mb-2 text-gray-900"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  {step.title}
                </h3>

                <p
                  className="text-gray-700 text-base leading-relaxed"
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IMAGE GALLERY */}
        <section className="max-w-5xl mx-auto pb-20 px-4 md:px-0">
  <h2
    className="text-2xl font-semibold mb-6"
    style={{
      color: forestGreen,
      fontFamily: "'Outfit', 'Inter', sans-serif",
    }}
  >
    Model Gallery
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {images.map((img, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition"
        style={{
          width: "100%",
          height: "160px",
        }}
        onClick={() => openImage(index)}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    ))}
  </div>
</section>

        {/* MODAL */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeImage}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
            >
              <X size={36} />
            </button>

            <button
              className="absolute left-6 text-white"
              onClick={showPrev}
            >
              <ChevronLeft size={48} />
            </button>

            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded shadow-lg"
            />

            <button
              className="absolute right-6 text-white"
              onClick={showNext}
            >
              <ChevronRight size={48} />
            </button>
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
