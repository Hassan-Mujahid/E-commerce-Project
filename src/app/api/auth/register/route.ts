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
    await createUser(parsed.data);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 401 });
    } else {
      return NextResponse.json({ error: "Error" }, { status: 401 });
    }
  }
}
