import { FoodCategory, FoodItem } from "@/types/game";
import { cn } from "@/lib/utils";

interface PlateSectionProps {
  category: FoodCategory;
  label: string;
  color: string;
  items: FoodItem[];
  onDrop: (category: FoodCategory) => void;
  onDragOver: (e: React.DragEvent) => void;
}

export const PlateSection = ({ category, label, color, items, onDrop, onDragOver }: PlateSectionProps) => {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    onDrop(category);
  };

  const getCategoryColor = () => {
    switch (category) {
      case "fruits": return "bg-fruits/20 border-fruits";
      case "vegetables": return "bg-vegetables/20 border-vegetables";
      case "grains": return "bg-grains/20 border-grains";
      case "proteins": return "bg-proteins/20 border-proteins";
      case "dairy": return "bg-dairy/20 border-dairy";
      case "junk": return "bg-warning/20 border-warning";
      default: return "bg-muted border-border";
    }
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={onDragOver}
      className={cn(
        "relative flex flex-col items-center justify-center",
        "min-h-32 p-4 rounded-2xl border-4",
        "transition-all duration-300",
        getCategoryColor(),
        items.length > 0 && "ring-4 ring-primary/30"
      )}
    >
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2 justify-center items-center min-h-16">
        {items.map((item) => (
          <div
            key={item.id}
            className="text-3xl md:text-4xl animate-celebrate"
          >
            {item.emoji}
          </div>
        ))}
        {items.length === 0 && (
          <p className="text-muted-foreground text-sm">Drop here!</p>
        )}
      </div>
    </div>
  );
};
