import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FadeIn, { FadeInStagger, FadeInItem } from "@/components/animations/FadeIn";
import BrandingForm from "@/components/branding/BrandingForm";

export const metadata: Metadata = {
  title: "Branding Artiste — Logo, Charte Graphique & Identité Visuelle",
  description:
    "Créez une image de marque forte et reconnaissable. Logo, charte graphique, templates réseaux sociaux, Press Kit — KEKELI Creative Agency construit l'identité visuelle des artistes sénégalais.",
  keywords: ["branding artiste Dakar", "logo artiste Sénégal", "charte graphique musique", "identité visuelle artiste africain", "press kit EPK Dakar", "templates Instagram artiste"],
  alternates: { canonical: "/artistes/branding" },
  openGraph: {
    title: "Branding Artiste — Logo & Identité Visuelle — KEKELI Creative Agency",
    description: "Logo, charte graphique, templates réseaux, Press Kit EPK — construisez une image de marque forte avec KEKELI Creative Agency.",
    url: "/artistes/branding",
  },
};

/* ── Données ─────────────────────────────────── */
const ACCENT = "#8B5CF6";

const services = [
  {
    title: "Logo & Identité Visuelle",
    desc: "Un logo fort et une charte graphique cohérente qui vous rendent immédiatement reconnaissable.",
    includes: [
      "Création de logo (3 propositions)",
      "Déclinaisons couleur (fond clair/sombre)",
      "Palette de couleurs officielle",
      "Typographies principales et secondaires",
      "Charte graphique complète en PDF",
      "Fichiers sources HD (PNG, SVG, PDF)",
    ],
  },
  {
    title: "Templates Réseaux Sociaux",
    desc: "Des modèles prêts à l'emploi pour vos posts et stories — un feed professionnel sans effort.",
    includes: [
      "Posts Instagram (carrés + portrait)",
      "Stories Instagram / TikTok",
      "Couverture YouTube & bannière Facebook",
      "Vignettes YouTube personnalisées",
      "Templates annonces de sortie",
      "Livraison en format Canva éditable",
    ],
  },
  {
    title: "Press Kit Artiste (EPK)",
    desc: "Votre dossier de presse numérique — indispensable pour convaincre labels, médias et organisateurs.",
    includes: [
      "Biographie courte et longue",
      "Photos artiste haute résolution",
      "Discographie complète",
      "Revue de presse & citations",
      "Liens streaming & réseaux sociaux",
      "Contacts presse & booking",
    ],
  },
  {
    title: "Direction Artistique Globale",
    desc: "Votre univers visuel complet, cohérent sur tous vos supports — le pack le plus impactant.",
    includes: [
      "Tout ce qui est dans les 3 services ci-dessus",
      "Moodboard & direction créative",
      "Concept visuel pour covers & clips",
      "Univers couleur pour les saisons de release",
      "Guide d'utilisation de la marque",
      "Accompagnement sur 3 mois",
    ],
  },
];

const processSteps = [
  { step: "01", title: "Brief créatif",        desc: "On échange sur votre univers, vos références et ce que vous voulez transmettre à votre audience." },
  { step: "02", title: "Moodboard",            desc: "On crée un moodboard visuel pour valider la direction artistique avant de commencer." },
  { step: "03", title: "Création",             desc: "Notre équipe créative produit les éléments dans le style validé ensemble." },
  { step: "04", title: "Révisions",            desc: "Vous donnez votre avis, on ajuste jusqu'à ce que vous soyez 100% satisfait." },
  { step: "05", title: "Livraison & Guide",    desc: "Livraison de tous les fichiers sources + guide d'utilisation de votre identité visuelle." },
];

const brandElements = [
  { name: "Nom artistique fort",       desc: "Un nom mémorable qui sonne et s'écrit bien partout" },
  { name: "Palette de couleurs",       desc: "Vos couleurs signature qui créent une reconnaissance immédiate" },
  { name: "Typographies",              desc: "Les polices qui transmettent votre personnalité artistique" },
  { name: "Direction photo",           desc: "Un style photo cohérent pour tous vos shoots" },
  { name: "Son de marque",             desc: "Une identité sonore reconnaissable en intro/outro" },
  { name: "Ton de communication",      desc: "La façon dont vous parlez à votre audience, toujours cohérente" },
];

const whyKekeli = [
  { title: "Vision artistique",        desc: "Nous comprenons l'esthétique musicale africaine et créons des identités qui résonnent avec votre audience." },
  { title: "Designs originaux",        desc: "Aucun template générique. Chaque logo et charte est créé entièrement sur mesure pour vous." },
  { title: "Cohérence totale",         desc: "Votre identité est la même sur tous vos supports : réseaux, clips, press kit, scène." },
  { title: "Expérience artistes",      desc: "Nous avons construit l'image de marque de dizaines d'artistes sénégalais et africains." },
  { title: "Fichiers complets",        desc: "Tous les formats dont vous avez besoin : PNG, SVG, PDF, Canva — pour toujours." },
  { title: "Accompagnement continu",   desc: "Même après la livraison, on reste disponibles pour adapter votre branding à vos nouvelles sorties." },
];

