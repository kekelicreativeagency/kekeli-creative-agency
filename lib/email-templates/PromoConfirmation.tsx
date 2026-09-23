import {
  Html, Head, Body, Container, Section,
  Heading, Text, Hr, Link, Preview,
} from "@react-email/components";
import type { PromoSiteWebData } from "@/lib/validations/promo";

interface Props {
  data: PromoSiteWebData;
  siteUrl: string;
}

const gold = "#C8A84B";
const dark = "#0C0B09";
const muted = "#78716C";
const border = "#E7E5E4";
const goldPale = "#F5EDD4";

export default function PromoConfirmation({ data, siteUrl }: Props) {
  return (
    <Html lang="fr">
      <Head />
      <Preview>
        ✅ Votre demande de site web à 50 000 F CFA est bien reçue
      </Preview>
      <Body style={{ backgroundColor: "#FAFAF8", fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: 600, margin: "0 auto", padding: "32px 16px" }}>

          <Section style={{ backgroundColor: dark, borderRadius: "16px 16px 0 0", padding: "28px 32px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                backgroundColor: "rgba(200,168,75,0.15)",
                border: `1px solid ${gold}`,
                textAlign: "center",
              }}>
                <span style={{ color: gold, fontWeight: "bold", fontSize: 18, lineHeight: "36px" }}>K</span>
              </div>
              <span style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 14, letterSpacing: "0.12em" }}>
                KEKELI<span style={{ color: gold }}>.</span>AGENCY
              </span>
            </div>
            <Heading style={{ color: "#FFFFFF", fontSize: 24, fontWeight: "600", margin: "0 0 6px" }}>
              Bonjour {data.nom},
            </Heading>
            <Text style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, margin: 0, lineHeight: 1.6 }}>
              Votre demande pour <strong style={{ color: "#FFF" }}>{data.entreprise}</strong> a bien été reçue !
            </Text>
          </Section>

          <div style={{ height: 3, background: `linear-gradient(90deg, ${gold}, #E8C96A, ${gold})` }} />

          <Section style={{ backgroundColor: "#FFFFFF", padding: "28px 32px", borderRadius: "0 0 16px 16px", border: `1px solid ${border}`, borderTop: "none" }}>

            <Section style={{ backgroundColor: goldPale, borderRadius: 12, padding: "16px 20px", marginBottom: 24, border: `1px solid rgba(200,168,75,0.3)` }}>
              <Text style={{ color: dark, fontSize: 14, margin: 0, lineHeight: 1.6 }}>
                🎉 Vous bénéficiez de notre offre <strong style={{ color: gold }}>Site Web à partir de 50 000 F CFA</strong> (valable jusqu&apos;au 22 octobre).
                Notre équipe vous contacte sous <strong>24 heures</strong> par téléphone ou WhatsApp pour démarrer votre projet.
              </Text>
            </Section>

            <Text style={{ color: dark, fontSize: 15, fontWeight: "600", margin: "0 0 12px" }}>
              Ce que comprend votre site :
            </Text>
            <div style={{ marginBottom: 24 }}>
              {[
                "Design adapté aux téléphones",
                "Bouton WhatsApp pour recevoir vos clients directement",
                "Nom de domaine + hébergement offerts la 1ère année",
                "Sécurisé (HTTPS)",
              ].map((s) => (
                <Text key={s} style={{ color: muted, fontSize: 13, margin: "0 0 6px" }}>
                  ✓ {s}
                </Text>
              ))}
            </div>

            <Hr style={{ borderColor: border, margin: "0 0 20px" }} />

            <Text style={{ color: muted, fontSize: 13, marginBottom: 8 }}>
              Une question en attendant ? Écrivez-nous directement sur WhatsApp :
            </Text>
            <Link
              href="https://wa.me/221765289111"
              style={{
                display: "inline-block",
                backgroundColor: gold,
                color: dark,
                padding: "10px 20px",
                borderRadius: 50,
                fontSize: 13,
                fontWeight: "600",
                textDecoration: "none",
                marginBottom: 24,
              }}
            >
              Discuter sur WhatsApp →
            </Link>

            <Hr style={{ borderColor: border, margin: "0 0 20px" }} />

            <Text style={{ color: muted, fontSize: 13, margin: "0 0 6px" }}>
              📧 <Link href="mailto:contact@kekelicreativeagency.com" style={{ color: gold }}>contact@kekelicreativeagency.com</Link>
            </Text>
            <Text style={{ color: muted, fontSize: 13, margin: "0 0 6px" }}>
              🌐 <Link href={siteUrl} style={{ color: gold }}>{siteUrl.replace("https://", "")}</Link>
            </Text>
            <Text style={{ color: muted, fontSize: 13, margin: 0 }}>
              📍 Dakar, Sénégal
            </Text>
          </Section>

          <Section style={{ padding: "20px 0" }}>
            <Text style={{ color: muted, fontSize: 11, textAlign: "center", margin: "0 0 4px" }}>
              L&apos;équipe KEKELI Creative Agency
            </Text>
            <Text style={{ color: muted, fontSize: 11, textAlign: "center", fontStyle: "italic", margin: 0 }}>
              &ldquo;Révéler la lumière de votre vision&rdquo; — Dakar, Sénégal
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
