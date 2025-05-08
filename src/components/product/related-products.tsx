"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { ShoppingCart } from "lucide-react";
import { getMockRelatedProducts } from "@/lib/data";
import { motion } from "framer-motion";

export function RelatedProducts({ slug }: { slug: string }) {
  const [products, setProducts] = useState<any[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const data = await getMockRelatedProducts(slug);
      setProducts(data);
    };

    fetchRelatedProducts();
  }, [slug]);

  if (products.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden group">
              <div className="aspect-square overflow-hidden">
                <Link href={`/products/${product.slug}`}>
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-semibold hover:underline line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <div className="flex items-center justify-between">
                    <p className="font-bold">${product.price.toFixed(2)}</p>
                    <Button
                      size="sm"
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.images[0],
                        })
                      }
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
