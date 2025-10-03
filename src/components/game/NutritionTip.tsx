import { cn } from "@/lib/utils";

interface NutritionTipProps {
  tip: string;
  show: boolean;
}

export const NutritionTip = ({ tip, show }: NutritionTipProps) => {
  if (!show) return null;

  return (
    <div className={cn(
      "fixed bottom-4 left-1/2 -translate-x-1/2 z-40",
      "bg-success text-success-foreground",
      "px-6 md:px-8 py-3 md:py-4 rounded-full shadow-xl",
      "max-w-md md:max-w-2xl mx-4",
      "animate-celebrate"
    )}>
      <p className="text-base md:text-lg font-bold text-center">
        💡 {tip}
      </p>
    </div>
  );
};
