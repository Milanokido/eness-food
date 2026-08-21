# Eness Food — site web

Site vitrine du restaurant **Eness Food** — 13 bis rue Roger Vaillant, 91700 Sainte-Geneviève-des-Bois.

Sandwichs & brochettes grillés à la flamme, burgers, chicken & buckets, salades, snacks.

## Stack

- React 19 + Create React App (CRACO)
- Tailwind CSS + shadcn/ui
- Déploiement : Netlify (build du dossier `frontend`)

## Lancer en local

```bash
cd frontend
yarn install
yarn start
```

Le site est disponible sur http://localhost:3000

## Build de production

```bash
cd frontend
yarn build
```

## Modifier le contenu du site

**Tout le contenu éditable est dans un seul fichier :** `frontend/src/data/mockData.js`

| Ce que tu veux changer | Où |
|---|---|
| Nom, slogan, adresse, téléphone | `restaurantInfo` |
| Horaires | `restaurantInfo.openingHours` et `restaurantInfo.hoursSummary` |
| Liens Uber Eats / Deliveroo | `restaurantInfo.delivery` (vide = bouton masqué) |
| Réseaux sociaux | `restaurantInfo.social` |
| Moyens de paiement | `restaurantInfo.payments` (vide = carte masquée) |
| Textes « À propos » | `aboutText` |
| Photos de la galerie | `galleryImages` (vide = section masquée) |
| Le menu complet | `menuCategories` |

### Structure d'une catégorie du menu

```js
{
  id: "blidar",                       // identifiant unique
  title: "Sandwich Blidar",
  icon: "flame",                      // voir frontend/src/lib/menuIcons.js
  image: "/menu/blidar.jpg",          // fichier dans frontend/public/menu/
  featured: true,                     // met la carte en avant
  tagline: "Brochettes grillées au feu de bois",
  sections: [
    {
      subtitle: "Nos brochettes",
      note: "Texte d'information affiché en haut du bloc",
      layout: "grid",                 // optionnel : liste compacte nom + prix
      items: [
        { name: "…", description: "…", price: "9,00 €", featured: true }
      ]
    }
  ]
}
```

Si une image de catégorie est absente, la carte affiche automatiquement une
tuile sombre avec l'icône de la catégorie et la mention « Photo à venir ».

## Images

| Fichier | Rôle |
|---|---|
| `frontend/public/logo.png` | Logo (navigation, hero, footer) |
| `frontend/public/favicon-32.png`, `favicon-192.png` | Favicons |
| `frontend/public/hero-bg.jpg` | Fond du bandeau d'accueil |
| `frontend/public/menu/` | Photos des catégories du menu |
| `frontend/public/gallery/` | Photos de la galerie |
| `frontend/public/delivery/` | Logos Uber Eats / Deliveroo (optionnel) |

## Déploiement Netlify

La configuration est dans `netlify.toml` :

- base : `frontend`
- commande : `yarn build`
- dossier publié : `build`
- redirection SPA : `/*` → `/index.html` (200)
