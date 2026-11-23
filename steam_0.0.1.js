// ==UserScript==
// @name           Steam
// @version        0.01
// @author         ced
// @namespace      https://store.steampowered.com/app/
// @description	   Add buttons
// @icon           https://store.steampowered.com/favicon.ico
// @supportURL     https://github.com/cednieb/
// @include        https://store.steampowered.com/app/*
// @exclude        https://store.steampowered.com/rien_pour_le_moment
// @license        MIT
// @run-at document-end
// ==/UserScript==
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


(function () {
    'use strict';

    const appNameEl = document.getElementById('appHubAppName');
    if (!appNameEl) return;

    const game = appNameEl.textContent.trim();
    const encodedGame = encodeURIComponent(game);
  
 		const appIdMatch = window.location.pathname.match(/\/app\/(\d+)/);
    const appId = appIdMatch ? appIdMatch[1] : '';
  
    const dlcompareUrl = 'https://www.dlcompare.fr/search?q=' + encodedGame;  
 		const dlcompareIcon = 'https://cdn.dlcompare.com/apple-touch-icon.png.webp';
    
    const goclecddUrl = 'https://www.goclecd.fr/produits/?search_name=' + encodedGame;
    const goclecdIcon = 'https://www.goclecd.fr/wp-content/themes/aks-theme/assets/image/favicon-192x192.png'; 

    const steamdbUrl = 'https://steamdb.info/app/' + appId + '/';
    const steamdbIcon = 'https://steamdb.info/static/logos/512px.png';
  
    const btnHeader = `
        <a class="btnv6_blue_hoverfade btn_medium" href="${dlcompareUrl}" target="_blank" rel="noopener noreferrer" style="margin-right: 6px; vertical-align: middle;">
            <span style="display: inline-flex; align-items: center; gap: 6px;">
                <img src="${dlcompareIcon}" alt="DLcompare" style="width: 16px; height: 16px;" />
                DLcompare
            </span>
        </a>
        
        <a class="btnv6_blue_hoverfade btn_medium" href="${goclecddUrl}" target="_blank" rel="noopener noreferrer" style="margin-right: 6px; vertical-align: middle;">
            <span style="display: inline-flex; align-items: center; gap: 6px;">
                <img src="${goclecdIcon}" alt="Goclecd" style="width: 16px; height: 16px;" />
                Goclecd
            </span>
        </a>
    `;

    const headerActions = document.querySelector('.apphub_OtherSiteInfo');
    if (headerActions) {
        headerActions.insertAdjacentHTML('afterbegin', btnHeader);
    }      


    const buttons = [
            { name: 'DLcompare', url: `https://www.dlcompare.fr/search?q=${encodedGame}`, icon: 'https://cdn.dlcompare.com/apple-touch-icon.png.webp' },
            { name: 'Goclecd', url: `https://www.goclecd.fr/produits/?search_name=${encodedGame}`, icon: 'https://www.goclecd.fr/wp-content/themes/aks-theme/assets/image/favicon-192x192.png' },
            { name: 'GG.deals', url: `https://gg.deals/games/?title=${encodedGame}`, icon: 'https://www.google.com/s2/favicons?domain=gg.deals&sz=64' },
            ...(appId ? [
                { name: 'SteamDB', url: `https://steamdb.info/app/${appId}/`, icon: 'https://steamdb.info/static/logos/512px.png' },
                { name: 'ProtonDB', url: `https://www.protondb.com/app/${appId}`, icon: 'https://www.google.com/s2/favicons?domain=protondb.com&sz=64' },
                { name: 'PCGamingWiki', url: `https://www.pcgamingwiki.com/api/appid.php?appid=${appId}`, icon: 'https://www.google.com/s2/favicons?domain=pcgamingwiki.com&sz=64' }
            ] : []),
            { name: 'HowLongToBeat', url: `https://howlongtobeat.com/?q=${encodedGame}`, icon: 'https://www.google.com/s2/favicons?domain=howlongtobeat.com&sz=64' },
            { name: 'YouTube', url: `https://www.youtube.com/results?search_query=${encodedGame}+gameplay`, icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64' }
        ];

        const btnFixed = `
            <div style="display: flex; flex-direction:column; gap: 10px; position: fixed; top: 10px; left: 10px; border-radius:10px; border:2px solid white; z-index: 99999; background-color: white; padding: 10px;">
                ${buttons.map(b => `
                    <a href="${b.url}" target="_blank" rel="noopener noreferrer" title="${b.name} : ${game}" style="display: block; line-height: 0;">
                        <img src="${b.icon}" alt="${b.name}" style="width: 48px; height: 48px;" />
                    </a>
                `).join('')}
            </div>
        `;

    document.body.insertAdjacentHTML('beforeend', btnFixed);

})();



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
