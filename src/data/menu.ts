export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  vibes?: string[];
  sauces?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  hasMeal?: boolean;
  layout?: "grid" | "list";
}

export const menuData: MenuCategory[] = [
  {
    id: "burgers",
    name: "Burgers",
    hasMeal: true,
    items: [
      {
        id: "fried-chicken-burger",
        name: "Fried Chicken Breast Burger",
        description: "Golden fried chicken fillet layered with fresh veggies and signature sauce",
        price: 850,
        image: "/images/products/fried-chicken-burger.jpg",
        vibes: ["Mild", "Spicy", "Fiery"],
      },
      {
        id: "grilled-chicken-burger",
        name: "Grilled Chicken Breast Burger",
        description: "Perfectly grilled, juicy & smoky, topped with fresh lettuce & our signature sauce",
        price: 850,
        image: "/images/products/grilled-chicken-burger.jpg",
        vibes: ["Mild", "Spicy", "Fiery"],
      },
    ],
  },
  {
    id: "prime-beef",
    name: "Prime Beef",
    hasMeal: true,
    items: [
      {
        id: "old-school",
        name: "Old School",
        description: "Premium beef stacked with crisp lettuce, tomatoes & creamy house sauce",
        price: 1050,
        image: "/images/products/old-school-beef.jpg",
      },
      {
        id: "smokey-bbq",
        name: "Smokey BBQ",
        description: "Rich beef patty layered with BBQ sauce, onions & fresh garden toppings",
        price: 1050,
        image: "/images/products/smokey-bbq-beef.jpg",
      },
    ],
  },
  {
    id: "chicken",
    name: "Chicken",
    items: [
      {
        id: "2pcs-leg-thigh",
        name: "2 Pcs Leg & Thigh",
        description: "Crispy fried chicken pieces, juicy on the inside",
        price: 650,
        image: "/images/products/2pcs-leg-thigh.jpg",
        vibes: ["Mild", "Spicy", "Fiery"],
      },
      {
        id: "3pcs-breast-quarter",
        name: "3 Pcs Breast Quarter",
        description: "Three pieces of our signature crispy breast quarter",
        price: 850,
        image: "/images/products/3pcs-breast-quarter.jpg",
        vibes: ["Mild", "Spicy", "Fiery"],
      },
      {
        id: "5pcs-half-chicken",
        name: "5 Pcs Half Chicken",
        description: "Half chicken - 5 pieces of crispy perfection",
        price: 1500,
        image: "/images/products/5pcs-half-chicken.jpg",
        vibes: ["Mild", "Spicy", "Fiery"],
      },
      {
        id: "10pcs-full-chicken",
        name: "10 Pcs Full Chicken",
        description: "Full chicken - 10 pieces for the whole family",
        price: 2900,
        image: "/images/products/10pcs-full-chicken.jpg",
        vibes: ["Mild", "Spicy", "Fiery"],
      },
    ],
  },
  {
    id: "roast",
    name: "Roast",
    items: [
      {
        id: "half-chicken-roast",
        name: "Half Chicken Roast",
        description: "Slow-roasted half chicken with a smoky golden finish",
        price: 1500,
        image: "/images/products/half-chicken-roast.jpg",
      },
    ],
  },
  {
    id: "wrap",
    name: "Wrap",
    items: [
      {
        id: "monster-wrap",
        name: "Monster Wrap",
        description: "Loaded chicken wrap with fresh veggies and our signature sauce",
        price: 900,
        image: "/images/products/monster-wrap.jpg",
      },
    ],
  },
  {
    id: "wings",
    name: "Wings",
    hasMeal: true,
    items: [
      {
        id: "8pcs-wings",
        name: "8 Pcs Wings",
        description: "Eight crispy wings tossed in your choice of flavor",
        price: 850,
        image: "/images/products/8pcs-wings.jpg",
        vibes: ["Mild", "BBQ", "Fiery"],
      },
    ],
  },
  {
    id: "shorts",
    name: "Shorts",
    items: [
      {
        id: "9pcs-shorts",
        name: "9 Pcs Shorts w/Fries",
        description: "Nine crispy chicken shorts served with golden fries",
        price: 900,
        image: "/images/products/9pcs-shorts.jpg",
      },
    ],
  },
  {
    id: "tenders",
    name: "Fiery Tenders",
    hasMeal: true,
    items: [
      {
        id: "fiery-tenders",
        name: "3 Pcs Fiery Tenders w/Fries",
        description: "Three crispy tenders with golden fries",
        price: 900,
        image: "/images/products/fiery-tenders.jpg",
        vibes: ["Mild", "Fiery"],
      },
    ],
  },
  {
    id: "asli-aalu",
    name: "Asli Aalu",
    layout: "list",
    items: [
      { id: "plain-fries", name: "Plain", price: 400 },
      { id: "chilli-lime-fries", name: "Chilli Lime", price: 450 },
      { id: "garlic-mayo-fries", name: "Garlic Mayo", price: 450 },
      { id: "house-special-fries", name: "House Special Sauce", price: 450 },
      { id: "spicy-cheese-fries", name: "Spicy Cheese", price: 450 },
      { id: "brown-gravy-fries", name: "Brown Gravy w/Fries", price: 450 },
    ],
  },
  {
    id: "loaded-fries",
    name: "Loaded Chicken Fries",
    items: [
      {
        id: "loaded-fries",
        name: "Loaded Fries",
        description: "Choose your sauce: Garlic Mayo, House Special, Smoky Paprika, Fiery Special BBQ, or Fiery",
        price: 850,
        image: "/images/products/loaded-fries.jpg",
        sauces: ["Garlic Mayo", "House Special", "Smoky Paprika", "Fiery BBQ", "Fiery"],
      },
    ],
  },
  {
    id: "extras",
    name: "Extras",
    layout: "list",
    items: [
      { id: "mashed-potatoes", name: "Mashed Potatoes w/Brown Gravy", price: 400 },
      { id: "coleslaw", name: "Coleslaw", price: 300 },
      { id: "dinner-roll", name: "Dinner Roll", price: 50 },
      { id: "brown-gravy", name: "Brown Gravy", price: 400 },
      { id: "jalapeno", name: "Jalapeno", price: 200 },
      { id: "drinks", name: "Drinks 350ml", description: "Coke, Sprite, Diet Coke", price: 180 },
      { id: "water", name: "Water", price: 100 },
    ],
  },
  {
    id: "sauces",
    name: "Sauces",
    layout: "list",
    items: [
      { id: "fiery-sauce", name: "Fiery Sauce", price: 200 },
      { id: "fiery-bbq-sauce", name: "Fiery Special BBQ", price: 200 },
      { id: "smoky-paprika-sauce", name: "Smoky Paprika", price: 200 },
      { id: "house-special-sauce", name: "House Special", price: 200 },
      { id: "garlic-mayo-sauce", name: "Garlic Mayo", price: 200 },
      { id: "burger-sauce", name: "Burger Sauce", price: 200 },
      { id: "cheese-sauce", name: "Cheese Sauce", price: 250 },
    ],
  },
];
