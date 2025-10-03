import { FoodItem as FoodItemType } from "@/types/game";
import { cn } from "@/lib/utils";

interface FoodItemProps {
  food: FoodItemType;
  onDragStart: (food: FoodItemType) => void;
  onDragEnd: () => void;
  isDragging?: boolean;
  isPlaced?: boolean;
}

export const FoodItem = ({ food, onDragStart, onDragEnd, isDragging, isPlaced }: FoodItemProps) => {
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    onDragStart(food);
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = "move";
    onDragStart(food);
  };

  if (isPlaced) return null;

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={onDragEnd}
      onTouchStart={handleTouchStart}
      className={cn(
        "relative cursor-grab active:cursor-grabbing",
        "w-20 h-20 md:w-24 md:h-24",
        "flex flex-col items-center justify-center gap-1",
        "bg-card rounded-2xl shadow-lg",
        "border-4 border-white",
        "transition-all duration-200",
        "hover:scale-110 hover:shadow-xl",
        "select-none touch-none",
        isDragging ? "opacity-50 scale-95" : "opacity-100 scale-100",
        !isDragging && "animate-float"
      )}
    >
      <span className="text-4xl md:text-5xl">{food.emoji}</span>
      <span className="text-xs font-bold text-foreground text-center px-1">
        {food.name}
      </span>
    </div>
  );
};
