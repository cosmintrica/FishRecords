import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { requireAuth, requireAdmin } from "@/app/api/_utils";

export async function POST(req: NextRequest, { params }: { params: { recordId: string } }) {
  const auth = requireAuth(req);
  if ("error" in auth) return auth.error;
  const adminCheck = await requireAdmin(auth.userId);
  if (adminCheck) return adminCheck;
  await storage.verifyRecord(params.recordId);
  return NextResponse.json({ ok: true });
}
