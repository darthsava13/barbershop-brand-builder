import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Barbers", href: "#barbers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Location", href: "#findus" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);

      // Track active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[hsl(0,0%,4%)]/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-heading text-primary-foreground text-lg font-bold group-hover:gold-glow transition-all duration-300">
              CP
            </div>
            <span className="font-heading text-lg uppercase tracking-[0.2em] text-foreground hidden sm:block">
              Crowd <span className="text-primary">Pleezers</span>
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className={`relative font-heading text-xs uppercase tracking-[0.25em] px-4 py-2 transition-all duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-primary" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleClick("#booking")}
              className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground font-heading text-xs uppercase tracking-[0.2em] px-6 py-2.5 hover:brightness-110 gold-glow-hover transition-all duration-300"
            >
              Book Now
            </button>

            <a
              href="tel:+15551234567"
              className="lg:hidden text-primary hover:text-primary/80 transition-colors"
              aria-label="Call us"
            >
              <Phone size={22} />
            </a>

            <button
              className="lg:hidden text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 z-40 bg-[hsl(0,0%,4%)]/98 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="font-heading text-3xl uppercase tracking-[0.3em] text-foreground/70 hover:text-primary transition-all duration-300"
              style={{ transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#booking")}
            className="mt-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.25em] px-10 py-4 gold-glow hover:brightness-110 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
