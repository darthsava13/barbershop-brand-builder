const barbers = [
  {
    name: "Marcus",
    title: "Master Barber / Owner",
    bio: "15+ years in the game. Known for precision fades and keeping the vibe right.",
  },
  {
    name: "Dre",
    title: "Senior Barber",
    bio: "Specializes in skin fades and creative designs. Your cut is his canvas.",
  },
  {
    name: "Jay",
    title: "Barber / Stylist",
    bio: "From classic cuts to modern styles — versatility is his signature.",
  },
  {
    name: "Rico",
    title: "Junior Barber",
    bio: "Young talent with old-school discipline. Sharp lines, sharper hustle.",
  },
];

const Barbers = () => (
  <section id="barbers" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="w-16 h-1 bg-primary mx-auto mb-6" />
        <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold">
          The Barbers
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {barbers.map((b) => (
          <div
            key={b.name}
            className="bg-card border border-border rounded-sm overflow-hidden group"
          >
            <div className="aspect-[3/4] bg-muted flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt={b.name}
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl uppercase font-bold">{b.name}</h3>
              <p className="text-primary text-sm font-medium mb-2">{b.title}</p>
              <p className="text-muted-foreground text-sm mb-4">{b.bio}</p>
              <button
                onClick={() =>
                  document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider py-2.5 rounded-sm hover:brightness-110 transition-all"
              >
                Book with {b.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Barbers;
