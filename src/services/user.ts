import { User } from "@/models/user";
import { connectToDB } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function createUser({ name, email, password }: any) {
  await connectToDB();
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User exists");
  const hashed = await bcrypt.hash(password, 12);
  return User.create({ name, email, password: hashed });
}

export async function validateUser(email: string, password: string) {
  await connectToDB();
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");
  return user;
}
