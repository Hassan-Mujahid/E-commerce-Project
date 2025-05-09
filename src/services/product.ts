"use server";

import { ProductSchema } from "@/schemas/product";
import { connectToDB } from "@/lib/db";
import ProductModel from "@/models/product";
import { revalidatePath } from "next/cache";

export async function addProductAction(input: unknown) {
  const parsed = ProductSchema.safeParse(input);
  if (!parsed.success) {
    return { success: false, error: parsed.error.format() };
  }

  try {
    await connectToDB();
    await ProductModel.create(parsed.data);
    revalidatePath("/admin/products");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Database error" };
  }
}
