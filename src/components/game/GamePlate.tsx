import { FoodCategory, FoodItem } from "@/types/game";
import { PlateSection } from "./PlateSection";

interface GamePlateProps {
  sections: Record<FoodCategory, FoodItem[]>;
  onDrop: (category: FoodCategory) => void;
  onDragOver: (e: React.DragEvent) => void;
}

export const GamePlate = ({ sections, onDrop, onDragOver }: GamePlateProps) => {
  const plateSections = [
    { category: "fruits" as FoodCategory, label: "🍎 Fruits", color: "fruits" },
    { category: "vegetables" as FoodCategory, label: "🥦 Vegetables", color: "vegetables" },
    { category: "grains" as FoodCategory, label: "🍞 Grains", color: "grains" },
    { category: "proteins" as FoodCategory, label: "🍗 Proteins", color: "proteins" },
    { category: "dairy" as FoodCategory, label: "🥛 Dairy", color: "dairy" },
  ];

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-white to-secondary/50 rounded-[3rem] p-6 md:p-8 shadow-2xl border-8 border-white">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {plateSections.map((section) => (
            <PlateSection
              key={section.category}
              category={section.category}
              label={section.label}
              color={section.color}
              items={sections[section.category]}
              onDrop={onDrop}
              onDragOver={onDragOver}
            />
          ))}
          
          {/* Limit Corner - spans 2 columns on mobile, 1 on desktop */}
          <div className="col-span-2 md:col-span-1">
            <PlateSection
              category="junk"
              label="⚠️ Limit These"
              color="warning"
              items={sections.junk}
              onDrop={onDrop}
              onDragOver={onDragOver}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
