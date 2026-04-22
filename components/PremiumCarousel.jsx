"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "jrt1","jrt2","jrt3","jrt4","jrt5","jrt6","jrt7","jrt8","jrt9","jrt10","jrt11","jrt12","jrt13",
  "nr1_1","nr1_2","nr1_3","nr1_4",
  "nr2_1","nr2_2","nr2_3","nr2_4","nr2_5","nr2_6","nr2_7",
  "nr3_1","nr3_2","nr3_3"
];

export default function PremiumCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prev = (current - 1 + images.length) % images.length;
  const next = (current + 1) % images.length;

  return (
    <div className="w-full py-10 flex justify-center">
      <Link href="/modelrange" className="relative w-full max-w-3xl h-[260px]">

        {/* LEFT */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[70%] opacity-50">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={`/${images[prev]}.jpg`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[30%] h-[70%] opacity-50">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={`/${images[next]}.jpg`}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CENTER */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-full z-10">
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-xl">
            <Image
              key={images[current]}
              src={`/${images[current]}.jpg`}
              alt="Klara Nordic Module"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* SOFT EDGE FADE */}
        <div className="absolute left-0 top-0 w-[15%] h-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-[15%] h-full bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

      </Link>
    </div>
  );
}