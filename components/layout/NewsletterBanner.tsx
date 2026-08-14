import NewsletterForm from "@/components/newsletter/NewsletterForm";

export default function NewsletterBanner() {
  return (
    <section className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border border-gold/25 bg-gold/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="font-body text-[10px] font-semibold tracking-[0.18em] uppercase text-gold-dark">Newsletter</span>
          </div>
          <h2 className="font-body font-extrabold text-2xl text-text-primary mb-3 tracking-tight">
            Restez dans la lumière
          </h2>
          <p className="font-body text-sm leading-relaxed text-text-muted">
            Conseils marketing, tendances digitales et ressources exclusives pour artistes, entrepreneurs et personnalités au Sénégal — dans votre boîte mail chaque semaine.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
