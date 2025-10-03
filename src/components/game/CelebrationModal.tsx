import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface CelebrationModalProps {
  show: boolean;
  onClose: () => void;
}

export const CelebrationModal = ({ show, onClose }: CelebrationModalProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-accent to-primary text-white p-8 md:p-12 rounded-3xl shadow-2xl animate-celebrate">
        <div className="text-center space-y-4">
          <div className="text-6xl md:text-8xl animate-bounce">⭐</div>
          <h2 className="text-3xl md:text-5xl font-bold">Amazing!</h2>
          <p className="text-xl md:text-2xl font-semibold">Yay, Healthy Hero!</p>
          <div className="flex justify-center gap-2 text-4xl md:text-5xl">
            <span className="animate-wiggle">🎉</span>
            <span className="animate-bounce">🌟</span>
            <span className="animate-wiggle">🎊</span>
          </div>
        </div>
      </div>
    </div>
  );
};
