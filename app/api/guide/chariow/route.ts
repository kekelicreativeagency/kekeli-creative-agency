import { NextRequest, NextResponse } from "next/server";

const CHARIOW_API = "https://api.chariow.com/v1";

const PRODUCT_IDS: Record<"artiste" | "entreprise", string | null> = {
  artiste:    "prd_sat6sqqy",
  entreprise: null, // à renseigner quand le guide entrepreneur est publié sur Chariow
};

export async function POST(req: NextRequest) {
  try {
    const { type, email, firstName, lastName, phone } = await req.json() as {
      type: "artiste" | "entreprise";
      email: string;
      firstName: string;
      lastName: string;
      phone?: string;
    };

    if (!type || !email || !firstName || !lastName) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const productId = PRODUCT_IDS[type];
    if (!productId) {
      return NextResponse.json({ error: "Ce guide n'est pas encore disponible à l'achat." }, { status: 400 });
    }

    const apiKey = process.env.CHARIOW_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
    }

    const body: Record<string, unknown> = {
      product_id:   productId,
      email,
      first_name:   firstName,
      last_name:    lastName,
      redirect_url: "https://kekelicreativeagency.com?achat=succes",
    };

    if (phone) {
      body.phone = { number: phone, country_code: "SN" };
    }

    const res = await fetch(`${CHARIOW_API}/checkout`, {
      method: "POST",
      headers: {
        Authorization:  `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json() as {
      data?: { payment?: { checkout_url?: string }; step?: string };
      message?: string;
      errors?: Record<string, string[]>;
    };

    if (!res.ok) {
      const msg = data.message ?? "Erreur lors de la création du paiement.";
      return NextResponse.json({ error: msg }, { status: res.status });
    }

    const checkoutUrl = data.data?.payment?.checkout_url;

    if (!checkoutUrl) {
      if (data.data?.step === "already_purchased") {
        return NextResponse.json({ error: "Vous avez déjà acheté ce guide." }, { status: 409 });
      }
      return NextResponse.json({ error: "Lien de paiement introuvable." }, { status: 500 });
    }

    return NextResponse.json({ checkout_url: checkoutUrl });
  } catch {
    return NextResponse.json({ error: "Erreur serveur inattendue." }, { status: 500 });
  }
}
