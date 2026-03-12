"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MEMBERS = [
  {
    name: "Atlas Vega",
    role: "Founding Architect",
    callsign: "PIONEER_01",
    bio: "15 years in distributed systems. Former principal engineer at a leading cloud infrastructure company. Architect of three successful L1 protocols.",
  },
  {
    name: "Nova Sterling",
    role: "AI Research Lead",
    callsign: "PIONEER_02",
    bio: "PhD in Neural Architecture Search. Published 30+ papers on adaptive intelligence systems. Led research teams at two major AI labs.",
  },
  {
    name: "Orion Blake",
    role: "Cryptographic Engineer",
    callsign: "PIONEER_03",
    bio: "Specialist in zero-knowledge proofs and homomorphic encryption. Core contributor to multiple open-source privacy protocols.",
  },
  {
    name: "Lyra Chen",
    role: "Venture Strategist",
    callsign: "PIONEER_04",
    bio: "10 years in deep-tech venture capital. Portfolio includes $2B+ in combined exits. Expert in token economics and protocol design.",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".team-card");

    gsap.set(cards, { opacity: 0, y: 40 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power3.out",
        }),
      start: "top 85%",
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="team" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="font-mono text-[10px] sm:text-xs text-venus-turquoise/60 tracking-[0.3em] uppercase block mb-3 sm:mb-4 mx-auto">
            [ THE COLLECTIVE ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            The <span className="gradient-text">Pioneers</span>
          </h2>
        </div>

        {/* Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 w-full text-center">
          {MEMBERS.map((member, i) => (
            <div key={i} className="team-card group">
              <div className="glass rounded-[1.25rem] sm:rounded-2xl overflow-hidden hover:border-venus-turquoise/30 transition-all duration-500">
                {/* Avatar placeholder with duotone effect */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-b from-cosmic-teal/10 to-void-black duotone-hover">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-ice-blue/20 flex items-center justify-center">
                      <span className="font-mono text-xl sm:text-2xl text-ice-blue/40 font-bold">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Callsign overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void-black text-center">
                    <span className="font-mono text-[9px] sm:text-[10px] text-supernova-pale/40 tracking-[0.3em] text-center">
                      {member.callsign}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6 flex flex-col items-center justify-center text-center w-full h-full">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-venus-turquoise transition-colors duration-300 text-center w-full block">
                    {member.name}
                  </h3>
                  <p className="font-mono text-[10px] sm:text-xs text-venus-turquoise/60 mb-3 text-center w-full block">
                    {member.role}
                  </p>
                  <p className="text-[11px] sm:text-xs text-ice-blue/40 leading-relaxed max-w-[200px] text-center mx-auto block">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
