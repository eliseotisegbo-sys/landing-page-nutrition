/**
 * images.ts
 * Catalogue des images réelles disponibles dans /public/images/.
 * Chaque entrée définit le chemin, les dimensions et le alt text précis.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

// ─── Hero & 3D ───────────────────────────────────────────────

export const heroWomanImage: ImageAsset = {
  src: "/images/hero-femme.jpg",
  alt: "Femme africaine souriante présentant un repas équilibré et coloré dans sa cuisine",
  width: 1200,
  height: 900,
  priority: true,
};

export const guide3dMockup: ImageAsset = {
  src: "/images/guide-3d.jpg",
  alt: "Livre 3D immersif Guide Africain de Nutrition posé sur une table en bois avec herbes fraîches",
  width: 1200,
  height: 900,
  priority: true,
};

export const livre3dDebout: ImageAsset = {
  src: "/images/livre-3d-debout.jpg",
  alt: "Livre 3D debout Guide Africain de Nutrition — Édition de référence",
  width: 900,
  height: 1200,
  priority: true,
};

// ─── Couverture et infographie officielle du guide ───────────

export const guideCover: ImageAsset = {
  src: "/images/guide-cover.png",
  alt: "Le Guide de Nutrition Africain : La Méthode Simple — Infographie officielle et structure des repas",
  width: 900,
  height: 1600,
  priority: true,
};

// ─── Méthode de l'assiette idéale ───────────────────────────

export const plateMethodImage: ImageAsset = {
  src: "/images/assiette-methode.png",
  alt: "L'assiette idéale : 1/2 légumes, 1/4 protéines, 1/4 féculent — Architecture visuelle des repas africains",
  width: 1920,
  height: 1080,
};

// ─── Comparaison Avant / Après Assiette ───────────────────────

export const plateBeforeImage: ImageAsset = {
  src: "/images/assiette-avant.jpg",
  alt: "Assiette avant : portion excessive de riz blanc saturée d'huile sans légumes",
  width: 1000,
  height: 1000,
};

export const plateAfterImage: ImageAsset = {
  src: "/images/assiette-apres.jpg",
  alt: "Assiette après : moitié légumes de saison colorés, un quart poisson braisé, un quart riz",
  width: 1000,
  height: 1000,
};

// ─── Pages et fiches du livre ────────────────────────────────

export interface GuidePageItem extends ImageAsset {
  title: string;
  subtitle: string;
  description: string;
}

export const guidePages: GuidePageItem[] = [
  {
    src: "/images/guide-3d.jpg",
    alt: "Le Guide Africain de Nutrition — Édition complète et immersive",
    width: 1200,
    height: 900,
    title: "Le Guide Complet en 3D",
    subtitle: "Format numérique haute définition conçu pour smartphone",
    description: "Une lecture fluide, des pages pensées pour une consultation rapide au marché et en cuisine.",
  },
  {
    src: "/images/guide-cover.png",
    alt: "La règle visuelle de répartition de l'assiette du Guide Africain de Nutrition",
    width: 900,
    height: 1600,
    title: "La Méthode de l'Assiette",
    subtitle: "Règle visuelle : 1/2 Légumes, 1/4 Protéines, 1/4 Féculents",
    description: "La règle universelle qui s'adapte à tous les plats africains sans peser aucun aliment.",
  },
  {
    src: "/images/assiette-methode.png",
    alt: "Architecture visuelle d'un repas équilibré avec nos aliments locaux",
    width: 1920,
    height: 1080,
    title: "L'Architecture Visuelle",
    subtitle: "Une règle simple pour commencer sans avoir besoin de tout peser",
    description: "Fractionner son assiette facilement pour manger à satiété tout en préservant son équilibre.",
  },
];

// ─── Plats et repas réels ────────────────────────────────────

export interface DishItem extends ImageAsset {
  title: string;
  description: string;
  tag: string;
}

export const dishImages: DishItem[] = [
  {
    src: "/images/plat-riz-niebe.jpg",
    alt: "Riz blanc, ragoût mijoté de niébé et haricots, avocat frais émincé",
    width: 1080,
    height: 1350,
    title: "Riz + haricots / niébé + légumes & avocat",
    description: "Des féculents et protéines végétales locales avec de bons lipides naturels.",
    tag: "Déjeuner équilibré",
  },
  {
    src: "/images/plat-plantain-oeufs.jpg",
    alt: "Plantains alloco dorés accompagnés d'œufs brouillés aux tomates et oignons",
    width: 900,
    height: 1200,
    title: "Plantain + œufs brouillés aux légumes",
    description: "Apprends à doser la friture et à enrichir tes œufs en légumes colorés.",
    tag: "Petit-déjeuner / Dîner",
  },
  {
    src: "/images/plat-plantain-bouilli.jpg",
    alt: "Plantain mûr bouilli, œufs sautés aux poivrons, tranches de tomate et pousses vertes",
    width: 1080,
    height: 1350,
    title: "Plantain bouilli + œufs + légumes & avocat",
    description: "Une cuisson douce sans surplus d'huile pour garder toute l'énergie du plantain.",
    tag: "Repas complet",
  },
  {
    src: "/images/plat-viande-avocat.jpg",
    alt: "Morceaux de viande rôtie assaisonnée, pommes sautées aux poivrons et avocat frais",
    width: 900,
    height: 1200,
    title: "Viande rôtie + légumes sautés + avocat",
    description: "La viande de nos marchés préparée avec saveur, bien proportionnée.",
    tag: "Déjeuner savoureux",
  },
  {
    src: "/images/plat-riz-legumes.jpg",
    alt: "Riz au maïs doux, pommes de terre assaisonnées et sauce aux haricots verts et carottes",
    width: 720,
    height: 900,
    title: "Riz & féculent + ragoût de légumes frais",
    description: "La moitié de l'assiette garnie d'une sauce riche en légumes de saison.",
    tag: "Cuisine du quotidien",
  },
];
