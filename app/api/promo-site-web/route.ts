import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import { promoSiteWebSchema } from "@/lib/validations/promo";
import { resend, AGENCY_EMAIL, SITE_URL } from "@/lib/resend";
import { getSupabase } from "@/lib/supabase";
import PromoNotification from "@/lib/email-templates/PromoNotification";
import PromoConfirmation from "@/lib/email-templates/PromoConfirmation";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const parsed = promoSiteWebSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten().fieldErrors },
        { status: 422 },
      );
    }

    const data = parsed.data;
    const receivedAt = new Date().toLocaleString("fr-SN", {
      timeZone: "Africa/Dakar",
      dateStyle: "full",
      timeStyle: "short",
    });

    /* ── Sauvegarde du lead en premier — ne doit jamais dépendre de l'envoi d'email ── */
    const { error: dbErr } = await getSupabase().from("leads").insert({ type: "promo_site_web", data });
    if (dbErr) console.error("Supabase insert error:", dbErr.message);

    /* ── Emails (non-bloquant) ── */
    try {
      const [notif, confirm] = await Promise.all([
        resend.emails.send({
          from: "KEKELI Creative Agency <noreply@kekelicreativeagency.com>",
          to: [AGENCY_EMAIL],
          subject: `🔥 Promo Site Web — ${data.entreprise} — ${data.nom}`,
          html: await render(PromoNotification({ data, receivedAt })),
        }),
        resend.emails.send({
          from: "KEKELI Creative Agency <noreply@kekelicreativeagency.com>",
          to: [data.email],
          replyTo: AGENCY_EMAIL,
          subject: "✅ Votre demande de site web à 50 000 F CFA est bien reçue",
          html: await render(PromoConfirmation({ data, siteUrl: SITE_URL })),
        }),
      ]);

      if (notif.error || confirm.error) {
        console.error("Resend promo error:", notif.error ?? confirm.error);
      }
    } catch (emailErr) {
      console.error("Promo email error:", emailErr);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Promo API error:", err);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite." },
      { status: 500 },
    );
  }
}
