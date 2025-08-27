import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { storage } from "@/server/storage";

const JWT_SECRET = process.env.JWT_SECRET || "pescar-romania-secret-2024";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const user = await storage.getUserByUsername(username) || await storage.getUserByEmail(username);
    if (!user) return NextResponse.json({ message: "Utilizator inexistent" }, { status: 400 });
    const ok = await bcrypt.compare(password, (user as any).password);
    if (!ok) return NextResponse.json({ message: "Parolă incorectă" }, { status: 400 });
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "7d" });
    const { password: _p, ...safe } = user as any;
    return NextResponse.json({ ...safe, token });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Eroare server" }, { status: 500 });
  }
}
