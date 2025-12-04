"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../Header";

export default function Concept() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const forestGreen = "#2F3E2F";

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
            style={{ width: "220px", height: "2px", backgroundColor: forestGreen }}
          />
        </section>

{/* Intro-text */}
<section className="max-w-3xl mx-auto mb-12">
  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
    {/* Text */}
    <p className="md:w-3/4 text-lg leading-relaxed text-gray-700">
      When you choose a Klara modular home, you’re choosing more than a building —
      you’re choosing a way of living rooted in Nordic craftsmanship, natural
      materials, and Finnish reliability. Our homes are built in Finland and
      delivered ready-to-use across Europe, combining durability, design, and
      everyday comfort.
    </p>

    {/* Bild */}
    <div className="md:w-1/4 w-full flex justify-center">
    <Image
  src="/bild3.jpg"
  alt="Macro view"
  width={600}
  height={400}
  className="rounded-lg shadow-lg object-cover h-auto max-h-[220px] md:max-h-[320px]"
/>
    </div>
  </div>
</section>
        

        {/* New Text Sections */}
        <section className="max-w-3xl mx-auto text-left mb-20 space-y-10 text-gray-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen, fontFamily: "'Outfit', 'Inter', sans-serif" }}>
              Built the Nordic Way
            </h2>
            <p>
              Our homes are crafted from natural materials that age beautifully and
              withstand harsh climates. No unnecessary plastics, no shortcuts — just solid
              construction with a focus on longevity, healthy indoor air, and timeless
              Nordic simplicity. It’s quality you can see and feel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen, fontFamily: "'Outfit', 'Inter', sans-serif" }}>
              Finnish Precision, Delivered by Experts
            </h2>
            <p>
              Our builders work with a straightforward, Nordic mindset: do the job
              properly, use good materials, and keep things simple — ensuring consistent
              quality and a home that feels well-built from day one. The modules are
              manufactured in Finland by Walltec Finland Ab, an experienced timber-element
              producer that shares our commitment to durable construction and clean
              craftsmanship.
            </p>
            <p>Learn more: <a href="https://walltec.fi" target="_blank" rel="noopener noreferrer">walltec.fi</a></p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen, fontFamily: "'Outfit', 'Inter', sans-serif" }}>
              Designed for Modern Living
            </h2>
            <p>
              Whether you want a guest house, a tiny home, or a rental property, Klara
              offers flexible solutions that fit your lifestyle. Our plug-&-play homes
              arrive fully finished, energy-efficient, and ready from day one. No
              construction hassle — simply place, connect, and start living.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: forestGreen, fontFamily: "'Outfit', 'Inter', sans-serif" }}>
              Adaptable for Tomorrow
            </h2>
            <p>
              Life changes — and your Klara home can change with it. Move it to a new
              location, repurpose it, or sell it on to someone else. Our modular approach
              gives you long-term value and freedom you don’t get from traditional
              construction.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-6 my-8">
  {/* Bild till vänster */}
  <div className="md:w-1/3 w-full flex-shrink-0">
    <Image
      src="/bild4.jpg"
      alt="Illustration"
      width={400}
      height={400}
      className="rounded-lg shadow-lg object-cover w-full h-full"
    />
  </div>

  {/* Text till höger */}
  <div className="md:w-2/3 w-full">
    <h2
      className="text-2xl font-semibold mb-3"
      style={{ color: forestGreen, fontFamily: "'Outfit', 'Inter', sans-serif" }}
    >
      What You Get
    </h2>
    <ul className="list-disc ml-6 space-y-2">
      <li>A home built from honest, natural materials</li>
      <li>Nordic durability designed for European climates</li>
      <li>Finnish craftsmanship with steady, dependable quality</li>
      <li>A fully finished living space delivered ready-to-use</li>
      <li>Flexibility to adapt, relocate, or resell</li>
    </ul>
    <p className="mt-4">
      Klara homes are made to last — built with integrity, delivered with care, and
      designed to bring you long-term comfort and value.
    </p>
  </div>
</div>
        </section>

        {/* Pitch-sektioner: For Investors / Homeowners / Tiny House Enthusiasts */}
<section className="max-w-5xl mx-auto grid gap-10 md:gap-12 md:grid-cols-3 py-16 px-4 md:px-0">
  {[
    {
  title: "For Income Creators",
  text: `Want to earn extra income with a guest house, Airbnb, or rental cabin?
  Klara’s ready-made modular homes make it easy. Delivered fully finished and
  designed for efficient standard-trailer transport, they arrive quickly and
  with low logistical hassle. Perfect for campsites, small resorts, or anyone
  looking to add modern, comfortable Nordic-quality accommodation.`,
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
      className="rounded-2xl shadow-md p-8 transition-transform hover:scale-[1.01] hover:shadow-lg"
      style={{
        backgroundColor: "rgba(47,62,47,0.38)", // matchar headern
        color: "#f7f3eb", // beige text som header
      }}
    >
      <h2
        className="text-2xl font-semibold mb-4 text-center"
        style={{
          fontFamily: "'Outfit', 'Inter', sans-serif",
          letterSpacing: "0.3px",
        }}
      >
        {section.title}
      </h2>
      <p className="text-base leading-relaxed">
        {section.text}
      </p>
    </div>
  ))}
</section>


        {/* Gallery */}
        <section className="max-w-5xl mx-auto flex flex-col items-center space-y-10 pb-20">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8" style={{ color: forestGreen, fontFamily: "'Outfit', 'Inter', sans-serif" }}>
            Gallery
          </h2>

          {["/fasad1.png", "/floorplan2.png", "/fasad2.png", "/fasad3.png"].map((src, index) => (
            <div key={index} className="relative w-full max-w-4xl cursor-pointer rounded-2xl shadow-xl overflow-hidden">
              <Image src={src} alt={`Gallery Image ${index + 1}`} width={1600} height={1200} className="rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]" onClick={() => setSelectedImage(src)} />
            </div>
          ))}
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
            <Image src={selectedImage} alt="Full view" width={1600} height={1200} className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg" />
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