import { NextResponse, type NextRequest } from "next/server";
import { getProductBySlug } from "@/lib/getProducts";

// this must match the correct signature for dynamic routes
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

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
