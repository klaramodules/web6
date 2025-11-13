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

  const mossGreenTransparent = "rgba(47,62,47,0.48)"; // mörkare / mer markerad
  const beige = "#f7f3eb";

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md"
      style={{
        backgroundColor: mossGreenTransparent,
        boxShadow: "0 4px 12px rgba(0,0,0,0.18)",
      }}
    >
      <div className="w-full flex items-center justify-between h-14 md:h-14 px-3 md:px-6 lg:px-12">
        {/* LOGO + TAGLINE */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="flex-shrink-0">
            <Image
              src="/logo4.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain w-[55px] h-[55px] md:w-[65px] md:h-[65px]"
            />
          </div>
          <span
            className="text-xs md:text-sm font-light leading-tight max-w-[180px] md:max-w-xs overflow-hidden whitespace-nowrap text-ellipsis"
            style={{
              color: beige,
              fontFamily: "'Outfit','Inter',sans-serif",
              textShadow: "1px 1px 2px rgba(0,0,0,0.15)",
            }}
          >
            Nordic modular houses
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
                  ? "text-[#f7f3eb] border-b-2 border-[#f7f3eb]/60"
                  : "text-[#f7f3eb]/80 hover:text-[#f7f3eb]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl font-bold text-[#f7f3eb]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <nav className="md:hidden" style={{ backgroundColor: mossGreenTransparent }}>
          <ul className="flex flex-col gap-3 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block text-base font-medium ${
                    pathname === item.href
                      ? "text-[#f7f3eb]"
                      : "text-[#f7f3eb]/80 hover:text-[#f7f3eb]"
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