export default function BrandingPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{ background: "#0C0B09" }}
      >
        {/* Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-22" style={{ background: ACCENT }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[130px] opacity-18" style={{ background: "#6D28D9" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px] opacity-10" style={{ background: "#C8A84B" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Breadcrumb */}
            <FadeIn direction="down" className="mb-8">
              <nav className="flex items-center gap-2 text-xs font-body" style={{ color: "rgba(255,255,255,0.45)" }}>
                <Link href="/" className="hover:text-gold transition-colors">Accueil</Link>
                <ChevronRight size={12} />
                <Link href="/artistes" className="hover:text-gold transition-colors">Artistes</Link>
                <ChevronRight size={12} />
                <span style={{ color: "rgba(255,255,255,0.70)" }}>Branding Artiste</span>
              </nav>
            </FadeIn>

            <div className="max-w-xl">
              <FadeIn direction="up" delay={0.05}>
                <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] mb-4" style={{ color: "#A78BFA" }}>
                  Branding & Identité Visuelle
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.12}>
                <h1 className="font-body font-bold text-5xl sm:text-6xl lg:text-[4rem] leading-[1.08] text-white mb-6">
                  Une image qui vous<br />
                  <span style={{ color: "#A78BFA" }}>rend inoubliable</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.22}>
                <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.70)" }}>
                  Logo, charte graphique, templates réseaux, Press Kit — KEKELI Creative Agency construit une
                  identité visuelle forte et cohérente qui fait reconnaître votre talent au premier coup d&apos;œil.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#formulaire"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-bold text-base text-black transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #C8A84B 0%, #D4A83A 100%)", boxShadow: "0 8px 30px rgba(200,168,75,0.40)" }}
                  >
                    Créer mon identité
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base transition-all"
                    style={{ border: "2px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
                  >
                    Voir les services
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
          <FadeIn direction="left" delay={0.15} className="hidden lg:block">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden" style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
              <Image
                src="/images/artiste 2.jpg"
                alt="Portrait artiste, identité visuelle KEKELI Creative Agency"
                fill
                className="object-cover"
                sizes="45vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ÉLÉMENTS D'UNE MARQUE ───────────────────────── */}
      <section className="py-16" style={{ background: "#08060F" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-10">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2">Les piliers de votre marque</p>
            <h2 className="font-display text-3xl text-white">Ce qui fait une image de marque forte</h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brandElements.map((b) => (
              <FadeInItem key={b.name}>
                <div
                  className="p-4 rounded-2xl border-l-2"
                  style={{ background: "rgba(255,255,255,0.04)", borderColor: ACCENT }}
                >
                  <p className="font-body font-semibold text-white text-sm mb-1">{b.name}</p>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{b.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── NOS SERVICES ────────────────────────────────── */}
      <section id="services" className="py-24" style={{ background: "linear-gradient(160deg, #FBF6EC 0%, #F5EDD8 50%, #FAF4E8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Ce qu&apos;on crée pour vous</p>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-tight">
              Nos services de <em className="text-gold not-italic">branding</em>
            </h2>
            <p className="font-body text-base text-text-muted mt-4 max-w-xl mx-auto">
              Tarifs sur devis — chaque projet est unique. Remplissez le formulaire pour un devis sous 24h.
            </p>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <FadeInItem key={s.title}>
                <div className="h-full bg-white rounded-2xl p-6 flex flex-col" style={{ boxShadow: "0 4px 20px rgba(139,92,246,0.08)" }}>
                  <h3 className="font-body font-bold text-text-primary text-base leading-snug mb-2">{s.title}</h3>
                  <p className="font-body text-xs text-text-muted leading-relaxed mb-4">{s.desc}</p>
                  <div className="space-y-1.5 flex-1">
                    {s.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: ACCENT }} />
                        <span className="font-body text-xs text-text-secondary">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <a href="#formulaire" className="font-body text-xs font-semibold transition-colors" style={{ color: ACCENT }}>
                      Demander un devis →
                    </a>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── PROCESSUS ─────────────────────────────────── */}
      <section className="py-24" style={{ background: "#0A0618" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Notre méthode</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight">
              Du brief à votre <em className="text-gold not-italic">identité finale</em>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((s) => (
              <FadeInItem key={s.step}>
                <div className="flex flex-col p-5 rounded-2xl h-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="font-body font-bold text-[10px] tracking-[0.2em] mb-3" style={{ color: ACCENT }}>{s.step}</span>
                  <h3 className="font-body font-bold text-white text-sm mb-2">{s.title}</h3>
                  <p className="font-body text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.50)" }}>{s.desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── POURQUOI KEKELI ────────────────────────────── */}
      <section className="py-24" style={{ background: "linear-gradient(160deg, #FBF6EC 0%, #F5EDD8 50%, #FAF4E8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-14">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3">Nos atouts</p>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-tight">
              Pourquoi choisir <em className="text-gold not-italic">KEKELI ?</em>
            </h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyKekeli.map(({ title, desc }) => (
              <FadeInItem key={title}>
                <div className="p-5 rounded-2xl bg-white border-l-2" style={{ boxShadow: "0 4px 20px rgba(139,92,246,0.08)", borderColor: ACCENT }}>
                  <p className="font-body font-semibold text-text-primary text-sm mb-1">{title}</p>
                  <p className="font-body text-xs leading-relaxed text-text-muted">{desc}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── FORMULAIRE ─────────────────────────────────── */}
      <section
        id="formulaire"
        className="py-24 relative overflow-hidden"
        style={{ background: "#0C0B09" }}
      >
        {/* Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-[140px] opacity-18" style={{ background: ACCENT }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-[120px] opacity-12" style={{ background: "#6D28D9" }} />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-12">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] mb-3" style={{ color: "#A78BFA" }}>Brief créatif</p>
            <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mb-4">
              Construisons votre <em className="text-gold not-italic">marque</em>
            </h2>
            <p className="font-body text-base" style={{ color: "rgba(255,255,255,0.60)" }}>
              Partagez votre univers et vos ambitions. Notre équipe créative vous répond sous 24h avec des idées et un devis personnalisé.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="rounded-3xl p-6 sm:p-10" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", backdropFilter: "blur(12px)" }}>
              <BrandingForm />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
