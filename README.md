# Guide Africain de Nutrition — Landing Page

Landing page mobile-first de vente du **Guide Africain de Nutrition**.

## Stack

- **Next.js 16** (App Router)
- **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion** (à installer si animation nécessaire)

## Démarrage rapide

```bash
cp .env.example .env.local
npm run dev
```

## Variables d'environnement

| Variable | Description | Exemple |
|---|---|---|
| `NEXT_PUBLIC_PRODUCT_URL` | URL Chariow checkout | https://gcwcqawc... |
| `NEXT_PUBLIC_PRODUCT_PRICE` | Prix en FCFA | 4900 |
| `NEXT_PUBLIC_PRODUCT_NAME` | Nom du produit | Guide Africain de Nutrition |
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site | https://... |

## Structure

```
src/
├── app/
│   ├── layout.tsx          # Métadonnées SEO complètes
│   ├── page.tsx            # Landing principale
│   ├── globals.css         # Design tokens + base styles
│   └── open-in-browser/
│       └── page.tsx        # Interstitiel TikTok/in-app browser
├── components/
│   ├── ui/
│   │   ├── Button.tsx      # CTA réutilisable
│   │   ├── Container.tsx   # Conteneur responsive
│   │   ├── Section.tsx     # Section avec espacement système
│   │   └── SafeImage.tsx   # Wrapper next/image avec fallback
│   └── features/
│       └── InAppBrowserGuard.tsx  # Détection in-app browser
└── lib/
    ├── config.ts           # Constantes produit (URL, prix, nom)
    ├── analytics.ts        # Stubs d'événements analytics
    ├── browser-detect.ts   # Détection UA in-app
    ├── images.ts           # Catalogue des images
    └── utils.ts            # Utilitaires (cn)
```

## Images

Placer les images dans `/public/images/` :

- `hero-femme.jpg` — image hero principale
- `guide-cover.png` — couverture du guide
- `guide-page-01.jpg`, `guide-page-02.jpg`, `guide-page-03.jpg` — pages intérieures
- `plat-riz-poisson.jpg`, `plat-igname.jpg`, `plat-fonio.jpg` — plats
- `plat-niebe.jpg`, `plat-poulet.jpg`, `plat-patate-douce.jpg`, `plat-gombo.jpg`
- `og-image.jpg` — image Open Graph (1200×630)

Le code gère les images absentes sans planter.

## Build

```bash
npm run build
npm run start
```

## Règles importantes

- **Pas de faux témoignages** — jamais.
- **Pas de garantie médicale** — le guide est un outil d'organisation alimentaire.
- **Prix toujours via `NEXT_PUBLIC_PRODUCT_PRICE`** — jamais codé en dur.
- **CTA toujours via `NEXT_PUBLIC_PRODUCT_URL`** — une seule URL partout.
