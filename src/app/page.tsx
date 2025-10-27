import ContactSection from "./components/contact-section";
import FeatureSection from "./components/feature-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import MarqueeSection from "./components/marque";
import Navbar from "./components/navbar";
import PricingSection from "./components/pricing";
import ReadySection from "./components/ready-section";
import SecureSection from "./components/secure_section";
import TestimonialsSection from "./components/testimonial";
import WorksSection from "./components/works";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="feature">
        <FeatureSection />
      </div>
      <div id="marquee">
        <MarqueeSection />
      </div>
      <div id="works">
        <WorksSection />
      </div>
      <div id="security">
        <SecureSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="ready">
        <ReadySection />
      </div>
      <div id="contact">
        <ContactSection/>
      </div>
      <Footer />
    </>
  );
}

