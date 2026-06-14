"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("Philosophy");

  const philosophyPoints = [
    { title: t("card1Title"), description: t("card1Desc") },
    { title: t("card2Title"), description: t("card2Desc") },
    { title: t("card3Title"), description: t("card3Desc") },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
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
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Philosophy cards animation
      const cards = contentRef.current?.querySelectorAll(".philosophy-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 80%",
              end: "top 40%",
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
      id="research"
      className="relative py-32 lg:py-48 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="max-w-3xl opacity-0">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-[#EDEDED] text-balance">
            {t("heading")}
          </h2>
          <p className="mt-8 text-lg sm:text-xl font-light leading-relaxed text-[#888888] max-w-2xl text-pretty">
            {t("description")}
          </p>
        </div>

        <div
          ref={contentRef}
          className="mt-20 lg:mt-28 grid gap-8 lg:gap-12 md:grid-cols-3"
        >
          {philosophyPoints.map((point, index) => (
            <div
              key={index}
              className="philosophy-card group p-8 lg:p-10 bg-[#111111] rounded-2xl border border-[#1A1A1A] transition-all duration-500 hover:bg-[#151515] hover:border-[#252525] opacity-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-light text-[#555555]">
                  0{index + 1}
                </span>
                <div className="flex-1 h-px bg-[#222222]" />
              </div>
              <h3 className="text-xl font-normal text-[#EDEDED] mb-4">
                {point.title}
              </h3>
              <p className="text-base font-light leading-relaxed text-[#888888]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
