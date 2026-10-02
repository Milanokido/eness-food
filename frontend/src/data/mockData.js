// ============================================================
// ENESS FOOD - Donnees du site
// Tout le contenu editable du site se trouve dans ce fichier.
// ============================================================

export const restaurantInfo = {
  name: "Eness Food",
  tagline: "Sandwichs & brochettes grillés à la flamme.",
  location: "Sainte-Geneviève-des-Bois",
  address: "13 bis rue Roger Vaillant, 91700 Sainte-Geneviève-des-Bois",
  phoneDisplay: "01 70 58 01 33",
  phoneLink: "tel:+33170580133",

  logo: "/logo.png",
  heroBackground: "/hero-bg.jpg",

  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=13+bis+rue+Roger+Vaillant+91700+Sainte-Genevi%C3%A8ve-des-Bois",
  mapEmbed:
    "https://maps.google.com/maps?q=13%20bis%20rue%20Roger%20Vaillant%2C%2091700%20Sainte-Genevi%C3%A8ve-des-Bois&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // Plateformes de livraison : renseigner l'URL pour afficher le bouton
  delivery: {
    uberEats: "",
    deliveroo: ""
  },

  // Reseaux sociaux : renseigner l'URL pour afficher l'icone
  social: {
    instagram: "",
    facebook: ""
  },

  // Moyens de paiement acceptes : la carte est masquee tant que la liste est vide.
  // Exemple : ["Espèces", "CB", "Tickets resto"]
  payments: [],
  badges: ["Grillé à la flamme", "Livraison gratuite", "Ouvert 6j/7"],

  openingHours: {
    lundi: "Fermé",
    mardi: "17h30 – 02h00",
    mercredi: "17h30 – 02h00",
    jeudi: "17h30 – 02h00",
    vendredi: "17h30 – 02h00",
    samedi: "17h30 – 02h00",
    dimanche: "17h30 – 02h00"
  },

  hoursSummary: [
    "Lundi : fermé",
    "Mardi–Dimanche : 17h30 – 02h00"
  ]
};

export const aboutText = {
  title: "À propos d'Eness Food",
  cards: [
    {
      title: "Grillé à la flamme",
      description:
        "Nos brochettes sont grillées au feu de bois, à la commande. C'est cette cuisson qui donne au Sandwich Blidar son goût fumé et sa signature.",
      icon: "flame"
    },
    {
      title: "Livraison gratuite",
      description:
        "Nous livrons gratuitement à domicile. Passez commande par téléphone, nous nous occupons du reste.",
      icon: "delivery"
    },
    {
      title: "Ouvert 6j/7",
      description:
        "Ouverts du mardi au dimanche, tous les soirs de 17h30 à 2h du matin. Fermé le lundi.",
      icon: "clock"
    }
  ]
};

// Galerie : photos affichees dans la section "Notre Galerie".
// Pour ajouter une photo : la deposer dans frontend/public/gallery/
// puis ajouter une ligne ci-dessous avec un id unique.
export const galleryImages = [
  {
    id: 1,
    url: "/menu/blidar.jpg",
    alt: "Sandwich Blidar aux brochettes de poulet grillees",
    category: "Sandwich Blidar"
  },
  {
    id: 2,
    url: "/menu/burgers-classiques.jpg",
    alt: "Burger classique double steak cheddar",
    category: "Burgers Classiques"
  },
  {
    id: 3,
    url: "/menu/burgers-gourmets.jpg",
    alt: "Burger gourmet double steak boucher",
    category: "Burgers Gourmets"
  },
  {
    id: 4,
    url: "/menu/chicken.jpg",
    alt: "Bucket de tenders et wings",
    category: "Chicken & Buckets"
  },
  {
    id: 5,
    url: "/menu/salades.jpg",
    alt: "Salade fraiche tomates, poivrons et radis",
    category: "Nos Salades"
  },
  {
    id: 6,
    url: "/menu/snacks.jpg",
    alt: "Hummer, pains de mie toastes, steaks et cheddar",
    category: "Snacks"
  },
  {
    id: 7,
    url: "/menu/desserts.jpg",
    alt: "Tiramisu et boissons fraiches",
    category: "Desserts & Boissons"
  }
];

// ============================================================
// MENU
// Chaque categorie = une carte cliquable sur la page.
// Chaque section = un bloc a l'interieur de la fenetre du menu.
// layout: "grid" = affichage compact (nom + prix), sans description.
// ============================================================

