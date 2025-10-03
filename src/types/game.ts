export type FoodCategory = "fruits" | "vegetables" | "grains" | "proteins" | "dairy" | "junk";

export interface FoodItem {
  id: string;
  name: string;
  emoji: string;
  category: FoodCategory;
  points: number;
}

export interface PlateSection {
  category: FoodCategory;
  label: string;
  color: string;
  items: FoodItem[];
}

export interface GameState {
  score: number;
  completedRounds: number;
  currentTip: string;
  showCelebration: boolean;
}
