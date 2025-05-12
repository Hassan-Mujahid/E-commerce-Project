import { ProductGrid } from "@/components/product/product-grid";
import { SearchFilters } from "@/components/search/search-filters";
import { SearchHeader } from "@/components/search/search-header";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/product/product-grid-skeleton";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; sort?: string }>;
}) {
  const searchParam = await searchParams;
  const query = searchParam.q || "";
  const category = searchParam.category || "";
  const sort = searchParam.sort || "newest";

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchHeader query={query} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
        <div className="lg:col-span-1">
          <SearchFilters selectedCategory={category} selectedSort={sort} />
        </div>

        <div className="lg:col-span-3">
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid query={query} category={category} sort={sort} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
