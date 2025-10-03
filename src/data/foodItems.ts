import { FoodItem } from "@/types/game";

export const foodItems: FoodItem[] = [
  // Fruits
  { id: "apple", name: "Apple", emoji: "🍎", category: "fruits", points: 10 },
  { id: "banana", name: "Banana", emoji: "🍌", category: "fruits", points: 10 },
  { id: "orange", name: "Orange", emoji: "🍊", category: "fruits", points: 10 },
  { id: "grapes", name: "Grapes", emoji: "🍇", category: "fruits", points: 10 },
  { id: "strawberry", name: "Strawberry", emoji: "🍓", category: "fruits", points: 10 },
  
  // Vegetables
  { id: "carrot", name: "Carrot", emoji: "🥕", category: "vegetables", points: 10 },
  { id: "broccoli", name: "Broccoli", emoji: "🥦", category: "vegetables", points: 10 },
  { id: "tomato", name: "Tomato", emoji: "🍅", category: "vegetables", points: 10 },
  { id: "corn", name: "Corn", emoji: "🌽", category: "vegetables", points: 10 },
  { id: "pepper", name: "Pepper", emoji: "🫑", category: "vegetables", points: 10 },
  
  // Grains
  { id: "bread", name: "Bread", emoji: "🍞", category: "grains", points: 10 },
  { id: "rice", name: "Rice", emoji: "🍚", category: "grains", points: 10 },
  { id: "pasta", name: "Pasta", emoji: "🍝", category: "grains", points: 10 },
  { id: "cereal", name: "Cereal", emoji: "🥣", category: "grains", points: 10 },
  
  // Proteins
  { id: "fish", name: "Fish", emoji: "🐟", category: "proteins", points: 10 },
  { id: "chicken", name: "Chicken", emoji: "🍗", category: "proteins", points: 10 },
  { id: "egg", name: "Egg", emoji: "🥚", category: "proteins", points: 10 },
  { id: "beans", name: "Beans", emoji: "🫘", category: "proteins", points: 10 },
  
  // Dairy
  { id: "milk", name: "Milk", emoji: "🥛", category: "dairy", points: 10 },
  { id: "cheese", name: "Cheese", emoji: "🧀", category: "dairy", points: 10 },
  { id: "yogurt", name: "Yogurt", emoji: "🍦", category: "dairy", points: 10 },
  
  // Junk food
  { id: "candy", name: "Candy", emoji: "🍬", category: "junk", points: 5 },
  { id: "chips", name: "Chips", emoji: "🍟", category: "junk", points: 5 },
  { id: "soda", name: "Soda", emoji: "🥤", category: "junk", points: 5 },
  { id: "cake", name: "Cake", emoji: "🍰", category: "junk", points: 5 },
  { id: "donut", name: "Donut", emoji: "🍩", category: "junk", points: 5 },
];

export const nutritionTips = [
  "Vegetables make you strong and full of energy! 💪",
  "Fruits are nature's candy and full of vitamins! 🌈",
  "Grains give your body fuel to play all day! ⚡",
  "Proteins help build strong muscles! 🦸",
  "Dairy keeps your bones and teeth strong! 🦴",
  "Eating a rainbow of colors keeps you healthy! 🌟",
  "Drinking water helps your body work its best! 💧",
  "Treats are okay sometimes, but healthy foods are best! 😊",
  "Try new foods - you might discover a new favorite! 🎉",
  "Eating breakfast gives you energy for learning! 🧠",
];
