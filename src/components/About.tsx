import { Scissors } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-noise">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-card rounded-sm overflow-hidden border border-border/50">
              <div className="w-full h-full bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                <Scissors size={48} className="text-primary/20" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-sm -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border border-primary/10 rounded-sm -z-10" />

            {/* Experience badge */}
            <div className="absolute bottom-6 right-6 bg-primary text-primary-foreground px-5 py-3 text-center">
              <span className="font-heading text-2xl font-bold block leading-none">
                10+
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-heading">
                Years
              </span>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="line-accent" />
            <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-8 leading-tight">
              More Than a<br />
              <span className="text-primary">Barbershop</span>
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Crowd Pleezers isn't just where you get a cut — it's where
                culture lives. We built this space for the community, by the
                community. Every chair in our shop carries a legacy of craft,
                conversation, and genuine connection.
              </p>
              <p>
                Our barbers are artists. They don't just cut hair — they study
                your face shape, your style, your vibe. Every fade is
                precision-engineered. Every lineup is razor-sharp. You walk in as
                a client. You leave as family.
              </p>
              <p className="text-foreground/80 font-medium">
                This is your space to look good, feel great, and be part of
                something real.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/50">
              {[
                { number: "5K+", label: "Happy Clients" },
                { number: "4", label: "Expert Barbers" },
                { number: "4.9", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-primary block">
                    {stat.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
