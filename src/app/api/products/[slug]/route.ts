import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/getProducts";

// this must match the correct signature for dynamic routes
export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  const { slug } = context.params;

  try {
    const product = await getProductBySlug(slug);

    if (!product) {
      return new NextResponse("Not Found", { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return new NextResponse("Server Error", { status: 500 });
  }
}
