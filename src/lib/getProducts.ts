import { connectToDB } from "./db";
import Product from "@/models/product";

export async function getAllProducts() {
  await connectToDB();
  return Product.find().lean(); // Returns plain JS objects
}

export async function getProductBySlug(slug: string) {
  await connectToDB();
  return Product.findOne({ slug }).lean();
}
