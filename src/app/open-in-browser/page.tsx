"use client";

/**
 * /open-in-browser/page.tsx
 * Page interstitielle pour les visiteurs arrivant via TikTok, Instagram ou Facebook.
 * Explique avec bienveillance comment ouvrir la page dans le navigateur système.
 * Aucune boucle possible grâce au flag sessionStorage et ?direct=1.
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { detectInAppBrowserName } from "@/lib/browser-detect";
import { guideCover } from "@/lib/images";

export default function OpenInBrowserPage() {
  const router = useRouter();
  const [platformName, setPlatformName] = useState<string>("TikTok");

  useEffect(() => {
    const detected = detectInAppBrowserName();
    if (detected) {
      setPlatformName(detected);
    }
  }, []);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem("inapp_dismissed", "1");
    } catch {
      // ignore
    }
    router.push("/?direct=1");
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-cream text-neutral-900 selection:bg-brand/20">
      {/* ─── Arrière-plan avec aperçu flouté du produit ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        
        {/* Silhouette floutée du guide */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 filter blur-xl scale-95">
          <Image
            src={guideCover.src}
            alt=""
            width={500}
            height={700}
            className="object-contain max-h-[85vh]"
            priority
          />
        </div>
        
        {/* Voile protecteur translucide */}
        <div className="absolute inset-0 bg-cream/85 backdrop-blur-md" />
      </div>

      {/* ─── Flèche animée vers le haut à droite ─── */}
      <div
        className="fixed top-4 right-4 z-30 flex items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-wider text-brand bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-brand/10">
          Menu ici
        </span>
        <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-brand text-white shadow-lg animate-bounce">
          {/* Flèche orientée vers le haut droit ↗ */}
          <svg
            className="w-6 h-6 transform rotate-45"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>
      </div>

      {/* ─── Contenu Principal ─── */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-5 py-8 sm:py-12 flex-1 flex flex-col justify-center">
        {/* Header / Titre */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 text-brand text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Navigateur intégré détecté
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-tight">
            OUVRE LA PAGE DANS TON NAVIGATEUR
          </h1>

          <p className="text-base sm:text-lg font-medium text-brand">
            Une petite étape pour accéder correctement au guide 👇
          </p>
        </div>

        {/* Message d'explication */}
        <div className="bg-white/95 rounded-2xl p-6 sm:p-7 shadow-card border border-neutral-200/80 space-y-6">
          <div className="text-sm sm:text-base text-neutral-700 leading-relaxed border-b border-neutral-100 pb-4">
            <p className="font-medium text-neutral-900">
              Tu viens d’ouvrir cette page depuis <span className="text-brand font-semibold">{platformName}</span>.
            </p>
            <p className="text-neutral-500 text-sm mt-1">
              Pour continuer facilement :
            </p>
          </div>

          {/* 3 Étapes claires */}
          <div className="space-y-4">
            {/* Étape 1 */}
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-cream/70 border border-neutral-200/60">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center shadow-sm">
                1
              </span>
              <div className="text-sm sm:text-base text-neutral-800 pt-0.5 leading-snug">
                Appuie sur les{" "}
                <span className="inline-flex items-center gap-1 font-bold text-neutral-900 bg-white px-2 py-0.5 rounded border border-neutral-300 shadow-2xs">
                  3 points <span className="text-lg leading-none">⋮</span>
                </span>{" "}
                en haut à droite.
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-cream/70 border border-neutral-200/60">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center shadow-sm">
                2
              </span>
              <div className="text-sm sm:text-base text-neutral-800 pt-0.5 leading-snug">
                Choisis{" "}
                <strong className="text-brand font-semibold">
                  « Ouvrir dans le navigateur »
                </strong>{" "}
                ou l’option équivalente proposée sur ton téléphone.
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-cream/70 border border-neutral-200/60">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center shadow-sm">
                3
              </span>
              <div className="text-sm sm:text-base text-neutral-800 pt-0.5 leading-snug">
                La page du{" "}
                <strong className="text-neutral-900 font-semibold">
                  Guide Africain de Nutrition
                </strong>{" "}
                s’ouvrira alors dans ton navigateur habituel.
              </div>
            </div>
          </div>

          {/* C'est tout. ❤️ */}
          <div className="text-center pt-1">
            <p className="text-base font-semibold text-neutral-800">
              C’est tout. ❤️
            </p>
          </div>

          {/* Bouton de repli direct */}
          <div className="pt-2">
            <button
              onClick={handleDismiss}
              type="button"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md cursor-pointer"
            >
              <span>J’AI OUVERT DANS MON NAVIGATEUR</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Note informative discrète sous le bloc */}
        <p className="text-center text-xs text-neutral-500 mt-6 leading-relaxed max-w-sm mx-auto italic">
          *Cette page apparaît uniquement lorsque le lien est ouvert dans un navigateur intégré lorsque cela peut être détecté.*
        </p>
      </div>

      {/* Petit copyright rassurant en bas */}
      <footer className="relative z-10 py-4 text-center text-xs text-neutral-400">
        Guide Africain de Nutrition • Accès sécurisé
      </footer>
    </main>
  );
}
