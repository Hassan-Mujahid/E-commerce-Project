// app/api/products/route.ts
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import Product from "@/models/product";

export async function GET() {
  try {
    await connectToDB();

    const products = await Product.find().limit(4).lean();
    console.log("products:", products);

    return NextResponse.json(products);
  } catch (error) {
    console.error("[PRODUCTS_API_ERROR]", error);
    return NextResponse.json(
      { message: "Error fetching products" },
      { status: 500 }
    );
  }
}
