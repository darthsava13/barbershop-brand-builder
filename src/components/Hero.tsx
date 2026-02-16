const Hero = () => {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder with parallax feel */}
      <div
        className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center bg-fixed"
        aria-hidden="true"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-foreground leading-none mb-6">
          Where Style
          <br />
          <span className="text-primary">Meets Culture.</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          Premium cuts. Bold style. Community first.
        </p>
        <button
          onClick={scrollToBooking}
          className="bg-primary text-primary-foreground font-heading text-lg uppercase tracking-wider px-10 py-4 rounded-sm hover:brightness-110 transition-all gold-glow-hover"
        >
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
