import Link from "next/link";

const navigation = {
  research: [
    { name: "Foundation Models", href: "#" },
    { name: "Infrastructure", href: "#" },
    { name: "Publications", href: "#" },
  ],
  company: [
    { name: "About", href: "#company" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    { name: "Twitter", href: "https://twitter.com/vasperlabs" },
    { name: "GitHub", href: "https://github.com/vasperlabs" },
    { name: "LinkedIn", href: "https://linkedin.com/company/vasperlabs" },
  ],
};

export function Footer() {
  return (
    <footer className="relative py-20 lg:py-28 px-6 lg:px-8 border-t border-[#1A1A1A]">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-baseline gap-0">
              <span className="text-xl font-medium tracking-tight vasper-gradient">
                VΛsper
              </span>
              <span className="text-xl font-light tracking-tight text-[#A1A1AA]">
                labs
              </span>
            </Link>
            <p className="mt-6 text-sm font-light leading-relaxed text-[#666666] max-w-sm">
              An independent research facility pioneering the next generation of
              intelligent systems and decentralized infrastructure.
            </p>
            <p className="mt-6 text-sm font-light text-[#555555]">
              London, United Kingdom
            </p>
            <div className="mt-4 space-y-1 text-sm font-light text-[#666666]">
              <p>
                <Link
                  href="tel:+19176955756"
                  className="transition-colors duration-300 hover:text-[#9AEBA3]"
                >
                  +1 (917) 695-5756
                </Link>
              </p>
              <p>
                <Link
                  href="mailto:hello@vasperlabs.com"
                  className="transition-colors duration-300 hover:text-[#9AEBA3]"
                >
                  hello@vasperlabs.com
                </Link>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-8 grid gap-8 sm:grid-cols-4">
            <div>
              <h3 className="text-sm font-normal text-[#888888] mb-4">
                Research
              </h3>
              <ul className="space-y-3">
                {navigation.research.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-light text-[#555555] transition-colors duration-300 hover:text-[#888888]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-normal text-[#888888] mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-light text-[#555555] transition-colors duration-300 hover:text-[#888888]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-normal text-[#888888] mb-4">Legal</h3>
              <ul className="space-y-3">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-light text-[#555555] transition-colors duration-300 hover:text-[#888888]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-normal text-[#888888] mb-4">
                Social
              </h3>
              <ul className="space-y-3">
                {navigation.social.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-light text-[#555555] transition-colors duration-300 hover:text-[#888888]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-[#444444]">
            © {new Date().getFullYear()} Vasper Labs Ltd. All rights reserved.
          </p>
          <p className="text-xs font-light text-[#444444]">
            Registered in England and Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
