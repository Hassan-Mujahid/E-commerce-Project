"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { ShoppingCart, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getMockProductBySlug } from "@/lib/data";
import { motion } from "framer-motion";

export function ProductInfo({ slug }: { slug: string }) {
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

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

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <div className="flex items-center gap-2 mt-2">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-muted-foreground">
            ({product.reviews} reviews)
          </span>
        </div>
      </div>

      <div>
        <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
        {product.oldPrice && (
          <p className="text-muted-foreground line-through mt-1">
            ${Number(product.price + 30).toFixed(2)}
          </p>
        )}
      </div>

      <p className="text-muted-foreground">{product.description}</p>

      <div className="space-y-4">
        <div className="flex items-center">
          <span className="w-24 font-medium">Availability:</span>
          <span className={product.inStock ? "text-green-600" : "text-red-600"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex items-center">
          <span className="w-24 font-medium">Category:</span>
          <span>{product.category}</span>
        </div>

        {/* {product.colors && (
          <div className="flex items-center">
            <span className="w-24 font-medium">Color:</span>
            <div className="flex gap-2">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full border`}
                  style={{ backgroundColor: color }}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>
        )} */}

        {product.sizes && (
          <div className="flex items-center">
            <span className="w-24 font-medium">Size:</span>
            <div className="flex gap-2">
              {product.sizes.map((size: string) => (
                <button
                  key={size}
                  className="w-10 h-10 rounded-md border flex items-center justify-center hover:border-primary"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            -
          </Button>
          <span className="w-10 text-center">{quantity}</span>
          <Button variant="ghost" size="icon" onClick={increaseQuantity}>
            +
          </Button>
        </div>

        <Button className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>

        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
      </div>

      <Tabs defaultValue="description">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="description">Description</TabsTrigger>
          {/* <TabsTrigger value="specifications">Specifications</TabsTrigger> */}
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="pt-4">
          <div className="space-y-4">
            <p>{product.fullDescription || product.description}</p>
          </div>
        </TabsContent>
        {/* <TabsContent value="specifications" className="pt-4">
          <div className="space-y-4">
            <ul className="space-y-2">
              {product.specifications?.map((spec: any, index: number) => (
                <li key={index} className="flex">
                  <span className="font-medium w-40">{spec.name}:</span>
                  <span>{spec.value}</span>
                </li>
              )) || <p>No specifications available</p>}
            </ul>
          </div>
        </TabsContent> */}
        <TabsContent value="reviews" className="pt-4">
          <div className="space-y-4">
            <p>Customer reviews will be displayed here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
