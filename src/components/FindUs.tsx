import { MapPin, Clock, Phone, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    content: "123 Main Street",
    subcontent: "Your City, ST 12345",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Hours",
    content: "Mon–Fri: 9 AM – 7 PM",
    subcontent: "Sat: 8 AM – 6 PM · Sun: Closed",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    content: "(555) 123-4567",
    subcontent: "Call or text",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    content: "info@crowdpleezers.com",
    subcontent: null,
    href: "mailto:info@crowdpleezers.com",
  },
];

const FindUs = () => {
  return (
    <section id="findus" className="section-padding bg-noise">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="line-accent mx-auto" />
          <h2 className="font-heading text-4xl sm:text-5xl uppercase font-bold mb-4">
            Find <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Map */}
          <div className="md:col-span-3 aspect-[16/10] bg-card border border-border/50 overflow-hidden">
            <iframe
              title="Location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1"
              className="w-full h-full border-0 grayscale contrast-125 opacity-70"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact info */}
          <div className="md:col-span-2 space-y-0">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";
              const wrapperProps = item.href
                ? { href: item.href, target: item.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
                : {};

              return (
                <Wrapper
                  key={item.label}
                  {...(wrapperProps as any)}
                  className={`flex items-start gap-4 p-5 border-b border-border/30 group transition-colors ${
                    item.href ? "hover:bg-card/50 cursor-pointer" : ""
                  } ${i === 0 ? "border-t border-border/30" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/40 transition-colors">
                    <Icon size={16} className="text-primary/70" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-heading block mb-1">
                      {item.label}
                    </span>
                    <span className="text-foreground text-sm block">
                      {item.content}
                    </span>
                    {item.subcontent && (
                      <span className="text-muted-foreground text-xs block mt-0.5">
                        {item.subcontent}
                      </span>
                    )}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUs;
