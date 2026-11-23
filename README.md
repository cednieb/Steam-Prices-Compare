# Steam Quick Links & Price Compare

Un userscript léger qui ajoute des raccourcis directs vers les principaux comparateurs de prix, bases de données et outils communautaires sur toutes les fiches de jeux du magasin Steam (`store.steampowered.com/app/*`).

## Fonctionnalités

* **Boutons intégrés dans l'en-tête Steam** *(à côté du Hub de la communauté)* :
  * **DLcompare** — Recherche directe du jeu par titre
  * **Goclecd** — Recherche directe du jeu par titre

* **Barre latérale flottante** *(fixée en haut à gauche de l'écran)* :
  * **DLcompare** — Comparateur de clés et boutiques
  * **Goclecd** — Comparateur de prix
  * **GG.deals** — Comparateur boutiques officielles et revendeurs
  * **SteamDB** — Historique des prix, joueurs simultanés et données techniques *(via AppID)*
  * **ProtonDB** — Compatibilité Linux et Steam Deck *(via AppID)*
  * **PCGamingWiki** — Correctifs de bugs, déblocage FPS et paramètres *(via AppID)*
  * **HowLongToBeat** — Durée de vie moyenne du jeu
  * **YouTube** — Recherche directe de vidéos de gameplay

## Installation

1. Installez un gestionnaire de userscripts sur votre navigateur :
   * [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Brave, Opera)
   * [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)
2. Installez le script depuis [GreasyFork](#) *(ou créez un nouveau script et collez le contenu du fichier `.user.js`)*.
3. Rendez-vous sur n'importe quelle page de jeu Steam pour voir apparaître les boutons.

## Personnalisation

Vous pouvez ajouter, retirer ou réorganiser les boutons de la barre flottante en modifiant le tableau `buttons` dans le code :

```javascript
const buttons = [
    { name: 'DLcompare', url: `[https://www.dlcompare.fr/search?q=$](https://www.dlcompare.fr/search?q=$){encodedGame}`, icon: '...' },
    // Commentez ou ajoutez vos propres entrées ici
];