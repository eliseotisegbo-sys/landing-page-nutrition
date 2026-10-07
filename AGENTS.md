# Guide Africain de Nutrition — AGENTS.md

Contexte du projet : landing page mobile-first pour vendre le **Guide Africain de Nutrition** (4 900 FCFA) via Chariow.

## Règles absolues

1. **Ne jamais modifier `NEXT_PUBLIC_PRODUCT_URL` dans le code** — toujours via `.env.local`.
2. **Ne jamais inventer de témoignages, avis ou statistiques commerciales.**
3. **Ne jamais promettre de résultat médical** (perte de poids chiffrée, guérison, etc.).
4. **Images uniquement depuis `/public/images/`** — jamais d'URL externe en fallback.
5. **Avant toute modification** : inspecter le fichier concerné, ne pas réécrire ce qui fonctionne.

## Architecture

- `src/lib/config.ts` — source unique de vérité pour les constantes produit.
- `src/lib/analytics.ts` — brancher ici un provider analytics si nécessaire.
- `src/lib/browser-detect.ts` — logique de détection in-app browser.
- `src/lib/images.ts` — catalogue centralisé des images.

## CTA

Le CTA principal utilise toujours :
```ts
import { PRODUCT_URL, formatPrice } from "@/lib/config";
```

## Interstitiel TikTok

- Route : `/open-in-browser`
- Logique : `src/components/features/InAppBrowserGuard.tsx`
- Ne jamais créer de boucle de redirection.

## Sections à implémenter (ordre obligatoire)

1. Hero ✅ (squelette)
2. Bandeau de confiance
3. Problème
4. Ancienne méthode / nouvelle méthode
5. Méthode de l'assiette
6. Plats et recettes
7. Bénéfices
8. Ce que le client reçoit
9. Situations réelles
10. Fonctionnement
11. Cible
12. FAQ
13. Offre + CTA final

## Build avant chaque livraison

```bash
npm run build
```

Aucune erreur TypeScript, aucune erreur ESLint bloquante tolérée en production.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
