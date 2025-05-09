import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyJWT } from "@/lib/auth";
import { User } from "@/models/user";
import { connectToDB } from "@/lib/db";

export async function GET() {
  await connectToDB();

  const token = (await cookies()).get("token")?.value;
  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  const payload: any = verifyJWT(token);
  if (!payload) return NextResponse.json({ user: null }, { status: 401 });

  const user = await User.findById(payload.id).select("-password"); // Don't expose password
  if (!user) return NextResponse.json({ user: null }, { status: 404 });

  return NextResponse.json({ user });
}
