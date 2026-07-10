import { FluidBackground } from "@/components/fluid-background";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import dynamic from "next/dynamic";

const PhilosophySection = dynamic(() => import("@/components/sections/philosophy-section").then((mod) => mod.PhilosophySection));
const VenturesSection = dynamic(() => import("@/components/sections/ventures-section").then((mod) => mod.VenturesSection));
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then((mod) => mod.ContactSection));
const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer));

export default function Home() {
  return (
    <>
      <FluidBackground />
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <VenturesSection />
        {/* <TeamSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
