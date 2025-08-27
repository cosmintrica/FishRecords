import { NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET() {
  const locations = await storage.getFishingLocations();
  const records = await storage.getFishingRecords();
  const verifiedRecords = records.filter(r => r.verified === true);
  const users = await storage.getAllUsers();
  return NextResponse.json({
    totalLocations: locations.length,
    totalRecords: verifiedRecords.length,
    activeUsers: users.length,
  });
}
