"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Palette, Music2, Video, Camera, Users, TrendingUp, Shield,
  Headphones, Target, Globe, Coins,
  Building2, Monitor, MessageSquare, Megaphone, Film, GraduationCap, Smartphone,
  Sparkles, BarChart2, Rocket, Wand2, Award,
  Star, Search, Share2, Map,
} from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { useT } from "@/hooks/useT";
import { useLanguage } from "@/providers/LanguageProvider";

const ENT_SERVICES_FR = [
  { icon: Building2,     label: "Identité & Branding",       href: "/entreprises/branding",      color: "#C8A84B", desc: "Logo, charte graphique, templates" },
  { icon: Monitor,       label: "Site Web & Digitalisation", href: "/entreprises/site-web",      color: "#8B5CF6", desc: "Vitrine, e-commerce, espace client" },
  { icon: MessageSquare, label: "Community Management",      href: "/entreprises/community",     color: "#C8A84B", desc: "Réseaux sociaux & création contenu" },
  { icon: Megaphone,     label: "Campagnes Publicitaires",   href: "/entreprises/publicite",     color: "#8B5CF6", desc: "Facebook, Instagram, Google Ads" },
  { icon: TrendingUp,    label: "Stratégie & Croissance",    href: "/entreprises/strategie",     color: "#C8A84B", desc: "Audit digital, growth roadmap" },
  { icon: Film,          label: "Photo & Vidéo Business",    href: "/entreprises/photo-video",   color: "#8B5CF6", desc: "Shooting corporate, reels, pubs" },
  { icon: GraduationCap, label: "Business Coach 2 Mois",     href: "/entreprises/coaching",      color: "#C8A84B", desc: "Formation & accompagnement digital" },
  { icon: Smartphone,    label: "Applications Mobile & Web", href: "/entreprises/applications",  color: "#8B5CF6", desc: "iOS, Android, PWA, dashboards" },
];

const ENT_SERVICES_EN = [
  { icon: Building2,     label: "Identity & Branding",       href: "/entreprises/branding",      color: "#C8A84B", desc: "Logo, brand guidelines, templates" },
  { icon: Monitor,       label: "Website & Digitalization",  href: "/entreprises/site-web",      color: "#8B5CF6", desc: "Showcase, e-commerce, client space" },
  { icon: MessageSquare, label: "Community Management",      href: "/entreprises/community",     color: "#C8A84B", desc: "Social media & content creation" },
  { icon: Megaphone,     label: "Advertising Campaigns",     href: "/entreprises/publicite",     color: "#8B5CF6", desc: "Facebook, Instagram, Google Ads" },
  { icon: TrendingUp,    label: "Strategy & Growth",         href: "/entreprises/strategie",     color: "#C8A84B", desc: "Digital audit, growth roadmap" },
  { icon: Film,          label: "Business Photo & Video",    href: "/entreprises/photo-video",   color: "#8B5CF6", desc: "Corporate shooting, reels, ads" },
  { icon: GraduationCap, label: "Business Coach 2 Months",   href: "/entreprises/coaching",      color: "#C8A84B", desc: "Training & digital support" },
  { icon: Smartphone,    label: "Mobile & Web Apps",         href: "/entreprises/applications",  color: "#8B5CF6", desc: "iOS, Android, PWA, dashboards" },
];

const ENT_IA_FR = [
  { icon: Star,   label: "Brand Score",            href: "/entreprises/brand-score",      color: "#C8A84B", desc: "Image de marque · Gratuit" },
  { icon: Search, label: "Audit Visibilité",       href: "/entreprises/audit-visibilite", color: "#8B5CF6", desc: "Présence digitale · Gratuit" },
  { icon: Share2, label: "Réseau Idéal",           href: "/entreprises/reseau-ideal",     color: "#C8A84B", desc: "Quel réseau pour toi · Gratuit" },
  { icon: Map,    label: "Diagnostic Entreprise",  href: "/entreprises/diagnostic",       color: "#8B5CF6", desc: "Que manque-t-il ? · Gratuit" },
];

const ENT_IA_EN = [
  { icon: Star,   label: "Brand Score",            href: "/entreprises/brand-score",      color: "#C8A84B", desc: "Brand image · Free" },
  { icon: Search, label: "Visibility Audit",       href: "/entreprises/audit-visibilite", color: "#8B5CF6", desc: "Digital presence · Free" },
  { icon: Share2, label: "Ideal Network",          href: "/entreprises/reseau-ideal",     color: "#C8A84B", desc: "Which network for you · Free" },
  { icon: Map,    label: "Business Diagnostic",    href: "/entreprises/diagnostic",       color: "#8B5CF6", desc: "What's missing? · Free" },
];

