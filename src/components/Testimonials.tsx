import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "DeAndre W.", service: "Skin Fade", stars: 5, text: "Best fade in the city, hands down. Marcus is the GOAT." },
  { name: "Tyler R.", service: "Classic Haircut", stars: 5, text: "Clean, consistent, and the vibes are always right. My go-to shop." },
  { name: "James L.", service: "The Works", stars: 5, text: "Got the full treatment — haircut, beard, hot towel. Walked out feeling like a million." },
  { name: "Chris M.", service: "Lineup", stars: 4, text: "Quick, clean, affordable. Jay always gets the lines perfect." },
  { name: "Aaron K.", service: "Beard Trim", stars: 5, text: "Dre knows his craft. Best beard shape-up I've ever had." },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <section id="testimonials" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold">
            What They Say
          </h2>
        </div>

        <div className="bg-card border border-primary/20 rounded-sm p-8 sm:p-12 text-center relative">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < review.stars ? "fill-primary text-primary" : "text-muted-foreground"}
              />
            ))}
          </div>

          <p className="text-lg sm:text-xl text-foreground/90 italic mb-6 min-h-[60px]">
            "{review.text}"
          </p>

          <p className="font-heading text-lg uppercase font-semibold">{review.name}</p>
          <p className="text-primary text-sm">{review.service}</p>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 border border-border rounded-sm hover:border-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-2 border border-border rounded-sm hover:border-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
