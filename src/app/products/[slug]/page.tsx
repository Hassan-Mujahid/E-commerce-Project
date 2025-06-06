import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfo } from "@/components/product/product-info";
import { RelatedProducts } from "@/components/product/related-products";
import { Suspense } from "react";
import { ProductInfoSkeleton } from "@/components/product/product-info-skeleton";
import { ProductGallerySkeleton } from "@/components/product/product-gallery-skeleton";
// import { getMockProducts } from "@/lib/data";
import { notFound } from "next/navigation";
import { getAllProducts } from "@/lib/getProducts";

export const revalidate = 30; // ISR - revalidate every 30 seconds

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const products = await getAllProducts();
  const product = products.find((p) => p.slug === param.slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found",
    };
  }

  return {
    title: `${product.name} | NextShop`,
    description: product.description,
    openGraph: {
      images: [{ url: product.images[0] }],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const param = await params;
  const products = await getAllProducts();
  const product = products.find((p) => p.slug === param.slug);
  if (!product) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Suspense fallback={<ProductGallerySkeleton />}>
          <ProductGallery slug={param.slug} />
        </Suspense>

        <Suspense fallback={<ProductInfoSkeleton />}>
          <ProductInfo slug={param.slug} />
        </Suspense>
      </div>

      <RelatedProducts slug={param.slug} />
    </div>
  );
}
