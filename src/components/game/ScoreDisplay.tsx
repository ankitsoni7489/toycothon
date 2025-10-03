import { cn } from "@/lib/utils";

interface ScoreDisplayProps {
  score: number;
  stars: number;
}

export const ScoreDisplay = ({ score, stars }: ScoreDisplayProps) => {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <div className="flex items-center gap-2 bg-primary text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
        <span className="text-xl md:text-2xl">🎯</span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold">Score</span>
          <span className="text-xl md:text-2xl font-bold">{score}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 bg-accent text-accent-foreground px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={cn(
                "text-2xl md:text-3xl transition-all duration-300",
                i < stars ? "scale-110 animate-bounce" : "opacity-30"
              )}
            >
              ⭐
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
