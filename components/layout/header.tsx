"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/ui/magnetic-button";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const isPastThreshold = currentScrollY > 100;

      if (isPastThreshold) {
        setIsVisible(!isScrollingDown);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.to(headerRef.current, {
      y: isVisible ? 0 : -100,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [isVisible]);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 glass"
      style={{ willChange: "transform" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between relative">
        {/* Logo */}
        <a href="/" className="flex-shrink-0 flex items-center z-10" data-cursor="pointer">
          <Image 
            src="/logo-white.svg" 
            alt="Vasper Labs" 
            width={140} 
            height={40} 
            className="w-28 sm:w-36 h-auto"
            priority
          />
        </a>

        {/* Center Navigation Menu (Absolute Center) */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs text-ice-blue/80 tracking-widest uppercase absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="#philosophy" className="hover:text-venus-turquoise transition-colors duration-300">
            Philosophy
          </Link>
          <Link href="#ventures" className="hover:text-venus-turquoise transition-colors duration-300">
            Ventures
          </Link>
          <Link href="#team" className="hover:text-venus-turquoise transition-colors duration-300">
            Collective
          </Link>
        </nav>

        {/* CTA */}
        <div className="z-10">
          <MagneticButton
            onClick={scrollToContact}
            className="flex-shrink-0 px-4 py-2 sm:px-6 sm:py-2.5 flex items-center gap-2 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase
                       border border-venus-turquoise/30 text-venus-turquoise bg-venus-turquoise/5
                       hover:bg-venus-turquoise/15 hover:border-venus-turquoise/60
                       transition-all duration-300 backdrop-blur-sm"
          >
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-venus-turquoise" />
            <span className="whitespace-nowrap">Contact</span>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
}
