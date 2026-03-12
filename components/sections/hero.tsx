"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/magnetic-button";

const VoidScene = dynamic(() => import("@/components/three/void-scene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-void-black" />,
});

function TypingEffect({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className="typing-cursor">
      {displayed}
    </span>
  );
}

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const words = headlineRef.current.querySelectorAll(".word");
    gsap.set(words, { opacity: 0, y: 40 });
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <VoidScene />

      {/* Content */}
      <div className="relative z-10 w-full md:max-w-5xl px-4 sm:px-6 mt-16 text-center flex flex-col items-center justify-center">
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.1] tracking-tight mb-8"
        >
          {"Illuminating the Deep-Tech Void.".split(" ").map((word, i) => (
            <span key={i} className="word inline-block mr-[0.25em]">
              {word === "Deep-Tech" ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        <div className="font-mono text-xs sm:text-sm md:text-base text-venus-turquoise/80 mb-10 h-12 sm:h-8 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
          <span className="text-starlight-green/60 hidden sm:inline">&gt; </span>
          <TypingEffect
            text="THE FIRST LIGHT IN WEB3 & SCALABLE AI INFRASTRUCTURE."
            delay={2000}
          />
        </div>

        <MagneticButton
          onClick={scrollToContact}
          className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full
                     bg-venus-turquoise/10 border border-venus-turquoise/40
                     text-venus-turquoise font-mono text-xs sm:text-sm tracking-widest uppercase
                     hover:bg-venus-turquoise/20 hover:border-venus-turquoise
                     transition-all duration-500"
        >
          <span className="w-2 h-2 rounded-full bg-venus-turquoise" />
          Enter the Void
        </MagneticButton>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ice-blue/30">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ice-blue/30 to-transparent" />
      </div>
    </section>
  );
}
