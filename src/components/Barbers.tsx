import { Instagram } from "lucide-react";

const barbers = [
  {
    name: "Marcus",
    title: "Master Barber / Owner",
    bio: "15+ years behind the chair. Specializes in classic cuts with a modern edge. The vision behind Crowd Pleezers.",
    specialty: "Classic & Modern Fades",
    instagram: "https://www.instagram.com/crowdpleezers/",
  },
  {
    name: "Dre",
    title: "Senior Barber",
    bio: "The fade king. Known for seamless skin fades and crispy lineups that speak for themselves.",
    specialty: "Skin Fades & Designs",
    instagram: "https://www.instagram.com/crowdpleezers/",
  },
  {
    name: "Jay",
    title: "Style Specialist",
    bio: "Versatile stylist who stays ahead of trends. If you've seen it on your feed, Jay can replicate it — better.",
    specialty: "Textured & Freestyle",
    instagram: "https://www.instagram.com/crowdpleezers/",
  },
  {
    name: "Rico",
    title: "Barber",
    bio: "Young talent with sharp technique and an eye for detail. Coming up fast in the game.",
    specialty: "Fades & Beard Work",
    instagram: "https://www.instagram.com/crowdpleezers/",
  },
];

const Barbers = () => {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="barbers" className="section-padding bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="line-accent mx-auto" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-4">
            The <span className="text-primary">Barbers</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Every cut tells a story. Meet the artists behind the clippers.
          </p>
        </div>

        {/* Barber cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="group relative bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-b from-muted/20 to-muted/5 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading text-6xl text-primary/10 uppercase">
                    {barber.name[0]}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-heading block mb-1">
                      Specialty
                    </span>
                    <span className="text-sm text-foreground/80">
                      {barber.specialty}
                    </span>
                  </div>
                </div>

                {/* Instagram icon */}
                <a
                  href={barber.instagram}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground/40 hover:text-primary hover:bg-background/80 transition-all opacity-0 group-hover:opacity-100 duration-300"
                  aria-label={`${barber.name}'s Instagram`}
                >
                  <Instagram size={14} />
                </a>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading text-lg uppercase tracking-wide text-foreground mb-1">
                  {barber.name}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-heading block mb-3">
                  {barber.title}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {barber.bio}
                </p>
                <button
                  onClick={scrollToBooking}
                  className="w-full text-center font-heading text-xs uppercase tracking-[0.2em] py-3 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Book with {barber.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;
