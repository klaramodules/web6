"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../Header";

export default function Concept() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const forestGreen = "#2F3E2F";
  const beige = "#f5f0e6";

  return (
    <section className="relative text-center overflow-hidden min-h-screen w-full bg-gradient-to-b from-[#f5f0e6] to-[#e6e1d8]">
      {/* Bakgrund (ljus ton, ingen parallax här) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f5f0e6] to-[#e6e1d8]" />

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
            Modular Homes. Nordic Quality. 
              <br />
              Finnish Precision.
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

        {/* Intro-text */}
        <section className="max-w-3xl mx-auto text-center mb-12">
          <p className="mb-4 text-lg leading-relaxed text-gray-700">
            Our modular homes are designed for flexibility, comfort, and Nordic durability.
            Built in Finland, delivered ready-to-use across Europe.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-700">
            Whether you want a guest house, a tiny home, or a rental property,
            Klara has the perfect solution. Our plug & play homes combine modern design,
            sustainable materials, and efficient construction. And if your needs change, 
            your Klara home can move with you — or be sold on to someone new.
          </p>
         
        </section>

        {/* Stor bild */}
        <section className="flex flex-col items-center mb-20">
          <div className="relative w-full max-w-4xl cursor-pointer rounded-2xl shadow-xl overflow-hidden">
            <Image
              src="/fasad1.png"
              alt="Facade 1"
              width={1600}
              height={1200}
              className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => setSelectedImage("/fasad1.png")}
            />
          </div>
        </section>

        {/* Pitch-sektioner */}
        <section className="max-w-5xl mx-auto grid gap-10 md:gap-12 md:grid-cols-3 py-16 px-4 md:px-0">
          {[
            {
              title: "For Investors",
              text: `Klara offers plug & play modular homes built with Finnish quality and designed
              for efficient, standard trailer transport — a unique logistics advantage that
              reduces cost and complexity. The European small home market is expanding
              rapidly, driven by the demand for flexible and sustainable living solutions.
              Our scalable business model is based on standardized home types, clear margins,
              and low production risk. We invite investors to join us early in a growing
              export venture with strong demand and a clear path to profitability.`,
            },
            {
              title: "For Homeowners",
              text: `Dreaming of extra space — without the hassle of construction or permits?
              Our ready-made modular homes are delivered straight to your property, fully
              finished and ready to use. No need for contractors or long building projects — 
              simply choose your model, prepare your site, and move in. Finnish craftsmanship,
              smart layouts, and timeless design make it easy to create your perfect guest
              house, studio, or rental cabin.`,
            },
            {
              title: "For Tiny House Enthusiasts",
              text: `Klara homes are made for those who value freedom, simplicity, and sustainability.
              Built in Finland with precision and care, our tiny houses can be placed almost
              anywhere — by the sea, in the forest, or in the mountains. Choose an off-grid
              model with solar power and independent water solutions for complete autonomy.
              Designed for life on your terms — ready, mobile, and built to last.`,
            },
          ].map((section, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 transition-transform hover:scale-[1.01] hover:shadow-lg"
            >
              <h2
                className="text-2xl font-semibold mb-4 text-center"
                style={{
                  color: forestGreen,
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                  letterSpacing: "0.3px",
                }}
              >
                {section.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">{section.text}</p>
            </div>
          ))}
        </section>

        {/* Galleri */}
        <section className="max-w-5xl mx-auto flex flex-col items-center space-y-10 pb-20">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-8"
            style={{
              color: forestGreen,
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            Gallery
          </h2>

          {["/floorplan2.png", "/fasad2.png", "/fasad3.png"].map((src, index) => (
            <div
              key={index}
              className="relative w-full max-w-4xl cursor-pointer rounded-2xl shadow-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={1600}
                height={1200}
                className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => setSelectedImage(src)}
              />
            </div>
          ))}
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <Image
              src={selectedImage}
              alt="Full view"
              width={1600}
              height={1200}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}

        <footer className="text-gray-700 text-sm py-6 text-center">
          © {new Date().getFullYear()} Klara Nordic Modules. Built in Finland.
        </footer>
      </div>
    </section>
  );
}
