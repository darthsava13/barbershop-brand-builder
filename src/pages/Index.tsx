import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Barbers from "@/components/Barbers";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import FloatingBookNow from "@/components/FloatingBookNow";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FadeUp><About /></FadeUp>
      <FadeUp><Services /></FadeUp>
      <FadeUp><Barbers /></FadeUp>
      <FadeUp><Gallery /></FadeUp>
      <FadeUp><Testimonials /></FadeUp>
      <FadeUp><Booking /></FadeUp>
      <FadeUp><FindUs /></FadeUp>
      <Footer />
      <FloatingBookNow />
    </div>
  );
};

export default Index;
