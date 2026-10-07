"use client";

/**
 * InAppBrowserGuard.tsx
 * Composant client — détecte le navigateur intégré et redirige si nécessaire.
 *
 * Règles :
 * - Exécuté une seule fois au montage côté client.
 * - Si UA ambigu → pas de redirection (ne bloquer aucun visiteur légitime).
 * - Jamais de boucle :
 *   1. Vérification qu'on n'est pas déjà sur /open-in-browser
 *   2. Prise en compte du paramètre d'URL ?direct=1
 *   3. Prise en compte de la clé sessionStorage 'inapp_dismissed'
 * - Rendu nul — pas d'UI.
 */

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isInAppBrowser } from "@/lib/browser-detect";

export function InAppBrowserGuard() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Si on est déjà sur la page interstitielle, ne rien faire
    if (pathname === "/open-in-browser") return;

    try {
      // Si l'utilisateur a déjà cliqué "J'ai ouvert dans mon navigateur"
      const isDismissed = sessionStorage.getItem("inapp_dismissed") === "1";
      if (isDismissed) return;

      // Si le paramètre direct=1 est présent dans l'URL
      if (typeof window !== "undefined" && window.location.search.includes("direct=1")) {
        sessionStorage.setItem("inapp_dismissed", "1");
        return;
      }

      // Détection prudente : uniquement si in-app avéré
      if (isInAppBrowser()) {
        router.replace("/open-in-browser");
      }
    } catch {
      // En cas d'erreur de stockage ou d'environnement restreint, ne rien bloquer
    }
  }, [pathname, router]);

  return null;
}
