import type { Metadata } from "next";
import { InAppBrowserGuard } from "@/components/features/InAppBrowserGuard";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBanner } from "@/components/sections/TrustBanner";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { PlateMethodSection } from "@/components/sections/PlateMethodSection";
import { DishesCarousel } from "@/components/sections/DishesCarousel";
import { RecipesSection } from "@/components/sections/RecipesSection";
import { LearnSection } from "@/components/sections/LearnSection";
import { DailyLifeSection } from "@/components/sections/DailyLifeSection";
import { BookPreviewSection } from "@/components/sections/BookPreviewSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhoIsItForSection } from "@/components/sections/WhoIsItForSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCta } from "@/components/sections/StickyMobileCta";
import { PRODUCT_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `${PRODUCT_NAME} — Manger mieux sans abandonner sa cuisine`,
  description:
    "Tu n’as pas besoin d’abandonner le riz, l’igname, le manioc ou le plantain. Une méthode simple, des recettes locales et des repères pratiques pour arrêter d’improviser tes repas.",
};

export default function HomePage() {
  return (
    <>
      {/* Indicateur de lecture discret tout en haut */}
      <ScrollProgress />

      {/* Détection in-app browser prudente (TikTok, Instagram, Facebook) */}
      <InAppBrowserGuard />

      {/* Header / Navbar inspiré du design de référence */}
      <Navbar />

      <main className="min-h-screen">
        {/* 1. Hero — Accroche principale, fond culinaire et livre 3D debout dynamique */}
        <Hero />

        {/* 2. Bandeau de confiance (4 piliers) */}
        <TrustBanner />

        {/* 3. Ton problème n'est pas forcément ce que tu manges */}
        <ProblemSection />

        {/* 4. Arrête de lutter contre ta cuisine (Avant vs Avec le guide avec photos réelles) */}
        <ComparisonSection />

        {/* 5. Voici le principe qui change tout (L'assiette 1/2 - 1/4 - 1/4) */}
        <PlateMethodSection />

        {/* 6. Regarde tes plats autrement (Carrousel dynamique 1s avec pause) */}
        <DishesCarousel />

        {/* 7. Des recettes que tu peux réellement utiliser (Filtres & fiches concrètes) */}
        <RecipesSection />

        {/* 8. Tu vas enfin savoir quoi faire avec tes repas (Les 6 modules concrets) */}
        <LearnSection />

        {/* 9. La vraie vie : Maquis/Dehors, Budget serré & Famille */}
        <DailyLifeSection />

        {/* 10. Feuillette le guide avant de l'acheter (Aperçu du livre 3D et fiches) */}
        <BookPreviewSection />

        {/* 11. Tout est pensé pour être simple (6 étapes : Observe -> Continue) */}
        <HowItWorksSection />

        {/* 12. Ce guide est fait pour toi si... / Ce guide n'est pas un miracle */}
        <WhoIsItForSection />

        {/* 13. Offre officielle 4 900 FCFA avec livre 3D */}
        <OfferSection />

        {/* 14. Questions fréquentes (FAQ accordéon) */}
        <FaqSection />

        {/* 15. CTA Final : Tu sais maintenant ce qui te reste à faire */}
        <FinalCtaSection />

        {/* 16. Footer & Note de sécurité */}
        <Footer />
      </main>

      {/* CTA Sticky pour les smartphones */}
      <StickyMobileCta />
    </>
  );
}
