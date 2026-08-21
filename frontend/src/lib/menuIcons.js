import { Flame, Beef, ChefHat, Drumstick, Salad, Sandwich, Cookie, UtensilsCrossed } from 'lucide-react';

// Icone associee a chaque categorie du menu (champ "icon" dans mockData.js)
export const menuIcons = {
  flame: Flame,
  beef: Beef,
  chef: ChefHat,
  chicken: Drumstick,
  salad: Salad,
  snack: Sandwich,
  dessert: Cookie
};

export const getMenuIcon = (key) => menuIcons[key] || UtensilsCrossed;
