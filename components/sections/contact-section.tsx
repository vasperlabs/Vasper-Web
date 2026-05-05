"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { sendInquiry } from "@/app/actions/sendInquiry";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("message", data.message);

      const result = await sendInquiry(formData);

      if (result.success) {
        setIsSuccess(true);
        reset();
      }
    } catch {
      // Handle error silently
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 lg:py-48 px-6 lg:px-8 bg-[#0A0A0A]"
    >
      <div className="mx-auto max-w-3xl">
        <div ref={contentRef} className="opacity-0">
          <div className="text-center mb-16">
            <span className="text-sm font-light text-[#555555] tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight text-[#EDEDED] text-balance">
              {"Let's discuss your next project."}
            </h2>
            <p className="mt-6 text-lg font-light leading-relaxed text-[#888888] max-w-xl mx-auto">
              Whether you're interested in research collaboration, investment
              opportunities, or joining our team.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm font-light text-[#666666]">
              <Link
                href="tel:+19176955756"
                className="transition-colors duration-300 hover:text-[#9AEBA3]"
              >
                +1 (917) 695-5756
              </Link>
              <span className="hidden sm:inline text-[#333333]">•</span>
              <Link
                href="mailto:hello@vasperlabs.com"
                className="transition-colors duration-300 hover:text-[#9AEBA3]"
              >
                hello@vasperlabs.com
              </Link>
            </div>
          </div>

          {isSuccess ? (
            <div className="text-center py-16 px-8 bg-[#111111] rounded-2xl border border-[#1A1A1A]">
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-[#9AEBA3]/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-[#9AEBA3]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-normal text-[#EDEDED] mb-2">
                Teşekkürler, mesajınızı aldık.
              </h3>
              <p className="text-base font-light text-[#888888]">
                En kısa sürede size dönüş yapacağız.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-light text-[#888888] mb-3"
                  >
                    Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className={cn(
                      "w-full bg-transparent border-0 border-b border-[#333333] py-3 text-[#EDEDED] placeholder-[#555555] focus:border-[#555555] focus:ring-0 transition-colors duration-300 font-light",
                      errors.name && "border-red-500/50"
                    )}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-400/80">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-light text-[#888888] mb-3"
                  >
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={cn(
                      "w-full bg-transparent border-0 border-b border-[#333333] py-3 text-[#EDEDED] placeholder-[#555555] focus:border-[#555555] focus:ring-0 transition-colors duration-300 font-light",
                      errors.email && "border-red-500/50"
                    )}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-400/80">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-light text-[#888888] mb-3"
                >
                  Company{" "}
                  <span className="text-[#555555]">(optional)</span>
                </label>
                <input
                  {...register("company")}
                  type="text"
                  id="company"
                  className="w-full bg-transparent border-0 border-b border-[#333333] py-3 text-[#EDEDED] placeholder-[#555555] focus:border-[#555555] focus:ring-0 transition-colors duration-300 font-light"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-light text-[#888888] mb-3"
                >
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={4}
                  className={cn(
                    "w-full bg-transparent border-0 border-b border-[#333333] py-3 text-[#EDEDED] placeholder-[#555555] focus:border-[#555555] focus:ring-0 transition-colors duration-300 font-light resize-none",
                    errors.message && "border-red-500/50"
                  )}
                  placeholder="Tell us about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-400/80">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-light text-[#0A0A0A] bg-[#EDEDED] rounded-full transition-all duration-300 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Spinner className="w-4 h-4" />
                      Gönderiliyor...
                    </>
                  ) : (
                    "Gönder"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
