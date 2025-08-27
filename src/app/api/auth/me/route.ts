import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";
import { requireAuth } from "@/app/api/_utils";

export async function GET(req: NextRequest) {
  const auth = requireAuth(req);
  if ("error" in auth) return auth.error;
  const user = await storage.getUser(auth.userId);
  if (!user) return NextResponse.json({ message: "Utilizator inexistent" }, { status: 404 });
  const { password: _p, ...safe } = user as any;
  return NextResponse.json(safe);
}
