import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Base dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,6%)] via-[hsl(0,0%,3%)] to-[hsl(0,0%,2%)]" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(43,72%,53%,0.06)_0%,_transparent_70%)]" />

        {/* Grain texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-40" />

        {/* Geometric accent lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Eyebrow text */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block font-heading text-xs uppercase tracking-[0.5em] text-primary/80 mb-8 border border-primary/20 px-6 py-2">
            Est. 2024 &mdash; Premium Grooming
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`font-heading text-5xl sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-bold uppercase leading-[0.9] mb-8 transition-all duration-1000 delay-400 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-foreground">Where Style</span>
          <span className="block text-gradient-gold mt-2">Meets Culture.</span>
        </h1>

        {/* Subtext */}
        <p
          className={`text-base sm:text-lg text-muted-foreground max-w-md mx-auto mb-12 font-light tracking-wide transition-all duration-1000 delay-600 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Premium cuts. Bold style. Community first.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToBooking}
            className="group bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.25em] px-12 py-4 gold-glow-hover hover:brightness-110 transition-all duration-300"
          >
            Book Your Cut
          </button>
          <button
            onClick={() =>
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-heading text-sm uppercase tracking-[0.25em] text-foreground/60 hover:text-primary px-8 py-4 border border-foreground/10 hover:border-primary/30 transition-all duration-300"
          >
            View Services
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 hover:text-primary transition-all duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-heading">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
