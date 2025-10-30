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
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const mossGreen = "#2F3E2F";

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#f7f3eb] to-[#eae5db] border-b border-[#2F3E2F]/25 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo + tagline */}
        <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <Image src="/logo1.png" alt="Logo" width={40} height={40} className="md:w-50 md:h-50" />
          <span
            className="text-sm md:text-lg font-light tracking-wide leading-snug md:leading-tight truncate max-w-[150px] md:max-w-xs"
            style={{
              color: mossGreen,
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            Nordic modular houses, delivered ready-to-use
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 text-sm md:text-base tracking-wide transition-all ${
                pathname === item.href
                  ? "text-[#2F3E2F] font-medium border-b-2 border-[#2F3E2F]"
                  : "text-[#2F3E2F]/80 hover:text-[#2F3E2F]"
              }`}
              style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-2xl font-bold text-[#2F3E2F]"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#f7f3eb] border-t border-[#2F3E2F]/25 shadow-inner">
          <ul className="flex flex-col gap-3 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-base font-medium ${
                    pathname === item.href
                      ? "text-[#2F3E2F]"
                      : "text-[#2F3E2F]/80 hover:text-[#2F3E2F]"
                  }`}
                  onClick={() => setMenuOpen(false)} // stänger meny när man klickar
                  style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