export const menuCategories = [
  {
    id: "blidar",
    title: "Sandwich Blidar",
    icon: "flame",
    image: "/menu/blidar.jpg",
    featured: true,
    tagline: "Brochettes grillées au feu de bois",
    sections: [
      {
        subtitle: "Nos brochettes",
        note: "Chaque formule : 3 brochettes + frites maison + boisson",
        items: [
          {
            name: "Brochettes de poulet",
            description: "3 brochettes de poulet + frites maison + boisson",
            dineIn: "7,00 €",
            price: "9,00 €",
            featured: true
          },
          {
            name: "Brochettes de bœuf",
            description: "3 brochettes de bœuf + frites maison + boisson",
            dineIn: "7,00 €",
            price: "9,00 €"
          },
          {
            name: "Brochettes de merguez",
            description: "3 brochettes de merguez + frites maison + boisson",
            dineIn: "7,00 €",
            price: "9,00 €"
          },
          {
            name: "Brochettes de foie",
            description: "3 brochettes de foie + frites maison + boisson",
            dineIn: "7,00 €",
            price: "9,00 €"
          }
        ]
      }
    ]
  },

  {
    id: "classiques",
    title: "Burgers Classiques",
    icon: "beef",
    image: "/menu/burgers-classiques.jpg",
    sections: [
      {
        subtitle: "Nos burgers classiques",
        items: [
          { name: "Cheese", description: "Steak, fromage, ketchup, moutarde, oignons, pickles.", dineIn: "6,00 €", price: "7,50 €" },
          { name: "Double Cheese", description: "2 steaks, 2 fromages, ketchup, moutarde, oignons, pickles.", dineIn: "7,00 €", price: "8,50 €" },
          { name: "Triple Cheese", description: "3 steaks, 3 fromages, ketchup, moutarde, oignons, pickles.", dineIn: "8,00 €", price: "9,50 €" },
          { name: "Le Big", description: "3 steaks 90 g, jambon, 2 cheddars, œuf, salade, oignons, sauce samouraï, ketchup.", dineIn: "9,00 €", price: "9,90 €" },
          { name: "Le Max", description: "Steak 90 g, galette chicken, cheddar, emmental, salade, oignons, sauce poivre, barbecue.", price: "9,90 €" },
          { name: "Whooper Simple", description: "Steak, cheddar, mayonnaise, ketchup, salade, tomates, oignons rouges, pickles.", dineIn: "6,50 €", price: "7,90 €" },
          { name: "Whooper Double", description: "2 steaks, 2 cheddars, mayonnaise, ketchup, salade, tomates, oignons rouges, pickles.", dineIn: "7,50 €", price: "8,90 €" },
          { name: "Whooper Triple", description: "3 steaks, 3 cheddars, mayonnaise, ketchup, salade, tomates, oignons rouges, pickles.", dineIn: "8,50 €", price: "9,90 €" },
          { name: "Le 90", description: "Steak 90 g, cheddar, chorizo de bœuf, salade, tomates, oignons rouges, sauce algérienne / barbecue.", dineIn: "7,50 €", price: "9,50 €" },
          { name: "Le 180", description: "2 steaks 90 g, 2 cheddars, tomates, oignons rouges, sauce algérienne / barbecue.", dineIn: "8,50 €", price: "9,90 €" },
          { name: "American", description: "3 steaks 90 g, cheddar, galette pomme de terre, mayonnaise, barbecue, salade.", dineIn: "8,50 €", price: "9,90 €" },
          { name: "Crispy Burger", description: "Tenders, cheddar, salade, tomates, oignons rouges, mayonnaise, barbecue.", price: "8,50 €" },
          { name: "Chicken Burger", description: "Galette chicken, cheddar, salade, oignons rouges, mayonnaise.", dineIn: "7,00 €", price: "8,50 €" },
          { name: "Tower", description: "Galette chicken, galette pomme de terre, double cheddar, salade, oignons rouges, mayonnaise.", dineIn: "8,50 €", price: "9,90 €" },
          { name: "Spécial", description: "Steak 90 g, cheddar, salade, poivrons grillés, œuf, sauce algérienne.", price: "10,50 €" }
        ]
      },
      {
        subtitle: "Options",
        layout: "grid",
        items: [
          { name: "Sauce cheddar + bacon de bœuf fait maison", dineIn: "+2,50 €", price: "+2,50 €" },
          { name: "Oignons crispy", price: "+0,80 €" }
        ]
      }
    ]
  },

  {
    id: "gourmets",
    title: "Burgers Gourmets",
    icon: "chef",
    image: "/menu/burgers-gourmets.jpg",
    tagline: "Servis avec frites paysannes + boisson 33 cl",
    sections: [
      {
        subtitle: "Nos burgers gourmets",
        note: "Tous servis avec frites paysannes + boisson 33 cl, dans un pain artisanal",
        items: [
          { name: "New Yorkais", description: "Steak boucher 150 g, red cheddar, sauce BBQ, chorizo de bœuf frais, salade, oignons frits.", dineIn: "10,90 €", price: "12,90 €", featured: true },
          { name: "La Raclette", description: "Steak boucher 150 g, raclette, sauce au poivre, galette de pomme de terre, salade, oignons frits.", dineIn: "10,90 €", price: "12,90 €" },
          { name: "Chèvre Miel", description: "Steak boucher 150 g, fromage de chèvre, red cheddar, miel, moutarde, salade.", dineIn: "10,90 €", price: "12,90 €" },
          { name: "Braisé", description: "Suprême de poulet braisé, red cheddar, sauce poivre, bacon de bœuf, salade, oignons rouges.", dineIn: "10,90 €", price: "12,90 €" },
          { name: "L'Emmental", description: "Steak boucher 150 g, double emmental, salade, oignons frits, chorizo de bœuf, mayo / barbecue.", dineIn: "10,90 €", price: "12,90 €" },
          { name: "Le French", description: "Steak boucher 150 g, jambon, emmental, cheddar, sauce blanche.", dineIn: "10,90 €", price: "12,90 €" },
          { name: "Le Végétarien", description: "Galette pomme de terre aux petits légumes, cheddar, salade, tomates, oignons rouges, sauce mayo.", price: "10,90 €" },
          { name: "L'Oriental", description: "Steak boucher 150 g, double cheddar, poivrons, oignons grillés, œuf, salade, sauce algérienne.", price: "12,90 €" },
          { name: "Le Bleu", description: "Steak boucher 150 g, cheddar, bleu d'Auvergne AOP, salade, oignons rouges.", price: "12,90 €" },
          { name: "Le 4 Fromages", description: "Steak boucher 150 g, cheddar, emmental, chèvre, raclette, salade, oignons rouges.", price: "12,90 €" },
          { name: "L'Avocado", description: "Steak boucher 150 g, double cheddar, salade, sauce avocat, mayonnaise.", price: "12,90 €" },
          { name: "Le Forestier", description: "Steak boucher 150 g, double cheddar, salade, sauce champignons, mayonnaise.", price: "12,90 €" },
          { name: "Le Fish", description: "Filet de cabillaud pané, double cheddar, salade, sauce fish.", price: "12,90 €" },
          { name: "Le Big Fish", description: "Filet de cabillaud pané, galette pomme de terre aux légumes, double cheddar, sauce fish.", price: "13,90 €" },
          { name: "Le Big Vegan", description: "Steak vegan 150 g, galette pomme de terre aux légumes, double cheddar, salade, oignons, mayonnaise.", price: "13,90 €" }
        ]
      },
      {
        subtitle: "Suppléments fromages",
        layout: "grid",
        items: [
          { name: "Cheddar", price: "+0,60 €" },
          { name: "Emmental", price: "+0,80 €" },
          { name: "Chèvre", price: "+0,80 €" },
          { name: "Boursin", price: "+0,80 €" },
          { name: "Raclette", price: "+0,80 €" },
          { name: "Bleu d'Auvergne AOP", price: "+1,50 €" }
        ]
      },
      {
        subtitle: "Suppléments viandes",
        layout: "grid",
        items: [
          { name: "Steak 45 g", price: "+1,20 €" },
          { name: "2 steaks 45 g", price: "+2,40 €" },
          { name: "3 steaks 45 g", price: "+3,80 €" }
        ]
      },
      {
        subtitle: "Autres suppléments",
        layout: "grid",
        items: [
          { name: "Galette chicken", price: "+2,00 €" },
          { name: "Tender", price: "+1,80 €" },
          { name: "Rösti pomme de terre", price: "+1,20 €" },
          { name: "Œuf", price: "+0,80 €" },
          { name: "Oignons et poivrons grillés", price: "+1,00 €" },
          { name: "Sauce cheddar + bacon de bœuf fait maison", dineIn: "+2,50 €", price: "+2,50 €" },
          { name: "Oignons crispy", price: "+0,80 €" }
        ]
      }
    ]
  },

  {
    id: "chicken",
    title: "Chicken & Buckets",
    icon: "chicken",
    image: "/menu/chicken.jpg",
    sections: [
      {
        subtitle: "Chicken",
        items: [
          { name: "Nuggets x8", dineIn: "6,50 €", price: "6,50 €" },
          { name: "Wings x6", dineIn: "6,50 €", price: "6,50 €" },
          { name: "Tenders x4", dineIn: "6,50 €", price: "7,50 €" },
          { name: "Tenders Spicy x4", dineIn: "6,50 €", price: "7,50 €" },
          { name: "Formule Chicken", description: "Chicken + frites + boisson 33 cl.", price: "9,50 €", featured: true }
        ]
      },
      {
        subtitle: "Chicken Buckets",
        note: "Tous les buckets sont servis avec 4 portions de frites + 1 boisson 1,5 L",
        items: [
          { name: "20 Tenders ou 20 Spicy", dineIn: "26,90 €", price: "29,50 €" },
          { name: "12 Tenders + 12 Wings", price: "29,50 €" },
          { name: "Bucket au choix", description: "Au choix : 24 wings, 24 nuggets ou 12 tenders.", dineIn: "23,90 €", price: "26,50 €" },
          { name: "Bucket Mix", description: "12 wings + 12 nuggets ou 12 tenders.", dineIn: "31,90 €", price: "33,50 €" }
        ]
      }
    ]
  },

  {
    id: "salades",
    title: "Nos Salades",
    icon: "salad",
    image: "/menu/salades.jpg",
    sections: [
      {
        subtitle: "Nos salades",
        note: "Toutes les salades sont servies avec 1 boisson 33 cl",
        items: [
          { name: "Salade Tenders", description: "Salade verte, tomates, tenders, mozzarella.", dineIn: "7,50 €", price: "8,40 €" },
          { name: "Chèvre Chaud", description: "Salade verte, tomates, chèvre sur toast, mozzarella, olives.", dineIn: "7,50 €", price: "8,40 €" },
          { name: "Thon", description: "Salade verte, tomates, thon, olives, mozzarella.", dineIn: "7,50 €", price: "8,40 €" },
          { name: "Saumon", description: "Salade verte, tomates, saumon sur toast, olives, mozzarella.", dineIn: "7,50 €", price: "8,40 €" }
        ]
      }
    ]
  },

  {
    id: "snacks",
    title: "Snacks",
    icon: "snack",
    image: "/menu/snacks.jpg",
    sections: [
      {
        subtitle: "Croq Monsieur",
        layout: "grid",
        items: [
          { name: "Seul", price: "4,50 €" },
          { name: "Menu (frites + boisson 33 cl)", dineIn: "6,00 €", price: "7,50 €" }
        ]
      },
      {
        subtitle: "Panini",
        note: "100% mozzarella, sauce tomate ou crème fraîche",
        layout: "grid",
        items: [
          { name: "Seul", price: "5,50 €" },
          { name: "Menu (frites + boisson 33 cl)", dineIn: "6,50 €", price: "7,50 €" }
        ]
      },
      {
        subtitle: "À la carte",
        items: [
          { name: "Hummer - Menu", description: "4 pains de mie toastés, 3 steaks, 3 cheddars, mayo / ketchup, salade, tomate.", dineIn: "8,50 €", price: "9,90 €" },
          { name: "Bouchées – 6 pièces", description: "Au choix : jalapeños, sticks mozzarella, bouchées de camembert ou beignets de calamars.", dineIn: "6,90 €", price: "6,50 €" },
          { name: "Frites paysannes", description: "Barquette de frites paysannes.", price: "3,50 €" }
        ]
      }
    ]
  },

  {
    id: "desserts",
    title: "Desserts & Boissons",
    icon: "dessert",
    image: "/menu/desserts.jpg",
    sections: [
      {
        subtitle: "Desserts",
        layout: "grid",
        items: [
          { name: "Tiramisu", dineIn: "2,50 €", price: "3,50 €" },
          { name: "Panini Nutella", price: "3,50 €" },
          { name: "Tarte aux Daims", dineIn: "2,50 €", price: "3,50 €" },
          { name: "Brownie", dineIn: "2,50 €", price: "2,50 €" },
          { name: "Cheesecake", price: "3,50 €" },
          { name: "Muffins", price: "2,50 €" },
          { name: "Cookies", price: "2,50 €" },
          { name: "Crêpe au Nutella", price: "4,00 €" },
          { name: "Supplément au choix", price: "+2,00 €" }
        ]
      },
      {
        subtitle: "Glaces Häagen-Dazs",
        layout: "grid",
        items: [
          { name: "Pot 100 ml", dineIn: "3,00 €", price: "3,50 €" },
          { name: "Pot 500 ml", dineIn: "7,50 €", price: "7,50 €" }
        ]
      },
      {
        subtitle: "Boissons",
        layout: "grid",
        items: [
          { name: "Boisson 33 cl", dineIn: "1,50 €", price: "1,50 €" },
          { name: "Red Bull", price: "3,50 €" },
          { name: "Boisson 1,5 L", dineIn: "3,00 €", price: "3,50 €" }
        ]
      }
    ]
  }
];