const PERSONNALITES_SERVICES_FR = [
  { icon: Palette,     label: "Personal Branding",       href: "/personnalites/personal-branding",   color: "#C8A84B", desc: "Logo, monogramme, charte graphique" },
  { icon: Camera,      label: "Image Digitale",          href: "/personnalites/image-digitale",      color: "#8B5CF6", desc: "Bio, shooting photo, profils harmonisés" },
  { icon: TrendingUp,  label: "Stratégie d'Influence",   href: "/personnalites/strategie-influence", color: "#C8A84B", desc: "Ligne éditoriale, calendrier de contenu" },
  { icon: Shield,      label: "Gestion de Réputation",   href: "/personnalites/gestion-reputation",  color: "#8B5CF6", desc: "Monitoring e-réputation, gestion de crise" },
];

const PERSONNALITES_SERVICES_EN = [
  { icon: Palette,     label: "Personal Branding",       href: "/personnalites/personal-branding",   color: "#C8A84B", desc: "Logo, monogram, brand guidelines" },
  { icon: Camera,      label: "Digital Image",           href: "/personnalites/image-digitale",      color: "#8B5CF6", desc: "Bio, photo shoot, harmonized profiles" },
  { icon: TrendingUp,  label: "Influence Strategy",      href: "/personnalites/strategie-influence", color: "#C8A84B", desc: "Editorial line, content calendar" },
  { icon: Shield,      label: "Reputation Management",   href: "/personnalites/gestion-reputation",  color: "#8B5CF6", desc: "E-reputation monitoring, crisis management" },
];

const ARTISTES_SERVICES_FR = [
  { icon: Palette,    label: "Direction Artistique",    href: "/artistes/direction",      color: "#C8A84B", desc: "Identité artistique & univers visuel" },
  { icon: Music2,     label: "Branding Artiste",        href: "/artistes/branding",       color: "#8B5CF6", desc: "Logo, covers, templates réseaux" },
  { icon: Video,      label: "Clips & Vidéos",          href: "/artistes/clips",          color: "#C8A84B", desc: "Clips pro, visualizers, reels" },
  { icon: Camera,     label: "Photo Shooting",          href: "/artistes/photo",          color: "#8B5CF6", desc: "Portraits, cover artworks, contenu" },
  { icon: Users,      label: "Accompagnement Artistique", href: "/artistes/accompagnement", color: "#C8A84B", desc: "Coaching carrière & stratégie" },
  { icon: TrendingUp, label: "Stratégie Digitale",      href: "/artistes/strategie",      color: "#8B5CF6", desc: "Lancement album, campagnes digitales" },
  { icon: Headphones, label: "Distribution Musicale",   href: "/artistes/distribution",   color: "#C8A84B", desc: "Spotify, Apple Music, Boomplay…" },
  { icon: Target,     label: "Marketing Digital",       href: "/artistes/marketing",      color: "#8B5CF6", desc: "Croissance audience, SEO, TikTok" },
  { icon: Globe,      label: "Identité Digitale",       href: "/artistes/identite",       color: "#C8A84B", desc: "Site web artiste, EPK, newsletter" },
  { icon: Coins,      label: "Monétisation & Business", href: "/artistes/monetisation",   color: "#8B5CF6", desc: "Revenus, droits d'auteur, sponsors" },
];

const ARTISTES_SERVICES_EN = [
  { icon: Palette,    label: "Artistic Direction",      href: "/artistes/direction",      color: "#C8A84B", desc: "Artistic identity & visual universe" },
  { icon: Music2,     label: "Artist Branding",         href: "/artistes/branding",       color: "#8B5CF6", desc: "Logo, covers, social templates" },
  { icon: Video,      label: "Clips & Videos",          href: "/artistes/clips",          color: "#C8A84B", desc: "Pro clips, visualizers, reels" },
  { icon: Camera,     label: "Photo Shooting",          href: "/artistes/photo",          color: "#8B5CF6", desc: "Portraits, cover artworks, content" },
  { icon: Users,      label: "Artist Coaching",         href: "/artistes/accompagnement", color: "#C8A84B", desc: "Career coaching & strategy" },
  { icon: TrendingUp, label: "Digital Strategy",        href: "/artistes/strategie",      color: "#8B5CF6", desc: "Album launch, digital campaigns" },
  { icon: Headphones, label: "Music Distribution",      href: "/artistes/distribution",   color: "#C8A84B", desc: "Spotify, Apple Music, Boomplay…" },
  { icon: Target,     label: "Digital Marketing",       href: "/artistes/marketing",      color: "#8B5CF6", desc: "Audience growth, SEO, TikTok" },
  { icon: Globe,      label: "Digital Identity",        href: "/artistes/identite",       color: "#C8A84B", desc: "Artist website, EPK, newsletter" },
  { icon: Coins,      label: "Monetization & Business", href: "/artistes/monetisation",   color: "#8B5CF6", desc: "Revenue, copyright, sponsors" },
];

