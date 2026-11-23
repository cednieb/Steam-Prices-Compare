# Steam Quick Links & Price Compare

A lightweight userscript that adds one-click shortcuts to major keyshops, price trackers, and gaming databases directly on Steam Store game pages (`store.steampowered.com/app/*`).

## Features

* **Native Steam Header Integration** *(next to the Community Hub button)*:
  * **DLcompare** — Search the game by title
  * **Goclecd** — Search the game by title

* **Floating Quick-Access Toolbar** *(fixed at the top-left corner of the viewport)*:
  * **DLcompare** — Keyshop and retail price comparison
  * **Goclecd** — Keyshop price comparison
  * **GG.deals** — Official stores and keyshops aggregator
  * **SteamDB** — Price history, player counts, and technical metadata *(matched via AppID)*
  * **ProtonDB** — Linux and Steam Deck compatibility reports *(matched via AppID)*
  * **PCGamingWiki** — Bug fixes, framerate unlocks, and configuration tweaks *(matched via AppID)*
  * **HowLongToBeat** — Average completion times
  * **YouTube** — Direct gameplay search

## Installation

1. Install a userscript manager in your browser:
   * [Tampermonkey](https://www.tampermonkey.net/) (Chrome, Firefox, Edge, Brave, Opera)
   * [Violentmonkey](https://violentmonkey.github.io/) (Chrome, Firefox, Edge)
2. Install the script from [GreasyFork](#) *(or create a new script in your manager and paste the contents of the `.user.js` file)*.
3. Navigate to any Steam game page to see the buttons in action.

## Customization

You can add, remove, or reorder shortcuts in the floating toolbar by editing the `buttons` array in the script:

```javascript
const buttons = [
    { name: 'DLcompare', url: `[https://www.dlcompare.fr/search?q=$](https://www.dlcompare.fr/search?q=$){encodedGame}`, icon: '[https://cdn.dlcompare.com/apple-touch-icon.png.webp](https://cdn.dlcompare.com/apple-touch-icon.png.webp)' },
    // Add, remove, or comment out entries here
];
