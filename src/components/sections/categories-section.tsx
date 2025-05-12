"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Electronics",
    image:
      "https://images.unsplash.com/photo-1593344484962-796055d4a3a4?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "electronics",
  },
  {
    name: "Clothing",
    image:
      "https://plus.unsplash.com/premium_photo-1679056835084-7f21e64a3402?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "clothing",
  },
  {
    name: "Home & Kitchen",
    image:
      "https://plus.unsplash.com/premium_photo-1661962720375-ce9097fb4d69?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.svg?height=400&width=400",
    slug: "home",
  },
  {
    name: "Books",
    image:
      "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "books",
  },
  {
    name: "Toys & Games",
    image:
      "https://images.unsplash.com/photo-1500995617113-cf789362a3e1?q=80&w=400&h=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              key={index}
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
