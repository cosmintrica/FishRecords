import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";

const JWT_SECRET = process.env.JWT_SECRET || "pescar-romania-secret-2024";

export function requireAuth(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (!auth) return { error: NextResponse.json({ message: "Token lipsă" }, { status: 401 }) };
  const token = auth.split(" ")[1];
  if (!token) return { error: NextResponse.json({ message: "Token invalid" }, { status: 401 }) };
  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;
    return { userId: payload.userId as string };
  } catch {
    return { error: NextResponse.json({ message: "Token invalid" }, { status: 401 }) };
  }
}

export async function requireAdmin(userId: string) {
  const user = await storage.getUser(userId);
  if (!user || user.role !== "admin") {
    return NextResponse.json({ message: "Acces interzis" }, { status: 403 });
  }
  return null;
}
