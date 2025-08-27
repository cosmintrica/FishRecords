import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { requireAuth, requireAdmin } from "@/app/api/_utils";

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if ("error" in auth) return auth.error;
  const adminCheck = await requireAdmin(auth.userId);
  if (adminCheck) return adminCheck;
  const all = await storage.getFishingRecords();
  const pending = all.filter(r => !r.verified);
  return NextResponse.json(pending);
}
