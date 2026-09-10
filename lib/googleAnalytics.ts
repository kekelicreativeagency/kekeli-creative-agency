import { BetaAnalyticsDataClient } from "@google-analytics/data";

let _client: BetaAnalyticsDataClient | null = null;

/** True si les 3 variables d'environnement nécessaires sont présentes. */
export function isGaConfigured(): boolean {
  return Boolean(
    process.env.GA_PROPERTY_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  );
}

export function getAnalyticsClient(): BetaAnalyticsDataClient {
  if (!_client) {
    _client = new BetaAnalyticsDataClient({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // Vercel stocke les retours à la ligne comme "\n" littéral dans les env vars
        private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
    });
  }
  return _client;
}

export function getGaProperty(): string {
  const id = process.env.GA_PROPERTY_ID!;
  return `properties/${id}`;
}
