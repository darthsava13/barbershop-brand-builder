import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jamal W.",
    service: "Skin Fade with Dre",
    rating: 5,
    text: "Been going to Crowd Pleezers for over a year now. Dre's fades are unmatched. I've never walked out of there anything less than 100%.",
  },
  {
    name: "Marcus T.",
    service: "The Works with Marcus",
    rating: 5,
    text: "The full experience is worth every penny. Hot towel, clean fade, beard lined up perfect. This is the only shop that gets my money.",
  },
  {
    name: "Chris D.",
    service: "Classic Haircut with Jay",
    rating: 5,
    text: "Jay understood exactly what I wanted from a picture I showed him. Better than the reference. That's skill you can't teach.",
  },
  {
    name: "Andre S.",
    service: "Kids Cut with Rico",
    rating: 5,
    text: "My son is fidgety in the chair but Rico was patient and gave him the cleanest cut. He walked out feeling like a superstar.",
  },
  {
    name: "Devon M.",
    service: "Beard Trim with Marcus",
    rating: 5,
    text: "Marcus turned my patchy beard into something sharp and intentional. The attention to detail here is on another level.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const next = useCallback(
    () => goTo((current + 1) % reviews.length),
    [current, goTo]
  );
  const prev = useCallback(
    () => goTo((current - 1 + reviews.length) % reviews.length),
    [current, goTo]
  );

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const review = reviews[current];

  return (
    <section id="testimonials" className="section-padding bg-noise">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="line-accent mx-auto" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-4">
            What They <span className="text-primary">Say</span>
          </h2>
        </div>

        {/* Review card */}
        <div className="relative">
          <div
            className={`bg-card border border-border/50 p-8 sm:p-12 text-center transition-all duration-400 ${
              isAnimating ? "opacity-0 scale-[0.98]" : "opacity-100 scale-100"
            }`}
          >
            {/* Quote icon */}
            <Quote
              size={32}
              className="text-primary/20 mx-auto mb-6"
              strokeWidth={1}
            />

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="fill-primary text-primary"
                />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-lg sm:text-xl text-foreground/90 leading-relaxed max-w-2xl mx-auto mb-8 font-light">
              "{review.text}"
            </blockquote>

            {/* Attribution */}
            <div>
              <span className="font-heading text-base uppercase tracking-[0.15em] text-foreground block">
                {review.name}
              </span>
              <span className="text-xs text-primary/70 uppercase tracking-[0.2em] font-heading mt-1 block">
                {review.service}
              </span>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/30 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 w-10 h-10 rounded-full border border-border/50 bg-card flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/30 transition-all"
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-[2px] transition-all duration-300 ${
                i === current
                  ? "w-8 bg-primary"
                  : "w-4 bg-foreground/15 hover:bg-foreground/30"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
