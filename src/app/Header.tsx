"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/concept", label: "Our Concept" },
    { href: "/howitworks", label: "How It Works" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  const mossGreen = "#2F3E2F";

  return (
    <header
      className="flex items-center justify-between w-full px-8 py-4 fixed top-0 left-0 z-50 shadow-md transition-colors duration-300"
      style={{
        background: "linear-gradient(to bottom, #f7f3eb 0%, #eae5db 100%)", // mjuk 3D gradient
        borderBottom: "1px solid rgba(47, 62, 47, 0.25)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.06), 0 3px 6px rgba(0,0,0,0.04)", // subtilt djup
      }}
    >
      {/* Logo + tagline */}
      <Link
        href="/"
        className="flex items-center gap-3 hover:opacity-90 transition"
      >
        <Image src="/logo1.png" alt="Logo" width={50} height={50} />
        <span
          className="text-lg md:text-xl font-light tracking-wide leading-tight"
          style={{
            color: mossGreen,
            fontFamily: "'Outfit', 'Inter', sans-serif",
          }}
        >
          Nordic modular houses, delivered ready-to-use
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`pb-1 transition-all text-base tracking-wide ${
              pathname === item.href
                ? "text-[#2F3E2F] font-medium border-b-2 border-[#2F3E2F]"
                : "text-[#2F3E2F]/80 hover:text-[#2F3E2F]"
            }`}
            style={{
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
