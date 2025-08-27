import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { insertFishingRecordSchema } from "@/shared/schema";
import { requireAuth } from "@/app/api/_utils";

export async function GET() {
  const records = await storage.getFishingRecords();
  return NextResponse.json(records);
}

export async function POST(req: NextRequest) {
  const auth = requireAuth(req);
  if ("error" in auth) return auth.error;
  try {
    const body = await req.json();
    const data = insertFishingRecordSchema.parse(body);
    if (data.userId !== auth.userId) return NextResponse.json({ message: "Nu poți crea pentru alt utilizator" }, { status: 403 });
    const created = await storage.createFishingRecord(data);
    return NextResponse.json(created);
  } catch (err: any) {
    return NextResponse.json({ message: err.message || "Eroare la creare" }, { status: 400 });
  }
}
