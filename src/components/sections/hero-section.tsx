"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover Amazing Products for Your Lifestyle
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Shop the latest trends and must-have items. Quality products
                with fast delivery and excellent customer service.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/search">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-muted-foreground/20" />
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Hero Image"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
