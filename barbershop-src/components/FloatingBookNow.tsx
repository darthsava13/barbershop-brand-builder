import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const FloatingBookNow = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToBooking}
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground font-heading text-xs uppercase tracking-[0.2em] px-5 py-3 shadow-lg gold-glow hover:brightness-110 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Book Now"
    >
      <Calendar size={14} />
      Book Now
    </button>
  );
};

export default FloatingBookNow;
