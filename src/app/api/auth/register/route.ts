import { createUser } from "@/services/user";
import { registerSchema } from "@/schemas/user";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = registerSchema.safeParse(body);
  const errorMessages = parsed?.error?.errors.map((err) => err.message);
  if (!parsed.success)
    return NextResponse.json({ error: errorMessages?.[0] }, { status: 400 });

  try {
    const user = await createUser(parsed.data);
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 });
  }
}
