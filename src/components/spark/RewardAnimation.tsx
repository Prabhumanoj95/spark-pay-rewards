import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface RewardAnimationProps {
  amount: number;
  onComplete: () => void;
}

const RewardAnimation = ({ amount, onComplete }: RewardAnimationProps) => {
  const [showPot, setShowPot] = useState(false);
  const [showCoin, setShowCoin] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [showText, setShowText] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const timeline = [
      { delay: 200, action: () => setShowPot(true) },
      { delay: 800, action: () => setShowCoin(true) },
      { delay: 1200, action: () => setShake(true) },
      { delay: 1400, action: () => setShowSparkles(true) },
      { delay: 1600, action: () => setShake(false) },
      { delay: 1800, action: () => setShowText(true) },
    ];

    const timeouts = timeline.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-spark-gold-light to-background p-6">
      <div className="relative w-full max-w-sm space-y-8 text-center">
        {/* Golden Pot */}
        <div className="relative mx-auto h-48 w-48">
          {/* Sparkles */}
          {showSparkles && (
            <>
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-sparkle"
                  style={{
                    left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                    top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <span className="text-2xl">✨</span>
                </div>
              ))}
            </>
          )}

          {/* Falling Coin */}
          {showCoin && (
            <div className="absolute left-1/2 top-0 -translate-x-1/2 animate-coin-drop">
              <span className="text-5xl drop-shadow-lg">🪙</span>
            </div>
          )}

          {/* Pot */}
          {showPot && (
            <div
              className={`relative flex h-full w-full items-center justify-center transition-transform ${
                shake ? "animate-shake" : ""
              }`}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 animate-pulse-glow rounded-full blur-xl" />
                
                {/* Pot emoji */}
                <span className="relative text-[120px] drop-shadow-2xl">🏺</span>
                
                {/* Gold coins overflowing */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="text-4xl">🪙</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reward Text */}
        {showText && (
          <div className="animate-slide-up space-y-4">
            <div className="space-y-2">
              <p className="text-xl font-semibold text-foreground">Congratulations! 🎉</p>
              <p className="text-3xl font-bold text-gradient-gold">
                You earned ₹{amount} reward!
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              The reward has been added to your Gold Balance
            </p>

            <div className="pt-6">
              <Button variant="gold" size="full" onClick={onComplete}>
                Claim & Continue
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardAnimation;
