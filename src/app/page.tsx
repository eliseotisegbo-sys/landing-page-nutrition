import type { Metadata } from "next";
import { InAppBrowserGuard } from "@/components/features/InAppBrowserGuard";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PlateMethodSection } from "@/components/sections/PlateMethodSection";
import { DishesCarousel } from "@/components/sections/DishesCarousel";
import { BookPreviewSection } from "@/components/sections/BookPreviewSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { WhatYouGetSection } from "@/components/sections/WhatYouGetSection";
import { DailyLifeSection } from "@/components/sections/DailyLifeSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhoIsItForSection } from "@/components/sections/WhoIsItForSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCta } from "@/components/sections/StickyMobileCta";
import { PRODUCT_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} — Manger mieux avec les aliments africains`,
  description:
    "Tu n’as pas besoin d’abandonner le riz, l’igname, le manioc ou le plantain. Une méthode simple pour composer ton assiette et équilibrer tes repas au quotidien.",
};

export default function HomePage() {
  return (
    <>
      {/* Indicateur de lecture discret tout en haut */}
      <ScrollProgress />

      {/* Détection in-app browser prudente (TikTok, Instagram, Facebook) */}
      <InAppBrowserGuard />

      <main className="min-h-screen">
        {/* 1. Hero — Première impression avec la couverture 3D du guide et portrait */}
        <Hero />

        {/* 2. Bandeau de confiance */}
        <TrustBanner />

        {/* 3. Et si le problème n'était pas ce que tu manges ? */}
        <ProblemSection />

        {/* 4. L'ancienne façon vs la nouvelle (avec photos réelles avant / après) */}
        <ComparisonSection />

        {/* 5. Une méthode simple pour ton assiette */}
        <PlateMethodSection />

        {/* 6. Regarde ce que tu peux déjà faire avec tes aliments (Carrousel tactile) */}
        <DishesCarousel />

        {/* 7. Feuillette les pages du guide (Aperçu horizontal des fiches) */}
        <BookPreviewSection />

        {/* 8. Ce que tu vas apprendre */}
        <LearnSection />

        {/* 9. Ce que tu reçois */}
        <WhatYouGetSection />

        {/* 10. Vie quotidienne : Famille, Manger dehors & Budget */}
        <DailyLifeSection />

        {/* 11. Comment ça marche & Ce n'est pas un régime compliqué */}
        <HowItWorksSection />

        {/* 12. À qui s'adresse ce guide & Ce qu'il n'est pas */}
        <WhoIsItForSection />

        {/* 13. Offre de lancement 4 900 FCFA avec livre 3D */}
        <OfferSection />

        {/* 14. Foire aux questions (FAQ accordéon animé) */}
        <FaqSection />

        {/* 15. CTA final */}
        <FinalCtaSection />

        {/* 16. Footer & Note de sécurité */}
        <Footer />
      </main>

      {/* CTA Sticky pour les smartphones */}
      <StickyMobileCta />
    </>
  );
}
