import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().min(10),
  price: z.coerce.number().positive(),
  rating: z.coerce.number().min(0).max(5).default(4.5),
  reviews: z.coerce.number().min(0).default(128),
  category: z.string().min(1),
  inStock: z.boolean().default(true),
  images: z.array(z.string().url()).min(1),
  colors: z.array(z.string()).optional(),
  sizes: z.array(z.string()).optional(),
  specifications: z
    .array(
      z.object({
        name: z.string(),
        value: z.string(),
      })
    )
    .optional(),
});
