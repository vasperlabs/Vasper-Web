import { FluidBackground } from "@/components/fluid-background";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { VenturesSection } from "@/components/sections/ventures-section";
import { TeamSection } from "@/components/sections/team-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <FluidBackground />
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <VenturesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
