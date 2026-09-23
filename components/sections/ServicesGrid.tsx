"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const FEATURED = {
  id: "entreprises",
  kicker: "Entreprises & Institutions",
  title: "Une communication qui inspire confiance",
  description:
    "Sites web, campagnes et couverture d'événements pour PME, ONG et organismes internationaux.",
  tags: ["Site web", "Publicité digitale", "Événementiel"],
  cta: { label: "Voir les services entreprises", href: "/entreprises/branding" },
  image: "/images/entreprise.jpg",
  imageAlt: "Dirigeante d'entreprise à son bureau, KEKELI Creative Agency",
  accent: "#C8A84B",
};

const SECONDARY = [
  {
    id: "personnalites",
    kicker: "Personnalités Publiques",
    title: "Votre image est votre premier message",
    description:
      "Image digitale et personal branding pour dirigeants et représentants institutionnels.",
    cta: { label: "Voir les services personnalités", href: "/personnalites/personal-branding" },
    image: "/images/branding.jpg",
    imageAlt: "Personnalité publique consultant ses statistiques, KEKELI Creative Agency",
    accent: "#C8A84B",
  },
  {
    id: "artistes",
    kicker: "Artistes / Musiciens",
    title: "Propulsez votre carrière musicale",
    description:
      "Identité visuelle, clips et distribution pour porter votre musique à l'international.",
    cta: { label: "Voir les services artistes", href: "/artistes/branding" },
    image: "/images/artiste.jpg",
    imageAlt: "Artiste musicien au piano, KEKELI Creative Agency",
    accent: "#8B5CF6",
  },
] as const;

export default function ServicesGrid() {
  return (
    <section aria-label="Nos services" className="bg-bg-primary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nos domaines d'expertise"
          title="Des solutions pensées pour chaque profil"
          subtitle="Trois publics, une même exigence de qualité et de professionnalisme."
          centered
          className="mb-16"
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Featured — Entreprises, en tête de priorité */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <Link href={FEATURED.cta.href} className="group block">
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden">
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 90vw, 55vw"
                />
              </div>
              <div className="mt-6 max-w-xl">
                <p
                  className="font-body text-xs font-bold uppercase tracking-[0.16em] mb-3"
                  style={{ color: FEATURED.accent }}
                >
                  {FEATURED.kicker}
                </p>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary leading-[1.1] tracking-tight mb-3 transition-colors group-hover:opacity-80">
                  {FEATURED.title}
                </h3>
                <p className="font-body text-base leading-relaxed text-text-muted mb-5 max-w-md">
                  {FEATURED.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {FEATURED.tags.map((t) => (
                    <span
                      key={t}
                      className="font-body text-[11px] text-text-secondary border border-border rounded-2xl px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-all duration-200 group-hover:gap-3.5"
                  style={{ color: FEATURED.accent }}
                >
                  {FEATURED.cta.label}
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Duo secondaire — Personnalités puis Artistes, meme gabarit que la carte principale */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-8">
            {SECONDARY.map((block, i) => (
              <motion.div
                key={block.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={block.cta.href} className="group block">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                    <Image
                      src={block.image}
                      alt={block.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                      sizes="(max-width: 1024px) 90vw, 40vw"
                    />
                  </div>
                  <div className="mt-5">
                    <p
                      className="font-body text-[11px] font-bold uppercase tracking-[0.14em] mb-2"
                      style={{ color: block.accent }}
                    >
                      {block.kicker}
                    </p>
                    <h3 className="font-display font-bold text-xl text-text-primary leading-tight mb-2 transition-colors group-hover:opacity-80">
                      {block.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed text-text-muted mb-3">
                      {block.description}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 font-body text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                      style={{ color: block.accent }}
                    >
                      {block.cta.label}
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
