"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

type MealCategory = "all" | "breakfast" | "lunch" | "dinner" | "snack";

interface RecipeItem {
  name: string;
  category: "breakfast" | "lunch" | "dinner" | "snack";
  categoryLabel: string;
  tag: string;
  prepTime: string;
  description: string;
}

const recipes: RecipeItem[] = [
  {
    name: "Bouillie de fonio au lait de coco léger",
    category: "breakfast",
    categoryLabel: "Petit-déjeuner",
    tag: "DIGESTION DOUCE",
    prepTime: "15 min",
    description: "Une céréale ancestrale africaine qui cale durablement, avec fruits frais de saison.",
  },
  {
    name: "Omelette aux légumes du marché",
    category: "breakfast",
    categoryLabel: "Petit-déjeuner",
    tag: "PROTÉINES & FIBRES",
    prepTime: "10 min",
    description: "Œufs battus aux tomates, poivrons et oignons, accompagnés d'une tranche de patate douce.",
  },
  {
    name: "Fonio, sauce gombo et poisson grillé",
    category: "lunch",
    categoryLabel: "Déjeuner",
    tag: "REPAS COMPLET",
    prepTime: "25 min",
    description: "Gombo saisi rapidement sans excès de glu, poisson grillé peu huileux et fonio vapeur.",
  },
  {
    name: "Foutou d’igname et sauce claire aux légumes",
    category: "lunch",
    categoryLabel: "Déjeuner",
    tag: "TRADITION ADAPTÉE",
    prepTime: "30 min",
    description: "Portion d'igname mesurée à la taille d'un poing, sauce claire enrichie de feuilles d'amarante.",
  },
  {
    name: "Attiéké, poulet grillé et légumes vapeur",
    category: "lunch",
    categoryLabel: "Déjeuner",
    tag: "CLASSIQUE RÉÉQUILIBRÉ",
    prepTime: "20 min",
    description: "Poulet grillé sans peau, attiéké mesuré et portion généreuse de chou et carottes vapeur.",
  },
  {
    name: "Niébé mijoté au poisson",
    category: "lunch",
    categoryLabel: "Déjeuner",
    tag: "ÉCONOMIQUE & RASSASIANT",
    prepTime: "30 min",
    description: "Haricots niébé mijotés à la tomate et aux herbes, accompagnés de poisson et salade fraîche.",
  },
  {
    name: "Poulet aux légumes et patate douce",
    category: "lunch",
    categoryLabel: "Déjeuner",
    tag: "SAVEUR & ÉNERGIE",
    prepTime: "30 min",
    description: "Patate douce rôtie, mijoté de poulet à l'ail, gingembre, chou et poivrons colorés.",
  },
  {
    name: "Sauce gombo légère et manioc bouilli",
    category: "dinner",
    categoryLabel: "Dîner léger",
    tag: "DIGESTION FACILE",
    prepTime: "20 min",
    description: "Manioc bouilli à l'eau sans friture, sauce gombo riche en légumes avec crevettes ou poisson.",
  },
  {
    name: "Soupe de légumes locaux",
    category: "dinner",
    categoryLabel: "Dîner léger",
    tag: "LÉGER & DÉTOX",
    prepTime: "20 min",
    description: "Feuilles vertes bien cuites, carottes, oignons et poisson fumé dans un bouillon savoureux.",
  },
  {
    name: "Haricots aux légumes de saison",
    category: "dinner",
    categoryLabel: "Dîner léger",
    tag: "100% VÉGÉTAL",
    prepTime: "30 min",
    description: "Haricots locaux riches en fibres, mijotés avec carottes et feuilles vertes fraîches.",
  },
  {
    name: "Fruit entier de saison",
    category: "snack",
    categoryLabel: "Collation",
    tag: "NATUREL",
    prepTime: "Immédiat",
    description: "Papaye, mangue, orange, pastèque ou goyave selon l'arrivage de ton marché du jour.",
  },
  {
    name: "Jus de baobab maison peu sucré",
    category: "snack",
    categoryLabel: "Collation",
    tag: "RICHE EN VITAMINE C",
    prepTime: "10 min",
    description: "Pulpe de pain de singe diluée et filtrée, désaltérante avec une touche naturelle de miel facultatif.",
  },
];

export function RecipesSection() {
  const [filter, setFilter] = useState<MealCategory>("all");

  const filteredRecipes = filter === "all"
    ? recipes
    : recipes.filter((r) => r.category === filter);

  return (
    <section id="recettes" className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              Au cœur du livre
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              DES RECETTES QUE TU PEUX RÉELLEMENT UTILISER.
            </h2>
            <p className="font-display text-base sm:text-lg font-medium text-brand">
              PAS DES REPAS COMPLIQUÉS À REPRODUIRE.
            </p>
            <p className="text-sm text-neutral-600 mt-2">
              Des idées concrètes autour du fonio, du gombo, du poisson, de l’igname, de l’attiéké, du niébé, de la patate douce, des haricots et des légumes locaux.
            </p>
          </FadeIn>
        </div>

        {/* Filtres de catégories de repas style moderne */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: "all", label: "Toutes les recettes" },
            { id: "breakfast", label: "Petit-déjeuner" },
            { id: "lunch", label: "Déjeuner" },
            { id: "dinner", label: "Dîner léger" },
            { id: "snack", label: "Collation" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as MealCategory)}
              type="button"
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-brand text-white shadow-sm scale-102"
                  : "bg-white text-neutral-700 border border-neutral-200 hover:border-brand/40 hover:bg-neutral-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de cartes de recettes inspirée du design de référence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.name}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 hover:border-brand/40 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold tracking-wider bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                    {recipe.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-neutral-400">
                    ⏱ {recipe.prepTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 leading-snug">
                  {recipe.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {recipe.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
                <span>{recipe.categoryLabel}</span>
                <span className="text-brand font-bold group-hover:translate-x-1 transition-transform">
                  Dans le guide →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Synthèse officielle */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center max-w-xl mx-auto p-5 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs">
            <p className="font-display text-base sm:text-lg font-bold text-neutral-900 leading-snug">
              Tu ne manques plus d’idées.
              <br />
              <span className="text-brand">Tu sais quoi préparer et comment organiser ton assiette.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
