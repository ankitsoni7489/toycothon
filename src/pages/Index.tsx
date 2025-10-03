import { useState, useCallback } from "react";
import { FoodItem, FoodCategory } from "@/types/game";
import { foodItems, nutritionTips } from "@/data/foodItems";
import { FoodBank } from "@/components/game/FoodBank";
import { GamePlate } from "@/components/game/GamePlate";
import { ScoreDisplay } from "@/components/game/ScoreDisplay";
import { CelebrationModal } from "@/components/game/CelebrationModal";
import { NutritionTip } from "@/components/game/NutritionTip";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [score, setScore] = useState(0);
  const [stars, setStars] = useState(0);
  const [draggingFood, setDraggingFood] = useState<FoodItem | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [currentTip, setCurrentTip] = useState("");
  const [availableFoods, setAvailableFoods] = useState<FoodItem[]>(
    [...foodItems].sort(() => Math.random() - 0.5).slice(0, 8)
  );
  const [plateSections, setPlateSections] = useState<Record<FoodCategory, FoodItem[]>>({
    fruits: [],
    vegetables: [],
    grains: [],
    proteins: [],
    dairy: [],
    junk: [],
  });

  const handleDragStart = useCallback((food: FoodItem) => {
    setDraggingFood(food);
  }, []);

  const handleDragEnd = useCallback(() => {
    setDraggingFood(null);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const checkPlateCompletion = useCallback((sections: Record<FoodCategory, FoodItem[]>) => {
    const hasAllCategories = 
      sections.fruits.length > 0 &&
      sections.vegetables.length > 0 &&
      sections.grains.length > 0 &&
      sections.proteins.length > 0 &&
      sections.dairy.length > 0;

    if (hasAllCategories) {
      setShowCelebration(true);
      setStars(3);
      
      const randomTip = nutritionTips[Math.floor(Math.random() * nutritionTips.length)];
      setCurrentTip(randomTip);
      setShowTip(true);
      
      setTimeout(() => {
        setShowTip(false);
      }, 4000);
    }
  }, []);

  const handleDrop = useCallback((category: FoodCategory) => {
    if (!draggingFood) return;

    const isCorrectCategory = draggingFood.category === category;
    const newSections = { ...plateSections };

    if (isCorrectCategory) {
      newSections[category] = [...newSections[category], draggingFood];
      setScore((prev) => prev + draggingFood.points);
      setAvailableFoods((prev) => prev.filter((f) => f.id !== draggingFood.id));
      setPlateSections(newSections);
      
      toast.success("Great job! 🎉", {
        description: `${draggingFood.name} is in the right place!`,
      });

      checkPlateCompletion(newSections);
    } else {
      toast.error("Oops! Try again! 😊", {
        description: `${draggingFood.name} goes in a different section!`,
      });
    }

    setDraggingFood(null);
  }, [draggingFood, plateSections, checkPlateCompletion]);

  const handleNewRound = useCallback(() => {
    setPlateSections({
      fruits: [],
      vegetables: [],
      grains: [],
      proteins: [],
      dairy: [],
      junk: [],
    });
    setAvailableFoods([...foodItems].sort(() => Math.random() - 0.5).slice(0, 8));
    setShowCelebration(false);
    
    const randomTip = nutritionTips[Math.floor(Math.random() * nutritionTips.length)];
    setCurrentTip(randomTip);
    setShowTip(true);
    
    setTimeout(() => {
      setShowTip(false);
    }, 3000);
  }, []);

  const handleReset = useCallback(() => {
    setScore(0);
    setStars(0);
    handleNewRound();
    toast.success("Game reset! Let's play again! 🎮");
  }, [handleNewRound]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-primary/10 py-6 px-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary animate-bounce">
            🍽️ Healthy Plate Game
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-semibold">
            Create a balanced, healthy meal!
          </p>
        </header>

        {/* Score Display */}
        <div className="flex justify-center">
          <ScoreDisplay score={score} stars={stars} />
        </div>

        {/* Game Plate */}
        <GamePlate
          sections={plateSections}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        />

        {/* Food Bank */}
        <FoodBank
          foods={availableFoods}
          placedFoodIds={Object.values(plateSections).flat().map((f) => f.id)}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          draggingFood={draggingFood}
        />

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={handleNewRound}
            size="lg"
            className="bg-success hover:bg-success/90 text-success-foreground font-bold text-lg px-8 py-6 rounded-full shadow-xl"
          >
            🎲 New Foods
          </Button>
          <Button
            onClick={handleReset}
            size="lg"
            variant="outline"
            className="font-bold text-lg px-8 py-6 rounded-full shadow-xl border-4"
          >
            🔄 Reset Game
          </Button>
        </div>
      </div>

      {/* Modals and Tips */}
      <CelebrationModal show={showCelebration} onClose={() => setShowCelebration(false)} />
      <NutritionTip tip={currentTip} show={showTip} />
    </div>
  );
};

export default Index;
