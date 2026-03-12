"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    tag: "AXIOM_01",
    title: "First Principles Thinking",
    description:
      "We deconstruct complexity to its elemental truths. Every product we incubate begins at the atomic level of the problem space.",
    size: "large",
  },
  {
    tag: "AXIOM_02",
    title: "Zero-to-Orbit Velocity",
    description:
      "From concept to product-market fit at unprecedented speed. Our frameworks eliminate friction at every stage.",
    size: "small",
  },
  {
    tag: "AXIOM_03",
    title: "Cryptographic Trust",
    description:
      "Trustless systems, verifiable computation, and sovereign infrastructure are not buzzwords — they are prerequisites.",
    size: "small",
  },
  {
    tag: "AXIOM_04",
    title: "Intelligent by Default",
    description:
      "Every system we build has neural pathways. AI is not a feature — it is the substrate upon which all our ventures are architected.",
    size: "medium",
  },
  {
    tag: "AXIOM_05",
    title: "Dark Matter Capital",
    description:
      "We deploy capital like dark matter: invisible to the market yet shaping its entire structure. Patient, thesis-driven, and conviction-heavy.",
    size: "medium",
  },
];

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, {
        rotateY: x * 8,
        rotateX: -y * 8,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".philosophy-card");

    gsap.set(cards, { opacity: 0, y: 60, scale: 0.95 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        }),
      start: "top 85%",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="philosophy" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="font-mono text-[10px] sm:text-xs text-venus-turquoise/60 tracking-[0.3em] uppercase block mb-3 sm:mb-4 mx-auto">
            [ THE FIRST LIGHT PRINCIPLE ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our <span className="gradient-text">Philosophy</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4 auto-rows-min w-full">
          {CARDS.map((card, i) => {
            const span =
              card.size === "large"
                ? "md:col-span-2 lg:col-span-2"
                : card.size === "medium"
                ? "md:col-span-1 lg:col-span-1"
                : "";

            return (
              <TiltCard
                key={i}
                className={`philosophy-card ${span}`}
              >
                <div className="glass rounded-[1.25rem] sm:rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between min-h-[200px] hover:border-venus-turquoise/30 transition-colors duration-500 text-center items-center">
                  <div className="flex flex-col items-center w-full">
                    <span className="font-mono text-[10px] text-supernova-pale/50 tracking-[0.3em] block mb-3 sm:mb-4 text-center">
                      {card.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white text-center">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-ice-blue/60 leading-relaxed mt-4 sm:mt-0 max-w-sm text-center">
                    {card.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
