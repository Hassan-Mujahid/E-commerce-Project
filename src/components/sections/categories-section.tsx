"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Electronics",
    image: "/placeholder.svg?height=400&width=400",
    slug: "electronics",
  },
  {
    name: "Clothing",
    image: "/placeholder.svg?height=400&width=400",
    slug: "clothing",
  },
  {
    name: "Home & Kitchen",
    image: "/placeholder.svg?height=400&width=400",
    slug: "home",
  },
  {
    name: "Books",
    image: "/placeholder.svg?height=400&width=400",
    slug: "books",
  },
  {
    name: "Toys & Games",
    image: "/placeholder.svg?height=400&width=400",
    slug: "toys",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-12">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={`/search?category=${category.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
