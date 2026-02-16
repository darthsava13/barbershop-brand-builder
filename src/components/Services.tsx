import { Scissors, Sparkles, Wind, Droplets, Baby, PenTool, Crown } from "lucide-react";

const services = [
  {
    name: "Classic Haircut",
    price: 35,
    description: "Precision cut tailored to your style",
    icon: Scissors,
    popular: false,
  },
  {
    name: "Skin Fade",
    price: 40,
    description: "Seamless blend from skin to length",
    icon: Sparkles,
    popular: true,
  },
  {
    name: "Beard Trim",
    price: 20,
    description: "Shape, line, and detail your beard",
    icon: PenTool,
    popular: false,
  },
  {
    name: "Hot Towel Shave",
    price: 30,
    description: "Old-school straight razor luxury",
    icon: Wind,
    popular: false,
  },
  {
    name: "Kids Cut",
    price: 25,
    description: "Fresh styles for 12 & under",
    icon: Baby,
    popular: false,
  },
  {
    name: "Lineup",
    price: 15,
    description: "Clean edges and sharp definition",
    icon: Droplets,
    popular: false,
  },
  {
    name: "The Works",
    price: 60,
    description: "Haircut + beard + hot towel — the full experience",
    icon: Crown,
    popular: true,
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-secondary/50 bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="line-accent mx-auto" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-4">
            Services & <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every service includes a consultation and hot towel finish.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group relative bg-card border border-border/50 p-6 hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[9px] font-heading uppercase tracking-[0.2em] px-3 py-1">
                    Popular
                  </div>
                )}

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center mb-5 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                    <Icon size={18} className="text-primary/70 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Name + Price row */}
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-heading text-base uppercase tracking-wide text-foreground">
                      {service.name}
                    </h3>
                    <span className="font-heading text-xl text-primary font-bold">
                      ${service.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground/60 text-sm mt-10">
          All prices are starting rates. Additional charges may apply for longer hair or specialty styles.
        </p>
      </div>
    </section>
  );
};

export default Services;
