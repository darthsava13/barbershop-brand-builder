const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      {/* Image placeholder */}
      <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden">
        <img
          src="/placeholder.svg"
          alt="Inside Crowd Pleezers Barber Shop"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div>
        <div className="w-16 h-1 bg-primary mb-6" />
        <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-6">
          More Than a Barbershop
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
          Crowd Pleezers isn't just where you get a cut — it's where culture lives.
          Founded on the belief that every chair is a conversation and every fade is
          an art form, we built a space where style, community, and confidence collide.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          From first cuts to fresh lineups, our barbers bring precision, passion, and
          personality to every appointment. Walk in as a client, walk out as family.
        </p>
      </div>
    </div>
  </section>
);

export default About;
