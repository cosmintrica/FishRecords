import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET() {
  const locations = await storage.getFishingLocations();
  return NextResponse.json(locations);
}
