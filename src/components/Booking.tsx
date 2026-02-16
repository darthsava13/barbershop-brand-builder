const Booking = () => (
  <section id="booking" className="py-24 px-6">
    <div className="container mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <div className="w-16 h-1 bg-primary mx-auto mb-6" />
        <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold">
          Book Your Appointment
        </h2>
      </div>

      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <iframe
          src=""
          title="Book an appointment"
          className="w-full border-0 bg-card"
          style={{ minHeight: "650px" }}
          loading="lazy"
        />
      </div>

      <p className="text-center text-muted-foreground mt-6">
        Walk-ins welcome. Appointments recommended.
      </p>
    </div>
  </section>
);

export default Booking;
