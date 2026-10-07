# ENVIRONNEMENT DU PROJET

## Produit

Guide Africain de Nutrition

## Objectif

Landing page de vente mobile-first.

## Audience principale

Trafic froid provenant principalement de TikTok, Facebook et Instagram au Bénin et dans l’Afrique francophone.

## Technologie

Next.js + TypeScript + Tailwind CSS.

Animations :

Framer Motion uniquement lorsque cela améliore réellement l’expérience.

## Hébergement cible

Vercel.

## Achat

La landing page ne doit pas recréer le checkout.

Elle redirige vers Chariow.

URL :

https://gcwcqawc.mychariow.com/guide-africain-de-nutrition/checkout

## Prix de travail

4 900 FCFA.

Créer une variable :

NEXT_PUBLIC_PRODUCT_PRICE=4900

Créer également :

NEXT_PUBLIC_PRODUCT_URL=https://gcwcqawc.mychariow.com/guide-africain-de-nutrition/checkout

NEXT_PUBLIC_PRODUCT_NAME=Guide Africain de Nutrition

## Images

Dossier principal :

/public/images/

Utiliser les images réelles fournies par le propriétaire du produit.

Types recommandés :

.jpg
.jpeg
.webp
.png

Éviter les fichiers inutilement lourds.

## Images du livre

Prévoir notamment :

guide-cover
guide-page-01
guide-page-02
guide-page-03

et autres pages lorsque disponibles.

## Plats

Prévoir :

hero-femme
plat-riz-poisson
plat-igname
plat-fonio
plat-niebe
plat-poulet
plat-patate-douce
plat-gombo

Les fichiers réellement présents dans /public/images/ font foi.

## Routage

/ = landing principale.

/open-in-browser = page intermédiaire d’instruction pour les navigateurs intégrés.

Lorsque le trafic arrive depuis un navigateur intégré TikTok, Facebook ou Instagram détectable :

afficher la page d’instruction.

/open-in-browser

Lorsque le visiteur utilise un navigateur normal :

afficher directement la landing page principale.

Ne jamais créer de boucle de redirection.

## Détection navigateur

Détecter avec prudence les user agents des navigateurs intégrés.

Exemples indicatifs :

TikTok,
Instagram,
FBAN,
FBAV,
FB_IAB,
Line.

Le comportement doit rester tolérant.

Si la détection est incertaine, afficher la landing page normale plutôt que bloquer le visiteur.

## Analytics

Préparer des fonctions simples pour mesurer :

landing_view
hero_cta_click
offer_cta_click
faq_open
guide_preview_view

Ne pas installer un système d’analytics externe obligatoire pour que la landing fonctionne.

## Performance

Objectifs :

images lazy-loadées sauf hero,
formats modernes,
dimensions explicites,
aucun layout shift inutile,
JS limité,
animations légères.

## Accessibilité

Respecter :

contraste,
focus visible,
alt text,
boutons et liens accessibles,
zones tactiles suffisamment grandes,
navigation clavier sur desktop.

## SEO

Préparer :

title,
meta description,
Open Graph,
Twitter/X card,
canonical,
robots,
sitemap,
favicon,
manifest si PWA.

## Règle importante

Aucun secret dans le navigateur.

Cette landing n’a besoin d’aucune clé API secrète pour fonctionner.
