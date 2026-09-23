"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Mail } from "lucide-react";

interface Props {
  accent: string;
  title?: string;
  subtitle?: string;
  onUnlock: (prenom: string, email: string) => Promise<void> | void;
}

export default function AuditEmailGate({
  accent,
  title = "Débloquez votre résultat complet",
  subtitle = "Recevez aussi une copie par email.",
  onUnlock,
}: Props) {
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prenom || !email) {
      setError("Merci de renseigner votre prénom et votre email.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await onUnlock(prenom, email);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#130A28] flex items-center justify-center py-16">
      <div className="max-w-md w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: `${accent}20` }}>
            <Mail size={24} style={{ color: accent }} />
          </div>
          <h2 className="font-display text-3xl text-white mb-2">{title}</h2>
          <p className="font-body text-white/45 text-sm">{subtitle}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Votre prénom"
            className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none transition-colors"
            style={{ borderColor: undefined }}
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="votre@email.com"
            className="w-full px-4 py-3 rounded-xl font-body text-sm text-white placeholder-white/20 bg-white/[0.06] border border-white/10 focus:outline-none transition-colors"
          />
          {error && <p className="text-red-400 text-sm font-body text-center">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-body font-semibold text-sm disabled:opacity-50 transition-all hover:opacity-90"
            style={{ background: accent, color: "#0C0B09" }}
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Un instant...
              </>
            ) : (
              <>
                Voir mon résultat <ArrowRight size={16} />
              </>
            )}
          </button>
          <p className="text-xs text-center text-white/30">Pas de spam, juste vos résultats.</p>
        </form>
      </div>
    </div>
  );
}
