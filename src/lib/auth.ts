import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export type UserPayload = {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin"; // You can extend this union if there are more roles
  iat?: number; // issued at (optional if added by JWT lib)
  exp?: number; // expiration (optional if added by JWT lib)
};

export function signJWT(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
}

export function verifyJWT(token: string) {
  try {
    const data = jwt.verify(token, JWT_SECRET);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
}
