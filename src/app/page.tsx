import Image from "next/image";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturedSection } from "@/components/sections/featured-section";
import { CategoriesSection } from "@/components/sections/categories-section";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />

      <section className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Products</h2>
          <a href="/search" className="text-primary hover:underline">
            View All
          </a>
        </div>

        {/* <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense> */}
      </section>
    </div>
  );
}
