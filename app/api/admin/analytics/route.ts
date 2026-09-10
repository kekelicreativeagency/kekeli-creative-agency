import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { getAnalyticsClient, getGaProperty, isGaConfigured } from "@/lib/googleAnalytics";

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Non autorisé" }, { status: 401 });

  if (!isGaConfigured()) {
    return NextResponse.json(
      { error: "not_configured", message: "Google Analytics n'est pas encore connecté à l'admin." },
      { status: 501 },
    );
  }

  try {
    const client = getAnalyticsClient();
    const property = getGaProperty();

    const [realtimeRes, totalsRes, dailyRes, pagesRes, channelsRes] = await Promise.all([
      client.runRealtimeReport({
        property,
        metrics: [{ name: "activeUsers" }],
      }),
      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        metrics: [
          { name: "activeUsers" },
          { name: "sessions" },
          { name: "screenPageViews" },
          { name: "averageSessionDuration" },
        ],
      }),
      client.runReport({
        property,
        dateRanges: [{ startDate: "13daysAgo", endDate: "today" }],
        dimensions: [{ name: "date" }],
        metrics: [{ name: "activeUsers" }],
        orderBys: [{ dimension: { dimensionName: "date" } }],
      }),
      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "pagePath" }],
        metrics: [{ name: "screenPageViews" }],
        orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
        limit: 6,
      }),
      client.runReport({
        property,
        dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
        dimensions: [{ name: "sessionDefaultChannelGroup" }],
        metrics: [{ name: "sessions" }],
        orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 6,
      }),
    ]);

    const realtimeUsers = Number(realtimeRes[0].rows?.[0]?.metricValues?.[0]?.value ?? 0);

    const totalsRow = totalsRes[0].rows?.[0]?.metricValues ?? [];
    const totals = {
      users: Number(totalsRow[0]?.value ?? 0),
      sessions: Number(totalsRow[1]?.value ?? 0),
      pageviews: Number(totalsRow[2]?.value ?? 0),
      avgSessionSeconds: Math.round(Number(totalsRow[3]?.value ?? 0)),
    };

    const daily = (dailyRes[0].rows ?? []).map((row) => {
      const raw = row.dimensionValues?.[0]?.value ?? ""; // "YYYYMMDD"
      return {
        date: `${raw.slice(6, 8)}/${raw.slice(4, 6)}`,
        users: Number(row.metricValues?.[0]?.value ?? 0),
      };
    });

    const topPages = (pagesRes[0].rows ?? []).map((row) => ({
      path: row.dimensionValues?.[0]?.value ?? "—",
      views: Number(row.metricValues?.[0]?.value ?? 0),
    }));

    const topChannels = (channelsRes[0].rows ?? []).map((row) => ({
      channel: row.dimensionValues?.[0]?.value ?? "—",
      sessions: Number(row.metricValues?.[0]?.value ?? 0),
    }));

    return NextResponse.json({ realtimeUsers, totals, daily, topPages, topChannels });
  } catch (err) {
    console.error("Google Analytics API error:", err);
    return NextResponse.json(
      { error: "fetch_failed", message: "Impossible de récupérer les données Google Analytics." },
      { status: 500 },
    );
  }
}
