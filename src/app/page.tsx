
import FeatureSection from "./components/feature-section";
import HeroSection from "./components/hero-section";
import MarqueeSection from "./components/marque";
import SecureSection from "./components/secure_section";
import WorksSection from "./components/works";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <MarqueeSection />
      <WorksSection />
      <SecureSection/>
  
    </>
  );
}
