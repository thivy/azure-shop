import { ArchitectureSection } from "@features/home/architecture-section";
import { FeaturesSection } from "@features/home/features-section";
import { HeroSection } from "@features/home/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
    </>
  );
}
