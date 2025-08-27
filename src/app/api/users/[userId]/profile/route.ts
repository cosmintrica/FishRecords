import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET(_req: NextRequest, { params }: { params: { userId: string } }) {
  const user = await storage.getUser(params.userId);
  if (!user) return NextResponse.json({ message: "Utilizator inexistent" }, { status: 404 });
  const recs = await storage.getFishingRecordsByUser(params.userId);
  const verified = recs.filter(r => r.verified);
  const personalBests: any[] = [];
  const bySpecies: Record<string, any> = {};
  for (const r of verified) {
    const w = parseFloat(String(r.weight));
    if (!bySpecies[r.species] || w > bySpecies[r.species].weight) {
      bySpecies[r.species] = r;
    }
  }
  for (const k of Object.keys(bySpecies)) personalBests.push(bySpecies[k]);
  const profile = {
    user,
    stats: {
      totalRecords: recs.length,
      personalBests,
      positions: { national: undefined, county: undefined }
    },
    recentRecords: recs.slice(0, 10)
  };
  return NextResponse.json(profile);
}
