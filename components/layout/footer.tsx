import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative py-16 sm:py-24 px-6 text-center w-full flex flex-col items-center" style={{ background: "linear-gradient(to bottom, var(--color-void-black), #000000)" }}>
      <div className="max-w-7xl mx-auto flex flex-col items-center w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 w-full max-w-5xl mx-auto">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center flex-1 max-w-[280px]">
            <a href="/" className="flex flex-col items-center justify-center mb-6" data-cursor="pointer">
              <Image 
                src="/logo-white.svg" 
                alt="Vasper Labs" 
                width={160} 
                height={45} 
                className="w-36 sm:w-40 h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="font-mono text-[10px] sm:text-xs text-ice-blue/30 leading-relaxed text-center w-full">
              The first light in the deep-tech void.<br />
              Building scalable infrastructure for the next web.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center font-mono text-xs flex-1">
            <span className="text-ice-blue/20 tracking-[0.3em] block mb-4">NAVIGATION</span>
            <div className="space-y-2">
              {["Philosophy", "Ventures", "Team", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-ice-blue/40 hover:text-venus-turquoise transition-colors duration-300"
                  data-cursor="pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="font-mono text-xs flex flex-col items-center flex-1">
            <span className="text-ice-blue/20 tracking-[0.3em] block mb-4 text-center w-full">TELEMETRY</span>
            <div className="space-y-3 text-ice-blue/40">
              <div>
                <span className="text-ice-blue/20 block mb-1">COMMS:</span>
                <a
                  href="mailto:contact@vasperlabs.com"
                  className="hover:text-venus-turquoise transition-colors duration-300"
                  data-cursor="pointer"
                >
                  contact@vasperlabs.com
                </a>
              </div>
              <div>
                <span className="text-ice-blue/20 block mb-1">FREQ:</span>
                <a
                  href="tel:+19176955756"
                  className="hover:text-venus-turquoise transition-colors duration-300"
                  data-cursor="pointer"
                >
                  +1 (917) 695-5756
                </a>
              </div>
              <div>
                <span className="text-ice-blue/20 block mb-1">COORD:</span>
                <span>United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cosmic-teal/10 flex flex-col items-center justify-center gap-4 w-full max-w-4xl mx-auto">
          <p className="font-mono text-[10px] text-ice-blue/30 text-center">
            © {new Date().getFullYear()} Vasper Labs. All rights reserved.
          </p>
          <div className="font-mono text-[10px] text-ice-blue/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-venus-turquoise" />
            SYSTEM OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
