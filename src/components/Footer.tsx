import { Instagram, Facebook, Music, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="container mx-auto flex flex-col items-center gap-6">
      <img src={logo} alt="Crowd Pleezers" className="h-16 w-auto" />

      <div className="flex items-center gap-6">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
          <Instagram size={22} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
          <Facebook size={22} />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="TikTok">
          <Music size={22} />
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone size={14} /> (555) 123-4567
        </a>
        <a href="mailto:info@crowdpleezers.com" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail size={14} /> info@crowdpleezers.com
        </a>
      </div>

      <p className="text-muted-foreground/50 text-sm">
        © 2026 Crowd Pleezers Barber Shop. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
