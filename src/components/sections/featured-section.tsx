"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  slug: string;
};

export function FeaturedSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addItem } = useCart();

  useEffect(() => {
    // Mock data - would be replaced with actual API call
    const featuredProducts = [
      {
        id: "1",
        name: "Wireless Headphones",
        price: 129.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Electronics",
        slug: "wireless-headphones",
      },
      {
        id: "2",
        name: "Smart Watch",
        price: 199.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Electronics",
        slug: "smart-watch",
      },
      {
        id: "3",
        name: "Premium Backpack",
        price: 79.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Accessories",
        slug: "premium-backpack",
      },
      {
        id: "4",
        name: "Fitness Tracker",
        price: 89.99,
        image: "/placeholder.svg?height=300&width=300",
        category: "Electronics",
        slug: "fitness-tracker",
      },
    ];

    setProducts(featuredProducts);
  }, []);

  return (
    <section className="py-12">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href="/search" className="text-primary hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <Link href={`/products/${product.slug}`}>
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </Link>
                  <Badge className="absolute top-3 left-3">
                    {product.category}
                  </Badge>
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
                            image: product.image,
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
      </div>
    </section>
  );
}
