"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const TYPE_SITE = [
  { value: "vitrine", label: "Site vitrine (présenter mon activité)" },
  { value: "ecommerce", label: "Boutique en ligne (vendre mes produits)" },
  { value: "indecis", label: "Je ne sais pas encore" },
];

export default function PromoSiteWebForm() {
  const [form, setForm] = useState({
    nom: "", telephone: "", email: "", entreprise: "",
    activite: "", typeSite: "", reseaux: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.telephone || !form.email || !form.entreprise || !form.activite || !form.typeSite) {
      setError("Merci de remplir tous les champs obligatoires (*).");
      return;
    }
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/promo-site-web", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Une erreur est survenue. Réessayez ou écrivez-nous sur WhatsApp.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} className="text-emerald-400" />
        </div>
        <h3 className="font-display text-3xl text-white mb-3">Demande envoyée !</h3>
        <p className="font-body text-white/50 max-w-md mx-auto">
          On vous contacte sous 24h par téléphone ou WhatsApp pour démarrer votre site. Vérifiez aussi vos emails.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Nom complet *</label>
          <input
            value={form.nom}
            onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))}
            placeholder="Ex : Awa Diallo"
            className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
        <div>
          <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Téléphone / WhatsApp *</label>
          <input
            value={form.telephone}
            onChange={(e) => setForm((f) => ({ ...f, telephone: e.target.value }))}
            placeholder="Ex : 77 123 45 67"
            className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="vous@exemple.com"
          className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Nom de l&apos;entreprise / activité *</label>
        <input
          value={form.entreprise}
          onChange={(e) => setForm((f) => ({ ...f, entreprise: e.target.value }))}
          placeholder="Ex : Salon Beauté Awa"
          className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Que fait votre entreprise ? *</label>
        <textarea
          rows={3}
          value={form.activite}
          onChange={(e) => setForm((f) => ({ ...f, activite: e.target.value }))}
          placeholder="Ex : Salon de coiffure et esthétique pour femmes à Dakar, spécialisé dans les tresses et soins capillaires."
          className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors resize-none"
        />
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Type de site souhaité *</label>
        <select
          value={form.typeSite}
          onChange={(e) => setForm((f) => ({ ...f, typeSite: e.target.value }))}
          className="w-full px-4 py-3 rounded-xl font-body text-sm text-white bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors"
        >
          <option value="" className="bg-[#0C0B09]">Choisir...</option>
          {TYPE_SITE.map((t) => <option key={t.value} value={t.value} className="bg-[#0C0B09]">{t.label}</option>)}
        </select>
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Réseaux sociaux ou site actuel (optionnel)</label>
        <input
          value={form.reseaux}
          onChange={(e) => setForm((f) => ({ ...f, reseaux: e.target.value }))}
          placeholder="Ex : @salon_awa sur Instagram"
          className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>

      <div>
        <label className="block font-body text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Autre information utile (optionnel)</label>
        <textarea
          rows={2}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Précisions, disponibilités pour l'appel, etc."
          className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none focus:border-gold/50 transition-colors resize-none"
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20">
          <AlertCircle size={16} className="text-red-400 shrink-0" />
          <p className="font-body text-sm text-red-300">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-body text-sm font-bold uppercase tracking-wider bg-gold text-[#0C0B09] hover:bg-gold-light transition-colors disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Envoi en cours...
          </>
        ) : (
          <>
            Je réserve mon site à 50 000 F <Send size={16} />
          </>
        )}
      </button>
      <p className="font-body text-xs text-white/30 text-center">
        Offre valable du 22 septembre au 22 octobre · Places limitées
      </p>
    </form>
  );
}
