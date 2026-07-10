"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Dr. Elena Vasquez",
    role: "Founder & CEO",
    bio: "Former research lead at DeepMind. PhD in Machine Learning from Cambridge.",
  },
  {
    name: "Marcus Chen",
    role: "CTO",
    bio: "Ex-Protocol Labs. Pioneer in distributed systems and consensus mechanisms.",
  },
  {
    name: "Dr. Sarah Williams",
    role: "Head of AI Research",
    bio: "Published 40+ papers in NeurIPS, ICML. Former OpenAI research scientist.",
  },
  {
    name: "James Okonkwo",
    role: "Head of Engineering",
    bio: "Built infrastructure at Stripe and Cloudflare. Systems architect.",
  },
];

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      const members = gridRef.current?.querySelectorAll(".team-member");
      if (members) {
        gsap.fromTo(
          members,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
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
      id="company"
      className="relative py-32 lg:py-48 px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={headingRef} className="max-w-3xl mb-20 lg:mb-28 opacity-0 will-change-[transform,opacity]">
          <span className="text-sm font-light text-[#555555] tracking-wider uppercase mb-4 block">
            Leadership
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight text-[#EDEDED] text-balance">
            World-class researchers and engineers.
          </h2>
          <p className="mt-6 text-lg font-light leading-relaxed text-[#888888] max-w-xl">
            Our team brings together decades of experience from leading
            institutions and technology companies.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member, index) => (
            <div key={index} className="team-member group opacity-0 will-change-[transform,opacity]">
              {/* Portrait placeholder */}
              <div className="aspect-[3/4] mb-6 bg-[#111111] rounded-xl overflow-hidden border border-[#1A1A1A]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[#222222]" />
                </div>
              </div>
              <h3 className="text-lg font-normal text-[#EDEDED]">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-light text-[#13678A]">
                {member.role}
              </p>
              <p className="mt-3 text-sm font-light leading-relaxed text-[#666666]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
