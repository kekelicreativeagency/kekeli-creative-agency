"use client";

import { Check } from "lucide-react";
import FadeIn, { FadeInStagger, FadeInItem } from "@/components/animations/FadeIn";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";
import ServicesShowcase from "@/components/services/ServicesShowcase";
import { useT } from "@/hooks/useT";

export default function ServicesContent() {
  const tr = useT();
  const s = tr.pages.services;

  const plans = [
    { name: s.starterLabel, price: s.starterPrice, currency: s.starterCurrency, desc: s.starterDesc, features: s.starterFeatures as unknown as string[], cta: s.startBtn,     highlight: false },
    { name: s.proLabel,     price: s.proPrice,     currency: s.starterCurrency, desc: s.proDesc,     features: s.proFeatures     as unknown as string[], cta: s.chooseProBtn, highlight: true  },
    { name: s.customLabel,  price: s.customPrice,  currency: "",                desc: s.customDesc,  features: s.customFeatures  as unknown as string[], cta: s.contactBtn,   highlight: false },
  ];

  return (
    <>
      <ServicesShowcase />

      {/* PRICING */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(160deg, #FBF6EC 0%, #F5EDD8 50%, #FAF4E8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" className="text-center mb-14">
            <SectionHeader
              centered
              eyebrow={s.pricingTarifs}
              title={<>{s.pricingTitle1}<br /><em className="text-gold not-italic">{s.pricingTitleHL}</em></>}
              subtitle={s.pricingSubtitle}
            />
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <FadeInItem key={plan.name}>
                <div className={`relative flex flex-col h-full rounded-2xl border-2 p-8 ${plan.highlight ? "border-gold bg-bg-primary [box-shadow:var(--shadow-gold)]" : "border-border bg-bg-primary [box-shadow:var(--shadow-sm)]"}`}>
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="gold">{s.recommended}</Badge>
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-semibold text-text-primary mb-2">{plan.name}</h3>
                    <p className="font-body text-sm text-text-muted mb-4">{plan.desc}</p>
                    <p className="font-body font-semibold text-text-primary">
                      {plan.price}{" "}
                      {plan.currency && <span className="text-sm font-normal text-text-muted">{plan.currency}</span>}
                    </p>
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className="text-gold mt-0.5 shrink-0" />
                        <span className="font-body text-sm text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={plan.highlight ? "gold" : "outline-gold"} size="md" className="w-full justify-center">
                    {plan.cta}
                  </Button>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>

          <FadeIn delay={0.4} className="text-center mt-10">
            <p className="font-body text-sm text-text-muted">
              {s.customCta}{" "}
              <Link href="/contact" className="text-gold hover:text-gold-dark transition-colors font-medium">
                {s.customCtaLink}
              </Link>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
