/**
 * config.ts
 * Source unique de vérité pour les constantes produit.
 * Toutes les valeurs proviennent de variables d'environnement NEXT_PUBLIC_*.
 * Aucun secret ici — ce fichier est visible côté client.
 */

export const PRODUCT_URL =
  process.env.NEXT_PUBLIC_PRODUCT_URL ??
  "https://gcwcqawc.mychariow.com/guide-africain-de-nutrition";

export const PRODUCT_PRICE = parseInt(
  process.env.NEXT_PUBLIC_PRODUCT_PRICE ?? "4900",
  10
);

export const PRODUCT_NAME =
  process.env.NEXT_PUBLIC_PRODUCT_NAME ?? "Guide Africain de Nutrition";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://guide-africain-nutrition.vercel.app";

/** Prix formaté pour l'affichage — ex. : "4 900 FCFA" */
export function formatPrice(price: number = PRODUCT_PRICE): string {
  return `${price.toLocaleString("fr-FR")} FCFA`;
}
