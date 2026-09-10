"use client";

import { useEffect, useState } from "react";
import { Activity, Users, MousePointerClick, Eye, Clock, ExternalLink, RefreshCw } from "lucide-react";

interface AnalyticsData {
  realtimeUsers: number;
  totals: { users: number; sessions: number; pageviews: number; avgSessionSeconds: number };
  daily: { date: string; users: number }[];
  topPages: { path: string; views: number }[];
  topChannels: { channel: string; sessions: number }[];
}

const CHANNEL_LABELS: Record<string, string> = {
  "Direct": "Direct",
  "Organic Search": "Recherche organique",
  "Organic Social": "Réseaux sociaux",
  "Paid Search": "Publicité (recherche)",
  "Paid Social": "Publicité (réseaux)",
  "Referral": "Sites référents",
  "Email": "Email",
  "Unassigned": "Non attribué",
};

function StatCard({
  icon, label, value, color = "#C8A84B",
}: { icon: React.ReactNode; label: string; value: string | number; color?: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3" style={{ border: "1px solid #E7E5E4", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${color}15` }}>
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <p className="font-display text-3xl font-bold text-[#0C0B09]">{value}</p>
        <p className="font-body text-sm text-[#78716C] mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}s`;
}

export default function AnalyticsPanel() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notConfigured, setNotConfigured] = useState(false);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/analytics");
      const json = await res.json();
      if (res.status === 501) {
        setNotConfigured(true);
      } else if (!res.ok) {
        setError(json.message ?? "Une erreur est survenue.");
      } else {
        setData(json);
      }
    } catch {
      setError("Impossible de contacter le serveur.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- chargement initial des données, pattern standard
    load();
    const interval = setInterval(load, 60_000); // rafraîchit toutes les minutes
    return () => clearInterval(interval);
  }, []);

  if (notConfigured) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center" style={{ border: "1px solid #E7E5E4" }}>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "#C8A84B15" }}>
          <Activity size={20} style={{ color: "#C8A84B" }} />
        </div>
        <h3 className="font-display text-lg text-[#0C0B09] mb-2">Google Analytics n&apos;est pas encore connecté</h3>
        <p className="font-body text-sm text-[#78716C] max-w-md mx-auto mb-4">
          Pour afficher les visiteurs ici, il faut ajouter 3 variables d&apos;environnement sur Vercel :
          <code className="block mt-2 text-xs bg-[#F5F2EB] rounded-lg p-3 text-left">
            GA_PROPERTY_ID<br />
            GOOGLE_SERVICE_ACCOUNT_EMAIL<br />
            GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
          </code>
        </p>
        <a
          href="https://analytics.google.com"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors"
        >
          Voir sur Google Analytics <ExternalLink size={14} />
        </a>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center" style={{ border: "1px solid #E7E5E4" }}>
        <p className="font-body text-sm text-red-500 mb-3">{error}</p>
        <button onClick={load} className="inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold-light">
          <RefreshCw size={14} /> Réessayer
        </button>
      </div>
    );
  }

  if (loading && !data) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-2xl p-5 h-28 animate-pulse" style={{ border: "1px solid #E7E5E4" }} />
        ))}
      </div>
    );
  }

  if (!data) return null;

  const maxDaily = Math.max(1, ...data.daily.map((d) => d.users));

  return (
    <div className="space-y-8">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <StatCard icon={<Activity size={16} />} label="Actifs maintenant" value={data.realtimeUsers} color="#22C55E" />
        <StatCard icon={<Users size={16} />} label="Visiteurs (30j)" value={data.totals.users} color="#8B5CF6" />
        <StatCard icon={<MousePointerClick size={16} />} label="Sessions (30j)" value={data.totals.sessions} color="#C8A84B" />
        <StatCard icon={<Eye size={16} />} label="Pages vues (30j)" value={data.totals.pageviews} color="#8B5CF6" />
        <StatCard icon={<Clock size={16} />} label="Durée moy. session" value={formatDuration(data.totals.avgSessionSeconds)} color="#C8A84B" />
      </div>

      {/* Daily trend */}
      <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #E7E5E4" }}>
        <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-[#A8A29E] mb-5">Visiteurs — 14 derniers jours</p>
        <div className="flex items-end gap-2 h-32">
          {data.daily.map((d) => (
            <div key={d.date} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full rounded-t-md transition-all" style={{
                height: `${Math.max(4, (d.users / maxDaily) * 100)}%`,
                background: "linear-gradient(180deg, #C8A84B 0%, #C8A84B80 100%)",
              }} title={`${d.users} visiteurs`} />
              <span className="font-body text-[10px] text-[#A8A29E]">{d.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top pages + channels */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #E7E5E4" }}>
          <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-[#A8A29E] mb-4">Pages les plus visitées (30j)</p>
          <div className="space-y-2">
            {data.topPages.length === 0 && <p className="font-body text-sm text-[#A8A29E]">Aucune donnée pour le moment.</p>}
            {data.topPages.map((p) => (
              <div key={p.path} className="flex items-center justify-between gap-3 py-1.5 border-b last:border-0" style={{ borderColor: "#F5F2EB" }}>
                <span className="font-body text-sm text-[#0C0B09] truncate">{p.path}</span>
                <span className="font-body text-sm font-semibold text-[#78716C] shrink-0">{p.views}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6" style={{ border: "1px solid #E7E5E4" }}>
          <p className="font-body text-xs font-bold uppercase tracking-[0.15em] text-[#A8A29E] mb-4">Sources de trafic (30j)</p>
          <div className="space-y-2">
            {data.topChannels.length === 0 && <p className="font-body text-sm text-[#A8A29E]">Aucune donnée pour le moment.</p>}
            {data.topChannels.map((c) => (
              <div key={c.channel} className="flex items-center justify-between gap-3 py-1.5 border-b last:border-0" style={{ borderColor: "#F5F2EB" }}>
                <span className="font-body text-sm text-[#0C0B09]">{CHANNEL_LABELS[c.channel] ?? c.channel}</span>
                <span className="font-body text-sm font-semibold text-[#78716C] shrink-0">{c.sessions}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
