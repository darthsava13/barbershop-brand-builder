import { Phone, Mail, MapPin, Clock } from "lucide-react";

const FindUs = () => (
  <section id="findus" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="w-16 h-1 bg-primary mx-auto mb-6" />
        <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold">
          Find Us
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Map placeholder */}
        <div className="aspect-video bg-muted rounded-sm overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb="
            title="Crowd Pleezers location"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg uppercase font-semibold mb-1">Address</h3>
              <p className="text-muted-foreground">123 Main Street<br />Your City, ST 12345</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg uppercase font-semibold mb-1">Hours</h3>
              <p className="text-muted-foreground">
                Mon – Fri: 9:00 AM – 7:00 PM<br />
                Saturday: 8:00 AM – 6:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg uppercase font-semibold mb-1">Phone</h3>
              <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                (555) 123-4567
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg uppercase font-semibold mb-1">Email</h3>
              <a href="mailto:info@crowdpleezers.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@crowdpleezers.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FindUs;