const ARTISTES_IA_FR = [
  { icon: Sparkles,  label: "Vision de Carrière",   href: "/artistes/vision",              color: "#C8A84B", desc: "Analyse IA · Gratuit" },
  { icon: BarChart2, label: "Analyse Réseaux",      href: "/artistes/analyse-reseaux",     color: "#8B5CF6", desc: "Audit IA · Gratuit" },
  { icon: Rocket,    label: "Stratégie Lancement",  href: "/artistes/strategie-lancement", color: "#C8A84B", desc: "Plan 90j · Gratuit" },
  { icon: Wand2,     label: "Moodboard IA",         href: "/artistes/moodboard",           color: "#8B5CF6", desc: "Direction visuelle · Gratuit" },
  { icon: Award,     label: "Certification",        href: "/certification",                color: "#C8A84B", desc: "Badge officiel · Gratuit" },
];

const ARTISTES_IA_EN = [
  { icon: Sparkles,  label: "Career Vision",        href: "/artistes/vision",              color: "#C8A84B", desc: "AI Analysis · Free" },
  { icon: BarChart2, label: "Network Analysis",     href: "/artistes/analyse-reseaux",     color: "#8B5CF6", desc: "AI Audit · Free" },
  { icon: Rocket,    label: "Launch Strategy",      href: "/artistes/strategie-lancement", color: "#C8A84B", desc: "90-day plan · Free" },
  { icon: Wand2,     label: "AI Moodboard",         href: "/artistes/moodboard",           color: "#8B5CF6", desc: "Visual direction · Free" },
  { icon: Award,     label: "Certification",        href: "/certification",                color: "#C8A84B", desc: "Official badge · Free" },
];

function ServiceCard({ icon: Icon, label, href, color, desc }: { icon: React.ElementType; label: string; href: string; color: string; desc: string }) {
  return (
    <Link href={href} className="group flex items-start gap-3 p-4 rounded-2xl bg-white transition-all duration-200 hover:-translate-y-0.5"
      style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110" style={{ background: `${color}18` }}>
        <Icon size={16} style={{ color }} />
      </div>
      <div>
        <p className="font-body text-sm font-semibold text-[#0C0B09] leading-tight mb-0.5">{label}</p>
        <p className="font-body text-xs text-[#78716C]">{desc}</p>
      </div>
    </Link>
  );
}

