"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const PROMO = {
  subtitle: "Offre limitée · du 22 septembre au 22 octobre",
  title: "Site web professionnel à 50.000 FCFA",
  cta: { label: "Profiter de l'offre", href: "/promo-site-web" },
  image: "/images/promo-site-web-flyer.jpg",
};

const SERVICES = [
  {
    id: "entreprises",
    kicker: "Entreprises & Institutions",
    title: "Une communication qui inspire confiance",
    description:
      "Sites web, campagnes et couverture d'événements pour PME, ONG et organismes internationaux.",
    cta: { label: "Voir les services entreprises", href: "/entreprises/branding" },
    image: "/images/promo-entreprises-kekelicom.png",
    imageAlt: "Visuel KEKELI Creative Agency, communication qui inspire confiance",
    accent: "#C8A84B",
    accentText: "#151008",
  },
  {
    id: "personnalites",
    kicker: "Personnalités Publiques",
    title: "Votre image est votre premier message",
    description:
      "Image digitale et personal branding pour dirigeants et représentants institutionnels.",
    cta: { label: "Voir les services personnalités", href: "/personnalites/personal-branding" },
    image: "/images/promo-personnalites-reseaux.png",
    imageAlt: "Confiez-nous vos réseaux sociaux, KEKELI Creative Agency",
    accent: "#C8A84B",
    accentText: "#151008",
  },
  {
    id: "artistes",
    kicker: "Artistes / Musiciens",
    title: "Propulsez votre carrière musicale",
    description:
      "Identité visuelle, clips et distribution pour porter votre musique à l'international.",
    cta: { label: "Voir les services artistes", href: "/artistes/branding" },
    image: "/images/promo-artistes-branding.png",
    imageAlt: "Branding Artiste, KEKELI Creative Agency",
    accent: "#8B5CF6",
    accentText: "#FFFFFF",
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <Link
            href={PROMO.cta.href}
            className="group relative flex items-center gap-5 sm:gap-6 rounded-2xl overflow-hidden p-5 sm:p-7"
            style={{ background: "linear-gradient(135deg, #08060F 0%, #130A28 45%, #1C0A40 100%)" }}
          >
            <div className="relative shrink-0 w-16 h-16 sm:w-24 sm:h-24 rounded-xl overflow-hidden">
              <Image
                src={PROMO.image}
                alt="Promotion site web KEKELI Creative Agency"
                fill
                className="object-cover object-top"
                sizes="100px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p
                className="font-body text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.1em] mb-1.5"
                style={{ color: "#C8A84B" }}
              >
                {PROMO.subtitle}
              </p>
              <h3 className="font-display font-bold text-base sm:text-2xl text-white leading-tight truncate sm:whitespace-normal">
                {PROMO.title}
              </h3>
            </div>
            <span
              className="inline-flex items-center gap-1.5 sm:gap-2 font-body text-xs sm:text-sm font-bold px-3.5 py-2 sm:px-5 sm:py-3 rounded-full shrink-0 transition-all duration-200 group-hover:gap-2.5 sm:group-hover:gap-3.5"
              style={{ background: "linear-gradient(135deg, #C8A84B, #E8C96A)", color: "#151008" }}
            >
              <span className="hidden sm:inline">{PROMO.cta.label}</span>
              <ArrowRight size={14} />
            </span>
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={i === 2 ? "sm:col-span-2 sm:max-w-md sm:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0" : ""}
            >
              <Link href={service.cta.href} className="group block">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  />
                  <span
                    className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 font-body text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all duration-200 group-hover:gap-3"
                    style={{ background: service.accent, color: service.accentText }}
                  >
                    {service.cta.label}
                    <ArrowRight size={14} />
                  </span>
                </div>
                <div className="mt-5">
                  <span
                    className="inline-block font-body text-[11px] font-bold uppercase tracking-[0.08em] mb-3 px-2.5 py-1 rounded-full"
                    style={{ background: service.accent, color: service.accentText }}
                  >
                    {service.kicker}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-text-primary leading-tight mb-2 transition-colors group-hover:opacity-80">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
