import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

/**
 * Appelé automatiquement chaque jour par Vercel Cron (voir vercel.json).
 * Fait une requête légère à Supabase pour empêcher la mise en pause
 * automatique du projet après 7 jours d'inactivité (plan gratuit).
 */
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const { error } = await getSupabase().from("leads").select("id").limit(1);

  if (error) {
    console.error("Cron keep-alive error:", error.message);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, pinged_at: new Date().toISOString() });
}