function IAToolsStrip({ label, tools, accent }: { label: string; tools: { href: string; label: string }[]; accent: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-6 p-4 rounded-2xl" style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}>
      <span className="inline-flex items-center gap-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.1em] mr-1" style={{ color: accent }}>
        <Sparkles size={11} style={{ color: accent }} />
        {label}
      </span>
      {tools.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className="font-body text-[11px] text-text-secondary hover:text-text-primary rounded-full px-2.5 py-1 transition-colors bg-white"
          style={{ border: `1px solid ${accent}30` }}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}

interface HeroPortrait { src: string; alt: string }

interface ServicesShowcaseProps {
  showBreadcrumb?: boolean;
  heroImageLeft?: HeroPortrait;
  heroImageRight?: HeroPortrait;
}

function HeroPortraitCard({ image, delay }: { image: HeroPortrait; delay: number }) {
  return (
    <FadeIn direction="up" delay={delay} className="hidden lg:block">
      <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden ring-1 ring-gold/20"
        style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover object-top"
          sizes="280px"
        />
      </div>
    </FadeIn>
  );
}

export default function ServicesShowcase({ showBreadcrumb = true, heroImageLeft, heroImageRight }: ServicesShowcaseProps) {
  const tr = useT();
  const s = tr.pages.services;
  const { locale } = useLanguage();

  const entServices = locale === "fr" ? ENT_SERVICES_FR : ENT_SERVICES_EN;
  const entIA = locale === "fr" ? ENT_IA_FR : ENT_IA_EN;
  const personnalitesServices = locale === "fr" ? PERSONNALITES_SERVICES_FR : PERSONNALITES_SERVICES_EN;
  const artisteServices = locale === "fr" ? ARTISTES_SERVICES_FR : ARTISTES_SERVICES_EN;
  const artisteIA = locale === "fr" ? ARTISTES_IA_FR : ARTISTES_IA_EN;

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #08060F 0%, #130A28 35%, #1C0A40 60%, #0A0618 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-25" style={{ background: "#6D28D9" }} />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[130px] opacity-20" style={{ background: "#C8A84B" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {showBreadcrumb && (
            <FadeIn direction="down" className="mb-8">
              <nav className="flex items-center gap-2 text-xs font-body" style={{ color: "rgba(220,210,255,0.45)" }}>
                <Link href="/" className="hover:text-gold transition-colors">{s.breadHome}</Link>
                <ChevronRight size={12} />
                <span style={{ color: "rgba(220,210,255,0.70)" }}>Services</span>
              </nav>
            </FadeIn>
          )}

          <div className={heroImageLeft || heroImageRight ? "grid lg:grid-cols-[280px_1fr_280px] gap-8 items-center" : ""}>
            {heroImageLeft && <HeroPortraitCard image={heroImageLeft} delay={0.15} />}

            <div>
              <FadeIn direction="up">
                <SectionHeader
                  eyebrow={s.eyebrow}
                  title={<>{s.heroTitle1}<br /><em className="text-gold not-italic">{s.heroTitleHL}</em></>}
                  subtitle={s.intro}
                  light
                />
              </FadeIn>
              <FadeIn direction="up" delay={0.2} className="flex flex-wrap gap-3 mt-8">
                <Button href="/entreprises" variant="gold" size="sm">{s.companiesTab}</Button>
                <Button href="/personnalites" variant="outline-gold" size="sm">{s.personalitiesTab}</Button>
                <Button href="/artistes" variant="outline-purple" size="sm">{s.artistsTab}</Button>
              </FadeIn>
            </div>

            {heroImageRight && <HeroPortraitCard image={heroImageRight} delay={0.25} />}
          </div>
        </div>
      </section>

      {/* ENTREPRISES */}
      <section className="py-20" style={{ background: "#F7F4EE" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-10">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark mb-2">{s.companiesEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl text-[#0C0B09]">
                  {s.companiesTagline1} <span className="text-gold">{s.companiesTaglineHL}</span>
                </h2>
                <p className="font-body text-base text-[#78716C] mt-2 max-w-lg">{s.companiesDesc}</p>
              </div>
              <Link href="/entreprises" className="shrink-0 font-body text-sm font-semibold text-gold-dark hover:underline flex items-center gap-1">
                {s.seeCompanies} <ChevronRight size={14} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {entServices.map((sv) => (
              <FadeIn key={sv.href} direction="up">
                <ServiceCard {...sv} />
              </FadeIn>
            ))}
          </div>
          <IAToolsStrip label={s.companiesIAEyebrow} tools={entIA} accent="#C8A84B" />
        </div>
      </section>

      {/* PERSONNALITÉS */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D0520 0%, #1E0040 35%, #2A0060 60%, #0A0B09 100%)" }}>
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[140px] opacity-25" style={{ background: "#C8A84B" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-10">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.2em] mb-2 text-gold">{s.personalitiesEyebrow}</p>
                <h2 className="font-body font-extrabold text-3xl md:text-4xl text-white tracking-tight">
                  {s.personalitiesTagline1} <span className="text-gold">{s.personalitiesTaglineHL}</span>
                </h2>
                <p className="font-body text-base mt-2 max-w-lg" style={{ color: "rgba(220,210,255,0.65)" }}>{s.personalitiesDesc}</p>
              </div>
              <Link href="/personnalites" className="shrink-0 font-body text-sm font-semibold hover:underline flex items-center gap-1 text-gold">
                {s.seePersonalities} <ChevronRight size={14} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {personnalitesServices.map((sv) => (
              <FadeIn key={sv.href} direction="up">
                <ServiceCard {...sv} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ARTISTES */}
      <section className="py-20" style={{ background: "#F7F4EE" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="mb-10">
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-gold-dark mb-2">{s.artistsEyebrow}</p>
                <h2 className="font-display text-3xl md:text-4xl text-[#0C0B09]">
                  {s.artistsTagline1} <span className="text-gold">{s.artistsTaglineHL}</span> {s.artistsTagline2}
                </h2>
                <p className="font-body text-base text-[#78716C] mt-2 max-w-lg">{s.artistsDesc}</p>
              </div>
              <Link href="/artistes" className="shrink-0 font-body text-sm font-semibold text-gold-dark hover:underline flex items-center gap-1">
                {s.seeArtists} <ChevronRight size={14} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {artisteServices.map((sv) => (
              <FadeIn key={sv.href} direction="up">
                <ServiceCard {...sv} />
              </FadeIn>
            ))}
          </div>
          <IAToolsStrip label={s.artistsIAEyebrow} tools={artisteIA} accent="#8B5CF6" />
        </div>
      </section>
    </>
  );
}
