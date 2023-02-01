import { ArchitectureSection } from "@features/home/architecture-section";
import { FeaturedProducts } from "@features/home/featured-products";
import { HeroSection } from "@features/home/hero-section";
import { Suspense } from "react";

export const revalidate = 0;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<>loading</>}>
        {/* @ts-expect-error Server Component */}
        <FeaturedProducts />
      </Suspense>
      <ArchitectureSection />
    </>
  );
}
