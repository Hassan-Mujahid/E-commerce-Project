// lib/getServerAuthUser.ts
import { cookies } from "next/headers";
import { verifyJWT } from "@/lib/auth";
import { User } from "@/models/user";
import { connectToDB } from "@/lib/db";

export async function getServerAuthUser() {
  await connectToDB();
  const token = (await cookies()).get("token")?.value; // Get the token from cookies
  if (!token) return null;

  const payload: any = verifyJWT(token);
  if (!payload) return null;

  const user = await User.findById(payload.id).select("-password");
  console.log("userAuth:", user);
  return user;
}
