import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "../../assets/logo/rc.png";
import logoWhite from "../../assets/logo/km.gif";

const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/about", id: "about" },
  { label: "Services", href: "/services", id: "services" },
  { label: "Courses", href: "/course", id: "course" },
  { label: "Contact", href: "/contact", id: "contact" },

];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 text-[#101010] transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-[#F5F5F5]/85 shadow-sm backdrop-blur-xl"
          : "bg-[#F5F5F5]"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-[1600px] items-center justify-between gap-3 px-4 transition-all duration-300 sm:px-8 lg:px-12 xl:px-16"
      >
        {/* Both logos */}
        <a
          href="/"
          aria-label="RC Creation home"
          className="flex shrink-0 items-center gap-2 sm:gap-3"
        >
          <img
            src={logo}
            alt="RC Creation"
            className="h-8 w-auto max-w-[95px] object-contain sm:h-10 sm:max-w-[130px] lg:h-12 lg:max-w-[150px]"
          />

          <span className="h-7 w-px bg-black/15 sm:h-9" />

          <img
            src={logoWhite}
            alt="KM"
            className="h-8 w-auto max-w-[65px] object-contain sm:h-10 sm:max-w-[95px] lg:h-11 lg:max-w-[225px]"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={index === 0 ? "page" : undefined}
              className={`group relative py-2 text-sm font-medium transition-colors duration-300 hover:text-[#F20D18] ${
                index === 0 ? "text-[#F20D18]" : "text-black/65"
              }`}
            >
              {link.label}

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#F20D18] transition-all duration-300 ${
                  index === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
          ))}
        </div>

        {/* Desktop contact button */}
        <a
          href="/contact"
          className="group hidden min-h-11 shrink-0 items-center justify-center gap-2 bg-[#F20D18] px-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#101010] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18] focus-visible:ring-offset-2 lg:inline-flex xl:px-5"
        >
          Let's Talk
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-black/15 transition-colors hover:border-[#F20D18] hover:text-[#F20D18] lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`absolute left-0 right-0 top-full border-t border-black/10 bg-[#F5F5F5]/95 px-5 shadow-xl backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1500px] py-4">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between border-b border-black/10 py-4 text-sm font-medium transition-colors hover:text-[#F20D18] ${
                index === 0 ? "text-[#F20D18]" : "text-black/75"
              }`}
            >
              {link.label}
              <ArrowUpRight size={17} />
            </a>
          ))}

          <a
            href="/contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center gap-2 bg-[#F20D18] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#101010]"
          >
            Start a Project
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </header>
  );
}
