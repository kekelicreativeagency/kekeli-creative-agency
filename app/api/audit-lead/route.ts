import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabase } from "@/lib/supabase";
import { resend, AGENCY_EMAIL } from "@/lib/resend";

const TOOLS = [
  "audit-visibilite",
  "diagnostic",
  "reseau-ideal",
  "brand-score",
  "analyse-reseaux",
] as const;

const auditLeadSchema = z.object({
  tool: z.enum(TOOLS),
  prenom: z.string().min(1, "Prénom requis"),
  email: z.string().email("Email invalide"),
  summary: z.record(z.string(), z.unknown()).optional(),
});

const TOOL_LABELS: Record<(typeof TOOLS)[number], string> = {
  "audit-visibilite": "Audit Visibilité",
  diagnostic: "Diagnostic Entreprise",
  "reseau-ideal": "Réseau Idéal",
  "brand-score": "Brand Score",
  "analyse-reseaux": "Analyse Réseaux (Artistes)",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = auditLeadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten().fieldErrors },
        { status: 422 },
      );
    }

    const { tool, prenom, email, summary } = parsed.data;

    /* ── Sauvegarde du lead en premier — ne doit jamais dépendre de l'envoi d'email ── */
    const { error: dbErr } = await getSupabase().from("leads").insert({
      type: "audit",
      data: { tool, prenom, email, summary },
    });
    if (dbErr) console.error("Supabase insert error:", dbErr.message);

    /* ── Notification agence (non-bloquant) ── */
    try {
      await resend.emails.send({
        from: "KEKELI Creative Agency <noreply@kekelicreativeagency.com>",
        to: [AGENCY_EMAIL],
        subject: `📊 Nouveau lead — ${TOOL_LABELS[tool]} — ${prenom}`,
        html: `<p><strong>Nouveau lead depuis un outil d'audit :</strong></p>
<p>Outil : ${TOOL_LABELS[tool]}<br/>Prénom : ${prenom}<br/>Email : ${email}</p>`,
      });
    } catch (emailErr) {
      console.error("Audit lead email error:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Audit lead API error:", err);
    return NextResponse.json({ error: "Une erreur inattendue s'est produite." }, { status: 500 });
  }
}
