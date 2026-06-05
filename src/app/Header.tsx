"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/concept", label: "Our Concept" },
    { href: "/howitworks", label: "How It Works" },
    { href: "/modelrange", label: "Model Range" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const beige = "#f7f3eb";

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{
  backgroundColor: "rgba(47, 62, 47, 0.82)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
  boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
}}
    >
      {/* SINGLE BAR */}
      <div className="flex items-center justify-between w-full h-[52px] px-3 md:px-6 lg:px-10">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 h-full">
          <Image
            src="/Klara_2.png"
            alt="Logo"
            width={50}
            height={50}
            className="w-[44px] h-[44px] md:w-[52px] md:h-[52px] object-contain"
          />

          <span
            className="text-xs md:text-sm font-light whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]"
            style={{
              color: beige,
              fontFamily: "'Outfit','Inter',sans-serif",
              textShadow: "0 1px 2px rgba(0,0,0,0.2)",
            }}
          >
            Nordic modular houses
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-5 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                pathname === item.href
                  ? "text-[#f7f3eb] border-b border-[#f7f3eb]/50"
                  : "text-[#f7f3eb]/75 hover:text-[#f7f3eb]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl font-bold text-[#f7f3eb]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
        style={{
          backgroundColor: "rgba(47, 62, 47, 0.65)",
          backdropFilter: "blur(12px)",
        }}
      >
        <ul className="flex flex-col gap-3 p-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block text-base font-medium ${
                  pathname === item.href
                    ? "text-[#f7f3eb]"
                    : "text-[#f7f3eb]/80"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}