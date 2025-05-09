"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMockProductBySlug } from "@/lib/data";

export function ProductGallery({ slug }: { slug: string }) {
  const [product, setProduct] = useState<any>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return null;
  }

  const { images } = product;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-lg aspect-square">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={product.name}
            className="h-full w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
          onClick={prevImage}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous image</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
          onClick={nextImage}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next image</span>
        </Button>
      </div>

      <div className="flex space-x-2 overflow-auto pb-1">
        {images.map((image: string, index: number) => (
          <button
            key={index}
            className={`relative overflow-hidden rounded-md aspect-square w-20 flex-shrink-0 transition-opacity ${
              currentImage === index
                ? "ring-2 ring-primary"
                : "opacity-70 hover:opacity-100"
            }`}
            onClick={() => selectImage(index)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
