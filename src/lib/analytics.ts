/**
 * analytics.ts
 * Fonctions d'événements analytics — stubs découplés.
 * La landing fonctionne sans aucun SDK externe.
 * Pour connecter un provider : implémenter `sendEvent` ci-dessous.
 */

type EventName =
  | "landing_view"
  | "hero_cta_click"
  | "offer_cta_click"
  | "faq_open"
  | "guide_preview_view";

interface EventPayload {
  label?: string;
  value?: string | number;
  [key: string]: unknown;
}

/**
 * Envoie un événement au provider analytics configuré.
 * Remplacer le corps de cette fonction pour brancher Plausible, PostHog, etc.
 */
function sendEvent(name: EventName, payload?: EventPayload): void {
  // Développement : log console visible
  if (process.env.NODE_ENV === "development") {
    console.log(`[analytics] ${name}`, payload ?? {});
  }

  // Production : brancher ici le provider choisi
  // Exemple Plausible : window.plausible?.(name, { props: payload })
}

// ─── Événements exposés ─────────────────────────────────────

export function trackLandingView(): void {
  sendEvent("landing_view");
}

export function trackHeroCtaClick(): void {
  sendEvent("hero_cta_click");
}

export function trackOfferCtaClick(): void {
  sendEvent("offer_cta_click");
}

export function trackFaqOpen(question: string): void {
  sendEvent("faq_open", { label: question });
}

export function trackGuidePreviewView(): void {
  sendEvent("guide_preview_view");
}
