import { validateUser } from "@/services/user";
import { signJWT } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  try {
    const user = await validateUser(email, password);
    const token = signJWT({ id: user._id, role: user.role });

    const res = NextResponse.json({ success: true });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400,
    });
    return res;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 401 });
    } else {
      return NextResponse.json({ error: "Error" }, { status: 401 });
    }
  }
}
