import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const loc = await storage.getFishingLocation(params.id);
  if (!loc) return NextResponse.json({ message: "Locație inexistentă" }, { status: 404 });
  return NextResponse.json(loc);
}
