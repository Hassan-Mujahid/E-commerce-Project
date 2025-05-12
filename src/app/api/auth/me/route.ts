import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyJWT } from "@/lib/auth";
import { User } from "@/models/user";
import { connectToDB } from "@/lib/db";

export type UserPayload = {
  id: string;
  role: "user" | "admin"; // You can extend this union if there are more roles
  iat: number; // issued at (optional if added by JWT lib)
  exp: number; // expiration (optional if added by JWT lib)
};

export async function GET() {
  await connectToDB();

  const token = (await cookies()).get("token")?.value;
  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  const payload = verifyJWT(token) as UserPayload;
  if (!payload) return NextResponse.json({ user: null }, { status: 401 });

  const user = await User.findById(payload.id).select("-password"); // Don't expose password
  if (!user) return NextResponse.json({ user: null }, { status: 404 });

  return NextResponse.json({ user });
}
