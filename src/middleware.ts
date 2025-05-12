import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await req.cookies.get("token")?.value;
  console.log("middleware is working!");

  if (!token) {
    if (
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register")
    ) {
      return NextResponse.next();
    }
    console.log("No token found", "token:", !token);
    return NextResponse.redirect(new URL("/login", req.url));
  } else {
    if (
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register")
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.next();
  }

  // try {
  //   console.log(" token found", "token:", !token);
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
  //   console.log("decoded:", decoded);
  //   // Optional: check for role
  //   // if (req.nextUrl.pathname.startsWith("/admin") && decoded.role !== "admin") {
  //   //   return NextResponse.redirect(new URL("/unauthorized", req.url));
  //   // }

  //   return NextResponse.next();
  // } catch {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin",
    "/admin/:path*",
    "/login",
    "/register",
  ],
};
