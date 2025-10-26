
import FeatureSection from "./components/feature-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import MarqueeSection from "./components/marque";
import Navbar from "./components/navbar";
import PricingSection from "./components/pricing";
import SecureSection from "./components/secure_section";
import WorksSection from "./components/works";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <MarqueeSection />
      <WorksSection />
      <SecureSection />
      <PricingSection/>
  <Footer/>
    </>
  );
}
