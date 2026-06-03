/* ============================================================================
   Mémoire — site vitrine
   ========================================================================= */

// Lien App Store. Renseigne l'URL ici quand l'app sera publiée : tous les
// boutons « Télécharger » pointeront automatiquement dessus.
const APP_STORE_URL = ''; // ex. 'https://apps.apple.com/fr/app/memoire/id000000000'

if (APP_STORE_URL) {
  document.querySelectorAll('[data-store-link]').forEach((el) => {
    el.setAttribute('href', APP_STORE_URL);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
}
