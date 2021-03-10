# pronotheme

Pronotheme est une extension disponible sur firefox permettant d'ajouter un mode sombre sur le site Pronote espace élève. Cette extension est toujours en développement, de nouvelles fonctionnalités arrivent bientot.

![Pronotheme screenshot](/screenshot/screenshot.jpg "Pronotheme picture")

## Comment utiliser cette extension ?

C'est très simple !

Cette extension est disponible à l'adresse https://addons.mozilla.org/fr/firefox/addon/pronotheme. Après le téléchargement, il suffit de sélectionner l'extension en haut à droite de la fenêtre pour choisir les paramètres.
Il est possible de tester cette extension sans posséder un compte Pronote, etant donné que Index-education fournit une version de démonstration à l'adresse https://demo.index-education.net/pronote/eleve.html.

## Puis-je avoir un apercu du mode sombre ?

Pas de problème ! Il est possible de le faire en quelques étapes simples :

- Ouvrez une page web Pronote

- Ouvrir la console avec le raccourcis `fn + f12` ou `Outils > Développement Web > Console Web`

- Rentrer dans la console la ligne ci-dessous
```javascript
    var darkMode = document.createElement('style'); darkMode.innerHTML = ':root{--filter-invert:90%;--filter-saturate:200%;--filter-rotate:180deg}body{filter:invert(var(--filter-invert)) saturate(var(--filter-saturate)) hue-rotate(var(--filter-rotate))}body :nth-child(1n+0){box-shadow:none!important;text-shadow:none!important}.EmploiDuTemps_Element,.Image_FormatArch,.Image_FormatExcel,.Image_FormatGGB,.Image_FormatImg,.Image_FormatInconnu,.Image_FormatPDF,.Image_FormatPPT,.Image_FormatSon,.Image_FormatTexte,.Image_FormatVideo,.Image_Logo_PronoteBarreHaut,.ObjetBandeauPied,.icon_envoyer,.icon_papillon_notif,.objetBandeauEntete_sep_boutons,[class*=" Image"],[class^=Image],img{filter:invert(var(--filter-invert)) hue-rotate(var(--filter-rotate))}.objetbandeauentete_global .objetBandeauEntete_menu:not(.ongletLudique){background-color:#fff}.ObjetBandeauEspace .ibe_iconebtn:focus>i,.ObjetBandeauEspace .ibe_iconebtn:hover>i{color:#000;opacity:60%}.widget header .cta-conteneur .as-button:hover.bt-refresh,.widget header .cta-conteneur .as-button:hover.bt-widget{color:#fff}'; document.head.appendChild(darkMode);
```

