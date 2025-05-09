import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { getMockProducts } from "@/lib/data";
import { getAllProducts } from "@/lib/getProducts";

interface ProductGridProps {
  query?: string;
  category?: string;
  sort?: string;
}

export async function ProductGrid({ query, category, sort }: ProductGridProps) {
  // This would be replaced with actual API call
  const products = await getAllProducts();

  // Filter products based on query and category
  const filteredProducts = products.filter((product) => {
    const matchesQuery =
      !query || product.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      !category || product.category.toLowerCase() === category.toLowerCase();
    return matchesQuery && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-low-high") return a.price - b.price;
    if (sort === "price-high-low") return b.price - a.price;
    if (sort === "oldest")
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    // Default: newest first
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  if (sortedProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProducts.map((product, index) => (
        <Card key={index} className="overflow-hidden group">
          <div className="relative aspect-square overflow-hidden">
            <Link href={`/products/${product.slug}`}>
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <Badge className="absolute top-3 left-3">{product.category}</Badge>
          </div>
          <CardContent className="p-4">
            <div className="space-y-2">
              <Link
                href={`/products/${product.slug}`}
                className="font-semibold hover:underline line-clamp-1"
              >
                {product.name}
              </Link>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="font-bold">${product.price.toFixed(2)}</p>
                <form action="/api/cart" method="POST">
                  <input type="hidden" name="productId" value={product.id} />
                  <Button size="sm" type="submit">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
