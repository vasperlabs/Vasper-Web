"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VENTURES = [
  {
    id: "01",
    name: "Nebula Protocol",
    subtitle: "Decentralized Compute Mesh",
    description:
      "A trustless, peer-to-peer distributed computing network enabling sovereign AI inference at the edge.",
    tags: ["WEB3", "DePIN", "EDGE_COMPUTE"],
    status: "ACTIVE",
  },
  {
    id: "02",
    name: "Synaptic AI",
    subtitle: "Adaptive Intelligence Engine",
    description:
      "Self-evolving ML pipelines that autonomously optimize model architecture based on real-time data topology.",
    tags: ["AI/ML", "AutoML", "NEURAL_ARCH"],
    status: "IN_ORBIT",
  },
  {
    id: "03",
    name: "Void Finance",
    subtitle: "Dark Pool Liquidity Layer",
    description:
      "Privacy-preserving DeFi infrastructure enabling institutional-grade dark pool trading with zero-knowledge proofs.",
    tags: ["DeFi", "ZK_PROOFS", "PRIVACY"],
    status: "STEALTH",
  },
  {
    id: "04",
    name: "Chronos Chain",
    subtitle: "Temporal Consensus Protocol",
    description:
      "A novel L1 blockchain utilizing time-weighted consensus for sub-second finality and infinite horizontal scaling.",
    tags: ["L1", "CONSENSUS", "SCALING"],
    status: "GENESIS",
  },
];

export default function Ventures() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".venture-card");

    gsap.set(cards, { opacity: 0, y: 50 });

    ScrollTrigger.batch(cards, {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
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
    <section id="ventures" className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section header */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="font-mono text-[10px] sm:text-xs text-venus-turquoise/60 tracking-[0.3em] uppercase block mb-3 sm:mb-4 mx-auto">
            [ ORBITAL NODES ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our <span className="gradient-text">Ventures</span>
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
          {VENTURES.map((venture) => (
            <div
              key={venture.id}
              className="venture-card celestial-border rounded-[1.25rem] sm:rounded-2xl"
            >
              <div className="glass rounded-[1.25rem] sm:rounded-2xl p-6 sm:p-8 md:p-10 h-full relative overflow-hidden group flex flex-col items-center text-center">
                {/* Node tag */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8">
                  <span className="font-mono text-[10px] text-supernova-pale/40 tracking-[0.2em] sm:tracking-[0.3em]">
                    [ ORBITAL_NODE_{venture.id} ]
                  </span>
                  <span
                    className={`font-mono text-[9px] sm:text-[10px] tracking-[0.2em] px-3 py-1.5 rounded-full border ${
                      venture.status === "ACTIVE"
                        ? "text-venus-turquoise border-venus-turquoise/30"
                        : venture.status === "IN_ORBIT"
                        ? "text-starlight-green border-starlight-green/30"
                        : venture.status === "STEALTH"
                        ? "text-ice-blue border-ice-blue/30"
                        : "text-supernova-pale border-supernova-pale/30"
                    }`}
                  >
                    {venture.status}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white group-hover:text-venus-turquoise transition-colors duration-500 text-center">
                  {venture.name}
                </h3>
                <p className="font-mono text-xs text-venus-turquoise/60 mb-4 text-center">
                  {venture.subtitle}
                </p>
                <p className="text-sm text-ice-blue/50 leading-relaxed mb-6 max-w-md text-center">
                  {venture.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {venture.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-supernova-pale/40 border border-supernova-pale/10 rounded px-2 py-1 tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover glow effect */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-venus-turquoise/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
