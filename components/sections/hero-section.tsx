"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("Hero");

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0 }
      )
        .fromTo(
          subtextRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0 },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "-=0.6"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1
          ref={headingRef}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-[#EDEDED] text-balance opacity-0"
        >
          {t("title")}
        </h1>

        <p
          ref={subtextRef}
          className="mt-8 text-lg sm:text-xl font-light leading-relaxed text-[#888888] max-w-2xl mx-auto text-pretty opacity-0"
        >
          {t("subtext")}
        </p>

        <div ref={ctaRef} className="mt-12 opacity-0">
          <Link
            href="#research"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-light text-[#0A0A0A] bg-[#EDEDED] rounded-full transition-all duration-300 hover:bg-white hover:gap-4"
          >
            {t("cta")}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#333333] to-transparent" />
      </div>
    </section>
  );
}
