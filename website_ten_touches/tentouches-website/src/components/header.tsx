"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#use-cases", label: "Optimise" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-tt-navy/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3 group" aria-label="Ten Touches — home">
          <Image
            src="/app-icon.png"
            alt="Ten Touches app icon"
            width={40}
            height={40}
            className="rounded-[10px]"
          />
          <span className="text-lg font-bold text-white">
            Ten Touches
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/beta"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-tt-cyan to-tt-indigo px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Join Beta
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-tt-navy/95 backdrop-blur-xl border-t border-white/5">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-base text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/beta"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-tt-cyan to-tt-indigo px-5 py-2.5 text-sm font-semibold text-white w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Beta
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
