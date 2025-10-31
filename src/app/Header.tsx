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
    <header className="fixed top-0 left-0 w-full bg-[#f7f3eb] border-b border-[#2F3E2F]/25 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 md:h-14 px-3 md:px-8">
        
        {/* LOGO + TAGLINE */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="flex-shrink-0">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain w-[45px] h-[45px] md:w-[60px] md:h-[60px]"
            />
          </div>

          <span
            className="
              text-xs md:text-sm 
              font-light
              leading-tight
              md:max-w-sm
              max-w-[180px]
              whitespace-nowrap
              overflow-hidden
              text-ellipsis
            "
            style={{
              color: mossGreen,
              fontFamily: "'Outfit','Inter',sans-serif",
            }}
          >
            Nordic modular houses, delivered ready-to-use
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm md:text-base font-medium transition ${
                pathname === item.href
                  ? "text-[#2F3E2F] border-b-2 border-[#2F3E2F]"
                  : "text-[#2F3E2F]/70 hover:text-[#2F3E2F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl font-bold text-[#2F3E2F]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="md:hidden bg-[#f7f3eb] border-t border-[#2F3E2F]/25">
          <ul className="flex flex-col gap-3 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-base font-medium ${
                    pathname === item.href
                      ? "text-[#2F3E2F]"
                      : "text-[#2F3E2F]/70 hover:text-[#2F3E2F]"
                  }`}
                  onClick={() => setMenuOpen(false)}
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
