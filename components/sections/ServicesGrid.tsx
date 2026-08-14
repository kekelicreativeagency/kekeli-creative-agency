"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import SectionHeader from "@/components/ui/SectionHeader";

const BLOCKS = [
  {
    id: "entreprises",
    eyebrow: "Entreprises & Institutions",
    title: "Une communication qui inspire confiance",
    description:
      "Sites web, campagnes et couverture d'événements pour PME, ONG et organismes internationaux.",
    tags: ["Site web", "Publicité digitale", "Événementiel"],
    cta: { label: "Voir les services entreprises", href: "/entreprises/branding" },
    image: "/images/entreprise.jpg",
    imageAlt: "Dirigeante d'entreprise à son bureau — KEKELI Creative Agency",
    accent: "#C8A84B",
    chipText: "#000000",
  },
  {
    id: "personnalites",
    eyebrow: "Personnalités Publiques",
    title: "Votre image est votre premier message",
    description:
      "Image digitale et personal branding pour dirigeants et représentants institutionnels.",
    tags: ["Personal branding", "E-réputation", "Shooting photo"],
    cta: { label: "Voir les services personnalités", href: "/personnalites/personal-branding" },
    image: "/images/branding.jpg",
    imageAlt: "Personnalité publique consultant ses statistiques — KEKELI Creative Agency",
    accent: "#0C0B09",
    chipText: "#FFFFFF",
  },
  {
    id: "artistes",
    eyebrow: "Artistes / Musiciens",
    title: "Propulsez votre carrière musicale",
    description:
      "Identité visuelle, clips et distribution pour porter votre musique à l'international.",
    tags: ["Branding", "Clips vidéo", "Distribution"],
    cta: { label: "Voir les services artistes", href: "/artistes/branding" },
    image: "/images/artiste.jpg",
    imageAlt: "Artiste musicien au piano — KEKELI Creative Agency",
    accent: "#8B5CF6",
    chipText: "#FFFFFF",
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

        <div className="grid md:grid-cols-3 gap-x-6 gap-y-14 md:gap-y-0">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={clsx(i === 1 && "md:mt-12")}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-0">
                <Image
                  src={block.image}
                  alt={block.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 30vw"
                />
              </div>

              {/* Overlapping label chip */}
              <div className="relative px-1">
                <span
                  className="relative -top-4 inline-block font-body text-[10px] font-bold uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full"
                  style={{ background: block.accent, color: block.chipText }}
                >
                  {block.eyebrow}
                </span>
              </div>

              {/* Texte */}
              <div className="px-1 -mt-1">
                <h3 className="font-display font-bold text-2xl text-text-primary leading-tight mb-2.5">
                  {block.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-text-muted mb-4">
                  {block.description}
                </p>

                <div className="flex flex-wrap gap-x-2 gap-y-1.5 mb-5">
                  {block.tags.map((t) => (
                    <span
                      key={t}
                      className="font-body text-[11px] text-text-secondary border border-border rounded-full px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={block.cta.href}
                  className="inline-flex items-center gap-2 font-body text-sm font-semibold transition-all duration-200 hover:gap-3.5"
                  style={{ color: block.accent }}
                >
                  {block.cta.label}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
