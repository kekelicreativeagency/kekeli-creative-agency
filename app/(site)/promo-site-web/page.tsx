import type { Metadata } from "next";
import Image from "next/image";
import { Smartphone, MessageCircle, Globe, ShieldCheck, Store, UtensilsCrossed, Scissors, ShoppingBag, Briefcase, Sparkles } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import Badge from "@/components/ui/Badge";
import PromoSiteWebForm from "@/components/promo/PromoSiteWebForm";

const AFFICHES = [
  { src: "/images/promo/affiche-promo-site-web.jpg", alt: "Affiche Promo Site Web 50 000 F CFA — KEKELI Creative Agency" },
  { src: "/images/promo/affiche-site-ecommerce.png", alt: "Affiche Site E-commerce à partir de 50 000 F CFA — KEKELI Creative Agency" },
];

export const metadata: Metadata = {
  title: "Promo Site Web à partir de 50 000 F CFA",
  description:
    "Offre limitée du 22 septembre au 22 octobre : obtenez votre site web professionnel à partir de 50 000 F CFA avec KEKELI Creative Agency. Adapté mobile, bouton WhatsApp, nom de domaine et hébergement offerts.",
};

const BENEFITS = [
  { icon: Smartphone, title: "Adapté aux téléphones", desc: "Un site 100% responsive, pensé pour vos clients qui naviguent depuis leur mobile." },
  { icon: MessageCircle, title: "Bouton WhatsApp intégré", desc: "Recevez vos clients directement en un clic, sans étape supplémentaire." },
  { icon: Globe, title: "Domaine + hébergement offerts", desc: "Votre nom de domaine et l'hébergement sont inclus gratuitement la 1ère année." },
  { icon: ShieldCheck, title: "Sécurisé (HTTPS)", desc: "Un site professionnel et sécurisé qui inspire confiance à vos visiteurs." },
];

const CIBLES = [
  { icon: Scissors, label: "Salon de coiffure / beauté" },
  { icon: ShoppingBag, label: "Boutique" },
  { icon: UtensilsCrossed, label: "Restaurant" },
  { icon: Store, label: "Supérette" },
  { icon: Briefcase, label: "Prestataire de service" },
  { icon: Sparkles, label: "Toute autre activité" },
];

export default function PromoSiteWebPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #08060F 0%, #130A28 35%, #1C0A40 60%, #0A0618 100%)" }}
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20" style={{ background: "#C8A84B" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[130px] opacity-15" style={{ background: "#6D28D9" }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <Badge variant="gold" className="mb-6">🔥 Offre limitée · Du 22 septembre au 22 octobre</Badge>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
              Votre site web professionnel <br className="hidden sm:block" />
              à partir de <em className="text-gold not-italic">50 000 F CFA</em>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="font-body text-lg text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
              Vos clients vous cherchent d&apos;abord sur internet. Salon, boutique, restaurant, supérette, prestataire…
              si vous n&apos;avez pas de site, ils trouvent quelqu&apos;un d&apos;autre.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <a
              href="#reserver"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider text-[#0C0B09] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #C8A84B, #E8C96A)" }}
            >
              Je réserve mon site
            </a>
            <p className="font-body text-xs text-white/30 mt-4">⚠️ Places limitées</p>
          </FadeIn>
        </div>
      </section>

      {/* AFFICHES */}
      <section className="py-16 bg-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {AFFICHES.map(({ src, alt }, i) => (
              <FadeIn key={src} direction="up" delay={i * 0.1}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border [box-shadow:var(--shadow-md)]">
                  <Image src={src} alt={alt} fill sizes="(max-width: 640px) 100vw, 400px" className="object-cover" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-3">
              Ce que comprend <em className="text-gold not-italic">votre offre</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} direction="up" delay={i * 0.08}>
                <div className="h-full p-6 rounded-2xl border border-border bg-bg-primary hover:border-gold/40 hover:[box-shadow:var(--shadow-gold)] transition-all">
                  <div className="w-11 h-11 rounded-xl bg-gold-pale flex items-center justify-center mb-4">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="font-display text-base text-text-primary mb-1.5">{title}</h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="py-16 bg-bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl text-text-on-dark">
              Cette offre est faite pour <em className="text-gold not-italic">vous</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CIBLES.map(({ icon: Icon, label }, i) => (
              <FadeIn key={label} direction="up" delay={i * 0.06}>
                <div className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <Icon size={20} className="text-gold" />
                  <span className="font-body text-xs text-text-on-dark/70">{label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="reserver" className="py-24 bg-[#0C0B09]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <FadeIn direction="up" className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase rounded-full mb-4"
              style={{ color: "#C8A84B", border: "1px solid rgba(200,168,75,0.3)", background: "rgba(200,168,75,0.08)" }}>
              Réservez votre offre
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">
              Parlez-nous de <em className="text-gold not-italic">votre activité</em>
            </h2>
            <p className="font-body text-white/45 text-sm">On vous recontacte sous 24h pour démarrer votre site</p>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <PromoSiteWebForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
