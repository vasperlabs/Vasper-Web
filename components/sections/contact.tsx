"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const contactSchema = z.object({
  name: z.string().min(2, "Identifier too short."),
  email: z.string().email("Invalid transmission address."),
  subject: z.string().min(2, "Subject required."),
  message: z.string().min(10, "Payload insufficient. Minimum 10 characters."),
});

type ContactFormData = z.infer<typeof contactSchema>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const el = sectionRef.current.querySelector(".contact-form");
    if (el) {
      gsap.set(el, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        onEnter: () => {
          gsap.to(el, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const inputClass =
    "w-full bg-void-black/50 border border-cosmic-teal/20 rounded-lg px-4 py-3 text-sm text-white font-mono placeholder:text-ice-blue/30 focus:outline-none focus:border-venus-turquoise/50 focus:ring-1 focus:ring-venus-turquoise/20 transition-colors duration-300";

  const errorClass = "font-mono text-[10px] text-red-400/80 mt-1 tracking-wider";

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <span className="font-mono text-[10px] sm:text-xs text-venus-turquoise/60 tracking-[0.3em] uppercase block mb-3 sm:mb-4 mx-auto">
            [ CONTACT TERMINAL ]
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Open <span className="gradient-text">Transmission</span>
          </h2>
          <p className="font-mono text-[10px] sm:text-xs text-ice-blue/40 mt-3 sm:mt-4">
            &gt; sys.init contact_protocol --mode=encrypted
          </p>
        </div>

        {/* Terminal Form */}
        <div className="contact-form w-full text-left">
          <div className="glass-strong rounded-[1.25rem] sm:rounded-2xl p-6 sm:p-8 md:p-10">
            {/* Terminal header */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 sm:mb-8 pb-4 border-b border-cosmic-teal/10">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-ice-blue/30 tracking-wider text-center">
                vasper://contact.terminal
              </span>
            </div>

            {submitStatus === "success" ? (
              <div className="text-center py-10 sm:py-12">
                <div className="font-mono text-venus-turquoise text-xs sm:text-sm mb-2 glow-text">
                  &gt; SYS.MSG: TRANSMISSION RECEIVED
                </div>
                <p className="font-mono text-[10px] sm:text-xs text-ice-blue/40">
                  Payload decrypted successfully. Response ETA: 24-48h.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6 w-full flex flex-col items-center text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                  <div className="flex flex-col items-center">
                    <label className="font-mono text-[10px] text-ice-blue/40 tracking-[0.2em] block mb-2 text-center w-full">
                      IDENTIFIER
                    </label>
                    <input
                      {...register("name")}
                      className={`w-full bg-void-black/50 border ${
                        errors.name ? "border-red-500/50" : "border-cosmic-teal/30"
                      } rounded-lg px-4 py-3 font-mono text-xs sm:text-sm text-white text-center focus:outline-none focus:border-venus-turquoise transition-colors duration-300`}
                      placeholder="ENTER_NAME"
                      id="contact-name"
                    />
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>
                  <div className="flex flex-col items-center">
                    <label className="font-mono text-[10px] text-ice-blue/40 tracking-[0.2em] block mb-2 text-center w-full">
                      COMM_LINK (EMAIL)
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={`w-full bg-void-black/50 border ${
                        errors.email ? "border-red-500/50" : "border-cosmic-teal/30"
                      } rounded-lg px-4 py-3 font-mono text-xs sm:text-sm text-white text-center focus:outline-none focus:border-venus-turquoise transition-colors duration-300`}
                      placeholder="name@domain.com"
                      id="contact-email"
                    />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="w-full flex flex-col items-center">
                  <label className="font-mono text-[10px] text-ice-blue/40 tracking-[0.2em] block mb-2 text-center w-full">
                    SUBJECT_HEADER
                  </label>
                  <input
                    {...register("subject")}
                    className={`w-full bg-void-black/50 border ${
                      errors.subject ? "border-red-500/50" : "border-cosmic-teal/30"
                    } rounded-lg px-4 py-3 font-mono text-xs sm:text-sm text-white text-center focus:outline-none focus:border-venus-turquoise transition-colors duration-300`}
                    placeholder="CLASSIFICATION_TAG"
                    id="contact-subject"
                  />
                  {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
                </div>

                <div className="w-full flex flex-col items-center">
                  <label className="font-mono text-[10px] text-ice-blue/40 tracking-[0.2em] block mb-2 text-center w-full">
                    ENCRYPTED_PAYLOAD (MESSAGE)
                  </label>
                  <textarea
                    {...register("message")}
                    className={`w-full bg-void-black/50 border ${
                      errors.message ? "border-red-500/50" : "border-cosmic-teal/30"
                    } rounded-lg px-4 py-3 font-mono text-xs sm:text-sm text-white text-center focus:outline-none focus:border-venus-turquoise transition-colors duration-300 resize-none`}
                    placeholder="TRANSMIT_MESSAGE"
                    rows={5}
                    id="contact-message"
                  />
                  {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>

                <MagneticButton
                  type="submit"
                  disabled={submitStatus === "submitting"}
                  className="w-full py-3.5 sm:py-4 rounded-xl font-mono text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase
                             bg-venus-turquoise/10 border border-venus-turquoise/30 text-venus-turquoise
                             hover:bg-venus-turquoise/20 hover:border-venus-turquoise/60
                             disabled:opacity-50 disabled:cursor-not-allowed
                             transition-all duration-500"
                >
                  {submitStatus === "submitting" ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-venus-turquoise animate-pulse" />
                      ENCRYPTING PAYLOAD...
                    </span>
                  ) : submitStatus === "error" ? (
                    "TRANSMISSION FAILED — RETRY"
                  ) : (
                    "TRANSMIT"
                  )}
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
