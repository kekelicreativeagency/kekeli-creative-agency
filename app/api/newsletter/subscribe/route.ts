import { NextResponse } from "next/server";
import { z } from "zod";
import { render } from "@react-email/components";
import { resend, AGENCY_EMAIL, SITE_URL } from "@/lib/resend";
import { getSupabase } from "@/lib/supabase";
import NewsletterWelcome from "@/lib/email-templates/NewsletterWelcome";

const schema = z.object({
  email: z.string().email("Adresse email invalide"),
  name: z.string().max(80).optional(),
  source: z.string().max(50).default("footer"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 422 },
      );
    }

    const { email, name, source } = parsed.data;
    const db = getSupabase();

    /* ── Check si déjà abonné ── */
    // .limit(1) plutôt que .single() : évite une erreur si l'email existe
    // en double dans la table (ancien test, etc.) — on prend juste la 1ère ligne.
    const { data: existingRows } = await db
      .from("newsletter_subscribers")
      .select("id, unsubscribed_at")
      .eq("email", email)
      .limit(1);
    const existing = existingRows?.[0];

    if (existing) {
      if (!existing.unsubscribed_at) {
        // Déjà abonné et actif — pas d'erreur, juste silencieux
        return NextResponse.json({ success: true, alreadySubscribed: true });
      }
      // Était désabonné — réabonnement
      await db
        .from("newsletter_subscribers")
        .update({ unsubscribed_at: null, name: name ?? null, source })
        .eq("id", existing.id);
    } else {
      // Nouvel abonné
      const { error: insertErr } = await db
        .from("newsletter_subscribers")
        .insert({ email, name: name ?? null, source });

      if (insertErr) {
        // Contrainte unique sur l'email (course entre le check et l'insert,
        // ou doublon existant) — pas une vraie erreur, l'email est abonné.
        if (insertErr.code === "23505") {
          return NextResponse.json({ success: true, alreadySubscribed: true });
        }
        console.error("Newsletter insert error:", insertErr.message);
        return NextResponse.json({ error: "Erreur serveur. Veuillez réessayer." }, { status: 500 });
      }
    }

    /* ── Récupérer le token pour le lien de désinscription ── */
    const { data: subRows } = await db
      .from("newsletter_subscribers")
      .select("token")
      .eq("email", email)
      .limit(1);
    const sub = subRows?.[0];

    const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?token=${sub?.token ?? ""}`;

    /* ── Email de bienvenue (ne doit jamais faire échouer l'inscription) ── */
    try {
      await resend.emails.send({
        from: "KEKELI Creative Agency <noreply@kekelicreativeagency.com>",
        to: [email],
        replyTo: AGENCY_EMAIL,
        subject: "🎉 Bienvenue dans la newsletter KEKELI !",
        html: await render(NewsletterWelcome({ name, siteUrl: SITE_URL, unsubscribeUrl })),
      });
    } catch (emailErr) {
      console.error("Newsletter welcome email error:", emailErr);
    }

    /* ── Notification interne ── */
    resend.emails.send({
      from: "KEKELI Creative Agency <noreply@kekelicreativeagency.com>",
      to: [AGENCY_EMAIL],
      subject: `📧 Nouvel abonné newsletter — ${email}`,
      html: `<p><strong>Nouvel abonné newsletter :</strong><br/>Email : ${email}<br/>Nom : ${name ?? "—"}<br/>Source : ${source}</p>`,
    }).catch(console.error);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    return NextResponse.json({ error: "Une erreur inattendue s'est produite." }, { status: 500 });
  }
}
