import { NextRequest, NextResponse } from "next/server";
import { storage } from "@/server/storage";

export async function GET(_req: NextRequest, { params }: { params: { type: string } }) {
  const type = params.type;
  const records = await storage.getFishingRecords();
  const verified = records.filter(r => r.verified);
  let result: any[] = [];

  if (type === "weight") {
    // top by weight per species
    const best: Record<string, any> = {};
    for (const rec of verified) {
      const w = parseFloat(String(rec.weight));
      if (!best[rec.species] || w > best[rec.species].weight) {
        best[rec.species] = { ...rec, weight: w };
      }
    }
    result = Object.values(best).sort((a: any, b: any) => b.weight - a.weight).slice(0, 50);
  } else if (type === "length") {
    const best: Record<string, any> = {};
    for (const rec of verified) {
      const L = rec.length || 0;
      if (!best[rec.species] || L > best[rec.species].length) {
        best[rec.species] = { ...rec, length: L };
      }
    }
    result = Object.values(best).sort((a: any, b: any) => (b.length || 0) - (a.length || 0)).slice(0, 50);
  } else {
    result = verified.slice(0, 50);
  }
  return NextResponse.json(result);
}
