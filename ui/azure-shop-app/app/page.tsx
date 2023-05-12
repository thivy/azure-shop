import { FeaturedProducts } from "@features/home/featured-products";
import { HeroSection } from "@features/home/hero-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* @ts-expect-error Server Component */}
      <FeaturedProducts />
    </>
  );
}
