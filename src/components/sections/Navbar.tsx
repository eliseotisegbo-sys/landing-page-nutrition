"use client";

import { PRODUCT_URL, formatPrice } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      {/* Barre d'annonce supérieure subtile */}
      <div className="bg-brand-dark text-white text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <span>✨ Guide pratique numérique • Compatible 100% smartphone • Accès immédiat</span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo de marque éditorial */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-serif font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            G
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-neutral-900 text-sm sm:text-base tracking-tight block">
              Guide Africain de Nutrition
            </span>
            <span className="text-[10px] text-neutral-500 font-medium tracking-wider uppercase block">
              Mieux manger sans abandonner sa cuisine
            </span>
          </div>
        </a>

        {/* Liens de navigation desktop */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600">
          <a href="#methode" className="hover:text-brand transition-colors">La Méthode</a>
          <a href="#assiettes" className="hover:text-brand transition-colors">Nos Assiettes</a>
          <a href="#recettes" className="hover:text-brand transition-colors">Recettes</a>
          <a href="#quotidien" className="hover:text-brand transition-colors">Au Quotidien</a>
          <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
        </nav>

        {/* Bouton CTA d'action directe */}
        <div className="flex items-center gap-2">
          <Button
            href={PRODUCT_URL}
            external
            size="sm"
            variant="primary"
            pulse={false}
            className="text-xs sm:text-sm py-2 px-4 shadow-sm"
          >
            J&apos;organise mes repas →
          </Button>
        </div>
      </div>
    </header>
  );
}
