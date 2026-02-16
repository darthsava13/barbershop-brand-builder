import { Calendar } from "lucide-react";

const Booking = () => {
  return (
    <section id="booking" className="section-padding bg-secondary/50 bg-noise">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="line-accent mx-auto" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-4">
            Book Your <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Pick your barber, pick your time. We'll handle the rest.
          </p>
        </div>

        {/* Iframe container */}
        <div className="relative bg-card border border-border/50 rounded-sm overflow-hidden">
          {/* Loading placeholder that shows when iframe is empty */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 pointer-events-none">
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center">
              <Calendar size={28} className="text-primary/30" />
            </div>
            <p className="text-muted-foreground/50 text-sm font-heading uppercase tracking-[0.2em]">
              Booking Widget Loading...
            </p>
          </div>

          <iframe
            src=""
            title="Book an appointment"
            className="relative w-full min-h-[650px] border-0 bg-transparent"
            loading="lazy"
            allow="payment"
          />
        </div>

        {/* Bottom note */}
        <p className="text-muted-foreground/60 text-sm mt-6">
          Walk-ins welcome &mdash; appointments recommended.
        </p>
      </div>
    </section>
  );
};

export default Booking;
