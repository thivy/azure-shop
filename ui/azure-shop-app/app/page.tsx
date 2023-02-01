import { ArchitectureSection } from "@features/home/architecture-section";
import { FeaturedProducts } from "@features/home/featured-products";
import { HeroSection } from "@features/home/hero-section";
import { ProudctsLoading } from "@features/shop/products-loading";
import { Suspense } from "react";

export const revalidate = 0;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<ProudctsLoading />}>
        {/* @ts-expect-error Server Component */}
        <FeaturedProducts />
      </Suspense>
      <ArchitectureSection />
    </>
  );
}
