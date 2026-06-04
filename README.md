# Ceqoï — Website

Site vitrine OnePage de l'application **Ceqoï**. Une page, légère, pensée pour
présenter l'app et inciter au téléchargement.

## Stack

100 % statique, aucune dépendance ni étape de build :

- `index.html` — structure et contenu (icônes & composants de l'app en SVG inline)
- `styles.css` — design system (tokens `Sv`) + mise en page responsive + animations
- `script.js` — barre de nav au scroll, apparitions progressives, lien App Store
- `assets/icon.svg` — icône de l'app (favicon), reprise de `design/app_icon.svg`

La police **General Sans** (celle prévue par l'app) est chargée via le CDN Fontshare.

## Lancer en local

Ouvrir directement `index.html` dans un navigateur suffit. Pour un rendu au plus
proche de la prod (chemins relatifs, polices) :

```bash
cd ceqoï
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Avant la mise en ligne — à compléter

1. **Lien App Store** : renseigner `APP_STORE_URL` en haut de `script.js`.
   Tous les boutons « Télécharger » pointeront automatiquement dessus.
2. **Image de partage** : ajouter `assets/og.png` (1200×630) pour les aperçus
   réseaux sociaux (référencée dans les balises Open Graph de `index.html`).
3. **Liens légaux** : le pied de page pointe vers `ceqoi.app/privacy`,
   `/legal` et `/terms` (cohérent avec `lib/core/config/app_info.dart`).
   Les publier ou ajuster les URLs.

## Déploiement

N'importe quel hébergeur statique convient (Vercel, Netlify, GitHub Pages,
Cloudflare Pages). Pointer la racine sur ce dossier, aucune commande de build.
