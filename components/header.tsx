"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Globe, ChevronDown } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";

const locales = [
  { code: "en", name: "English" },
  { code: "tr", name: "Türkçe" },
  { code: "de", name: "Deutsch" },
  { code: "es", name: "Español" },
];

function VasperLogo({ className }: { className?: string }) {
  return (
    <Link 
      href="/" 
      className={cn("flex items-baseline gap-0 relative z-50 opacity-100 mix-blend-normal transform-gpu", className)}
    >
      <span className="text-xl font-medium tracking-tight vasper-gradient drop-shadow-sm">
        VΛsper
      </span>
      <span className="text-xl font-light tracking-tight text-slate-900 dark:text-white">
        labs
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  // next-intl hooks
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const navigation = [
    { name: t("research"), href: "#research" },
    { name: t("ventures"), href: "#ventures" },
    { name: t("company"), href: "#company" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    if (newLocale === locale) {
      setLangMenuOpen(false);
      setMobileMenuOpen(false);
      return;
    }

    let newPath = pathname;
    if (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) {
      newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${pathname === '/' ? '' : pathname}`;
    }

    // Explicitly set cookie for next-intl just in case
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    
    router.push(newPath);
    router.refresh();
    
    setLangMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled || mobileMenuOpen
          ? "bg-white dark:bg-[#0A0A0A] border-b border-slate-200 dark:border-[#222222]/50 shadow-md"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <VasperLogo />

          <div className="hidden md:flex md:items-center md:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-light text-slate-600 dark:text-[#888888] transition-colors duration-300 hover:text-slate-900 dark:hover:text-[#EDEDED]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-x-4">
            
            <ThemeSwitcher />

            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                onBlur={() => setTimeout(() => setLangMenuOpen(false), 200)}
                className="inline-flex items-center gap-1.5 px-2 py-2 text-sm font-light text-slate-500 dark:text-[#888888] transition-colors duration-300 hover:text-slate-900 dark:hover:text-[#EDEDED] cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{locale}</span>
                <ChevronDown 
                  className={cn("w-3 h-3 transition-transform duration-300", langMenuOpen && "rotate-180")} 
                />
              </button>

              <div
                className={cn(
                  "absolute right-0 top-full mt-2 w-32 rounded-xl border border-slate-200 dark:border-[#222222] bg-white dark:bg-[#0A0A0A] shadow-lg backdrop-blur-md transition-all duration-300 origin-top-right",
                  langMenuOpen 
                    ? "opacity-100 scale-100 visible translate-y-0" 
                    : "opacity-0 scale-95 invisible -translate-y-2"
                )}
              >
                <div className="py-2 flex flex-col">
                  {locales.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => switchLocale(l.code)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm font-light transition-colors cursor-pointer",
                        locale === l.code 
                          ? "text-slate-900 bg-slate-100 dark:text-[#EDEDED] dark:bg-[#111111]/50" 
                          : "text-slate-600 hover:bg-slate-50 dark:text-[#888888] dark:hover:bg-[#111111]"
                      )}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center px-5 py-2 text-sm font-light text-slate-900 dark:text-[#EDEDED] border border-slate-300 dark:border-[#333333] rounded-full transition-all duration-300 hover:bg-slate-100 dark:hover:border-[#555555] dark:hover:bg-[#111111]"
            >
              {t("contact")}
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden p-2 relative z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={cn(
                  "w-full h-px bg-slate-900 dark:bg-[#EDEDED] transition-all duration-300",
                  mobileMenuOpen && "rotate-45 translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "w-full h-px bg-slate-900 dark:bg-[#EDEDED] transition-all duration-300",
                  mobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-full h-px bg-slate-900 dark:bg-[#EDEDED] transition-all duration-300",
                  mobileMenuOpen && "-rotate-45 -translate-y-1.5"
                )}
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-[#0A0A0A]",
            mobileMenuOpen ? "max-h-[400px] pb-6 border-b border-slate-200 dark:border-[#222222]/50 shadow-2xl" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 px-4 pb-4 md:px-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-slate-800 dark:text-[#EDEDED] transition-colors duration-300 hover:text-vasper-teal"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex flex-wrap gap-3 pt-4 pb-2 border-t border-slate-200 dark:border-[#222222]/50">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => switchLocale(l.code)}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-full transition-colors cursor-pointer",
                    locale === l.code 
                      ? "bg-vasper-teal text-white" 
                      : "bg-slate-100 text-slate-700 dark:bg-[#1A1A1A] dark:text-[#888888] hover:bg-slate-200 dark:hover:bg-[#222222]"
                  )}
                >
                  {l.name}
                </button>
              ))}
            </div>

            <Link
              href="#contact"
              className="mt-2 w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white dark:text-[#0A0A0A] bg-slate-900 dark:bg-[#EDEDED] rounded-full transition-all duration-300 hover:bg-slate-800 dark:hover:bg-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

