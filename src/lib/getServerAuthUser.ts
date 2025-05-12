// lib/getServerAuthUser.ts
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";
import { User } from "@/models/user";
import { connectToDB } from "@/lib/db";

export type UserPayload = {
  id: string;
  role: "user" | "admin"; // You can extend this union if there are more roles
  iat: number; // issued at (optional if added by JWT lib)
  exp: number; // expiration (optional if added by JWT lib)
};

export async function getServerAuthUser() {
  await connectToDB();
  const token = (await cookies()).get("token")?.value; // Get the token from cookies
  if (!token) return null;

  const payload = verifyJWT(token) as UserPayload;
  if (!payload) return null;

  const user = await User.findById(payload.id).select("-password");
  return user;
}
