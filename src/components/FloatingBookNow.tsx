import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const FloatingBookNow = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-wider px-6 py-3 rounded-sm shadow-lg gold-glow hover:brightness-110 transition-all flex items-center gap-2"
    >
      <ArrowUp size={16} />
      Book Now
    </button>
  );
};

export default FloatingBookNow;
