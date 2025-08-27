import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET(_req: NextRequest, { params }: { params: { userId: string } }) {
  const items = await storage.getFishingRecordsByUser(params.userId);
  return NextResponse.json(items);
}
