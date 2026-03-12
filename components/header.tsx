"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Research", href: "#research" },
  { name: "Ventures", href: "#ventures" },
  { name: "Company", href: "#company" },
];

function VasperLogo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-baseline gap-0", className)}>
      <span className="text-xl font-medium tracking-tight vasper-gradient">
        VΛsper
      </span>
      <span className="text-xl font-light tracking-tight text-[#A1A1AA]">
        labs
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#222222]/50"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <VasperLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-light text-[#888888] transition-colors duration-300 hover:text-[#EDEDED]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center px-5 py-2 text-sm font-light text-[#EDEDED] border border-[#333333] rounded-full transition-all duration-300 hover:border-[#555555] hover:bg-[#111111]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-px bg-[#EDEDED] transition-all duration-300",
                  mobileMenuOpen && "rotate-45 translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "w-full h-px bg-[#EDEDED] transition-all duration-300",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-px bg-[#EDEDED] transition-all duration-300",
                  mobileMenuOpen && "-rotate-45 -translate-y-1.5"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-64 pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-light text-[#888888] transition-colors duration-300 hover:text-[#EDEDED]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 mt-2 text-sm font-light text-[#EDEDED] border border-[#333333] rounded-full transition-all duration-300 hover:border-[#555555]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
