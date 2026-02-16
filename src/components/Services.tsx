import { Scissors, SprayCan, Sparkles, Flame, Baby, Ruler, Crown } from "lucide-react";

const services = [
  { name: "Classic Haircut", price: "$35", icon: Scissors },
  { name: "Skin Fade", price: "$40", icon: SprayCan },
  { name: "Beard Trim", price: "$20", icon: Ruler },
  { name: "Hot Towel Shave", price: "$30", icon: Flame },
  { name: "Kids Cut", price: "$25", subtitle: "12 & under", icon: Baby },
  { name: "Lineup", price: "$15", icon: Sparkles },
  { name: "The Works", price: "$60", subtitle: "Haircut + Beard + Hot Towel", icon: Crown },
];

const Services = () => (
  <section id="services" className="py-24 px-6">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="w-16 h-1 bg-primary mx-auto mb-6" />
        <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold">
          Services & Pricing
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.name}
            className="bg-card border border-border rounded-sm p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-primary/50 gold-glow-hover group"
          >
            <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading text-xl uppercase font-semibold mb-1">{s.name}</h3>
            {s.subtitle && (
              <p className="text-muted-foreground text-sm mb-2">{s.subtitle}</p>
            )}
            <p className="text-primary font-heading text-3xl font-bold mt-auto pt-4">
              {s.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
