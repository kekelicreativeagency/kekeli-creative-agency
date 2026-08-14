import { getSupabase } from "@/lib/supabase";

interface CountsInput {
  leads: { type: string; status: string }[];
  clients: { status: string }[];
  projects: { status: string }[];
  conversations: { status?: string }[];
  newsletter: { unsubscribed_at: string | null }[];
  blogPosts: { published: boolean }[];
}

export function computeSidebarCounts(data: CountsInput) {
  const { leads, clients, projects, conversations, newsletter, blogPosts } = data;

  const newLeads        = leads.filter((l) => l.status === "new").length;
  const artisteLeads    = leads.filter((l) => l.type === "artiste").length;
  const newArtiste      = leads.filter((l) => l.type === "artiste" && l.status === "new").length;
  const entrepriseLeads = leads.filter((l) => l.type === "entreprise").length;
  const newEntreprise   = leads.filter((l) => l.type === "entreprise" && l.status === "new").length;
  const guideTotal      = leads.filter((l) => l.type === "guide_download").length;
  const pendingClients  = clients.filter((c) => c.status === "pending").length;
  const activeProjects  = projects.filter((p) => p.status === "en_cours").length;
  const activeSubscribers = newsletter.filter((s) => !s.unsubscribed_at).length;

  return {
    leads: leads.length, newLeads,
    artistes: artisteLeads, newArtistes: newArtiste,
    entreprises: entrepriseLeads, newEntreprises: newEntreprise,
    clients: clients.length, pending: pendingClients,
    projects: projects.length, active: activeProjects,
    conversations: conversations.length,
    newsletter: activeSubscribers,
    blog: blogPosts.filter((p) => p.published).length,
    guides: guideTotal,
  };
}

/** Lightweight fetch for pages that only need the sidebar counts, not the full datasets. */
export async function getSidebarCounts() {
  const db = getSupabase();
  const [leadsRes, convsRes, clientsRes, projectsRes, newsletterRes, blogRes] = await Promise.all([
    db.from("leads").select("type, status"),
    db.from("conversations").select("status"),
    db.from("client_profiles").select("status"),
    db.from("projects").select("status"),
    db.from("newsletter_subscribers").select("unsubscribed_at"),
    db.from("blog_posts").select("published"),
  ]);

  return computeSidebarCounts({
    leads: leadsRes.data ?? [],
    clients: clientsRes.data ?? [],
    projects: projectsRes.data ?? [],
    conversations: convsRes.data ?? [],
    newsletter: newsletterRes.data ?? [],
    blogPosts: blogRes.data ?? [],
  });
}
