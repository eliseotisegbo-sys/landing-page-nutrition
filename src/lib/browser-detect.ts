/**
 * browser-detect.ts
 * Détection des navigateurs intégrés (in-app browsers).
 *
 * Règles :
 * - Si la détection est incertaine → false (afficher la landing normale).
 * - Jamais de boucle de redirection.
 * - Utilisable uniquement côté client (window.navigator).
 */

const IN_APP_PATTERNS = [
  "TikTok",
  "musical_ly",  // ancien user agent TikTok
  "FBAN",        // Facebook App
  "FBAV",        // Facebook App version
  "FB_IAB",      // Facebook In-App Browser
  "Instagram",
  "Line/",
] as const;

/**
 * Retourne true si le user agent correspond à un navigateur intégré connu.
 * Doit être appelé uniquement côté client (useEffect ou composant client).
 */
export function isInAppBrowser(userAgent?: string): boolean {
  const ua = userAgent ?? (typeof navigator !== "undefined" ? navigator.userAgent : "");
  if (!ua) return false;
  return IN_APP_PATTERNS.some((pattern) => ua.includes(pattern));
}

/**
 * Retourne le nom du navigateur intégré détecté, ou null.
 */
export function detectInAppBrowserName(userAgent?: string): string | null {
  const ua = userAgent ?? (typeof navigator !== "undefined" ? navigator.userAgent : "");
  if (!ua) return null;
  if (ua.includes("TikTok") || ua.includes("musical_ly")) return "TikTok";
  if (ua.includes("FBAN") || ua.includes("FBAV") || ua.includes("FB_IAB")) return "Facebook";
  if (ua.includes("Instagram")) return "Instagram";
  if (ua.includes("Line/")) return "LINE";
  return null;
}
