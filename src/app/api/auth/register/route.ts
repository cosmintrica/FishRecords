import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { storage } from "@/server/storage";
import { insertUserSchema } from "@/shared/schema";

const JWT_SECRET = process.env.JWT_SECRET || "pescar-romania-secret-2024";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userData = insertUserSchema.parse(body);

    const existingEmail = await storage.getUserByEmail(userData.email);
    if (existingEmail) return NextResponse.json({ message: "Email-ul este deja înregistrat" }, { status: 400 });

    const existingUsername = await storage.getUserByUsername(userData.username);
    if (existingUsername) return NextResponse.json({ message: "Numele de utilizator este deja folosit" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const created = await storage.createUser({ ...userData, password: hashedPassword });

    const token = jwt.sign({ userId: created.id }, JWT_SECRET, { expiresIn: "7d" });
    const { password, ...safe } = created as any;
    return NextResponse.json({ ...safe, token });
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Eroare server" }, { status: 500 });
  }
}
