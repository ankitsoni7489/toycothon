import { FoodItem as FoodItemType } from "@/types/game";
import { FoodItem } from "./FoodItem";

interface FoodBankProps {
  foods: FoodItemType[];
  placedFoodIds: string[];
  onDragStart: (food: FoodItemType) => void;
  onDragEnd: () => void;
  draggingFood: FoodItemType | null;
}

export const FoodBank = ({ foods, placedFoodIds, onDragStart, onDragEnd, draggingFood }: FoodBankProps) => {
  return (
    <div className="bg-card rounded-3xl p-4 md:p-6 shadow-xl border-4 border-primary/20">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-foreground">
        🎨 Drag Foods to Your Plate!
      </h2>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 min-h-32">
        {foods.map((food) => (
          <FoodItem
            key={food.id}
            food={food}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            isDragging={draggingFood?.id === food.id}
            isPlaced={placedFoodIds.includes(food.id)}
          />
        ))}
      </div>
    </div>
  );
};
