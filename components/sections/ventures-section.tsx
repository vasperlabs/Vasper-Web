"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export function VenturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("Ventures");

  const ventures = [
    {
      name: t("card1Name"),
      category: t("card1Cat"),
      description: t("card1Desc"),
      status: t("card1Status"),
    },
    {
      name: t("card2Name"),
      category: t("card2Cat"),
      description: t("card2Desc"),
      status: t("card2Status"),
    },
    {
      name: t("card3Name"),
      category: t("card3Cat"),
      description: t("card3Desc"),
      status: t("card3Status"),
    },
    {
      name: t("card4Name"),
      category: t("card4Cat"),
      description: t("card4Desc"),
      status: t("card4Status"),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll(".venture-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ventures"
      className="relative py-32 lg:py-48 px-6 lg:px-8 bg-[#0A0A0A]"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="max-w-3xl mb-20 lg:mb-28 opacity-0">
          <span className="text-sm font-light text-[#555555] tracking-wider uppercase mb-4 block">
            {t("label")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight text-[#EDEDED] text-balance">
            {t("heading")}
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-[#888888] max-w-xl">
            {t("description")}
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 md:grid-cols-2"
        >
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="venture-card group relative p-8 lg:p-10 bg-[#111111] rounded-2xl border border-[#1A1A1A] transition-all duration-500 hover:bg-[#151515] hover:border-[#252525] cursor-pointer opacity-0"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-xs font-light text-[#13678A] tracking-wider uppercase">
                    {venture.category}
                  </span>
                  <h3 className="mt-2 text-xl font-normal text-[#EDEDED] group-hover:text-white transition-colors duration-300">
                    {venture.name}
                  </h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#444444] transition-all duration-300 group-hover:text-[#888888] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-base font-light leading-relaxed text-[#888888] mb-6">
                {venture.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9AEBA3]/60" />
                <span className="text-xs font-light text-[#666666]">
                  {venture.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
