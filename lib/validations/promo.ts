import { z } from "zod";

export const promoSiteWebSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  telephone: z.string().min(6, "Numéro de téléphone invalide"),
  email: z.string().email("Adresse email invalide"),
  entreprise: z.string().min(2, "Le nom de l'entreprise est requis"),
  activite: z.string().min(3, "Merci de décrire brièvement votre activité"),
  typeSite: z.enum(["vitrine", "ecommerce", "indecis"]),
  reseaux: z.string().optional(),
  message: z.string().optional(),
});

export type PromoSiteWebData = z.infer<typeof promoSiteWebSchema>;
