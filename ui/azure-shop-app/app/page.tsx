import { ArchitectureSection } from "@features/home/architecture-section";
import { FeaturedProducts } from "@features/home/featured-products";
import { HeroSection } from "@features/home/hero-section";

export const revalidate = 0;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* @ts-expect-error Server Component */}
      <FeaturedProducts />
      <ArchitectureSection />
    </>
  );
}
