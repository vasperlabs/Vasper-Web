import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Philosophy from "@/components/sections/philosophy";
import Ventures from "@/components/sections/ventures";
import Team from "@/components/sections/team";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-full overflow-hidden text-center mx-auto">
      <Header />
      <Hero />
      <Philosophy />
      <Ventures />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
