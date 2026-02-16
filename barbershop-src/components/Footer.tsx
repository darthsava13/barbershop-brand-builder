import { Instagram, Facebook, Music, Phone, Mail } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/crowdpleezers/", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Music, href: "#", label: "TikTok" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/30 bg-noise">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-heading text-primary-foreground text-sm font-bold">
                CP
              </div>
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-foreground">
                Crowd <span className="text-primary">Pleezers</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Where culture lives. Premium grooming for the community.
            </p>
          </div>

          {/* Quick links */}
          <div className="sm:text-center">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-primary/60 block mb-4">
              Connect
            </span>
            <div className="flex sm:justify-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="sm:text-right">
            <span className="font-heading text-xs uppercase tracking-[0.25em] text-primary/60 block mb-4">
              Contact
            </span>
            <div className="space-y-2">
              <a
                href="tel:+15551234567"
                className="flex sm:justify-end items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone size={14} />
                (555) 123-4567
              </a>
              <a
                href="mailto:info@crowdpleezers.com"
                className="flex sm:justify-end items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail size={14} />
                info@crowdpleezers.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/20 mt-12 pt-6 text-center">
          <p className="text-muted-foreground/40 text-xs tracking-wide">
            © 2026 Crowd Pleezers Barber Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
