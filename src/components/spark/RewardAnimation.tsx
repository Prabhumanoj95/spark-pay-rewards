import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useGoldBalance } from "@/context/GoldBalanceContext";

interface RewardAnimationProps {
  amount: number;
  onComplete: () => void;
}

const RewardAnimation = ({ amount, onComplete }: RewardAnimationProps) => {
  const { addReward } = useGoldBalance();
  const [showPot, setShowPot] = useState(false);
  const [showCoins, setShowCoins] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [showText, setShowText] = useState(false);
  const [shake, setShake] = useState(false);
  const [rewardAdded, setRewardAdded] = useState(false);

  useEffect(() => {
    const timeline = [
      { delay: 200, action: () => setShowPot(true) },
      { delay: 600, action: () => setShowCoins(true) },
      { delay: 1000, action: () => setShake(true) },
      { delay: 1200, action: () => setShowGlow(true) },
      { delay: 1400, action: () => setShake(false) },
      { delay: 1600, action: () => setShowText(true) },
      { delay: 1800, action: () => {
        if (!rewardAdded) {
          addReward(amount);
          setRewardAdded(true);
        }
      }},
    ];

    const timeouts = timeline.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [amount, addReward, rewardAdded]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-spark-gold-light via-spark-gold-light/50 to-background p-6">
      <div className="relative w-full max-w-sm space-y-8 text-center">
        {/* Golden Pot Container */}
        <div className="relative mx-auto h-64 w-64">
          {/* Glow Effect */}
          {showGlow && (
            <div className="absolute inset-0 animate-pulse-glow">
              <div className="absolute inset-8 rounded-full bg-spark-gold/40 blur-3xl" />
              <div className="absolute inset-12 rounded-full bg-spark-gold/60 blur-2xl" />
            </div>
          )}

          {/* Sparkles around pot */}
          {showGlow && (
            <>
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-sparkle"
                  style={{
                    left: `${50 + 42 * Math.cos((i * Math.PI) / 6)}%`,
                    top: `${50 + 42 * Math.sin((i * Math.PI) / 6)}%`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  <span className="text-xl">✨</span>
                </div>
              ))}
            </>
          )}

          {/* Falling Coins Animation */}
          {showCoins && (
            <>
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-coin-drop"
                  style={{
                    left: `${35 + i * 8}%`,
                    top: "-20%",
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  <span className="text-4xl drop-shadow-lg">🪙</span>
                </div>
              ))}
            </>
          )}

          {/* Gold Pot */}
          {showPot && (
            <div
              className={`relative flex h-full w-full items-center justify-center transition-transform duration-200 ${
                shake ? "animate-shake" : ""
              }`}
            >
              <div className="relative">
                {/* Pot with gold coins */}
                <div className="relative">
                  <span className="text-[140px] drop-shadow-2xl filter brightness-110">🏺</span>
                  
                  {/* Stacked coins on top */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <span className="text-3xl animate-float" style={{ animationDelay: "0s" }}>🪙</span>
                    <span className="text-4xl animate-float" style={{ animationDelay: "0.2s" }}>🪙</span>
                    <span className="text-3xl animate-float" style={{ animationDelay: "0.4s" }}>🪙</span>
                  </div>
                  
                  {/* Shimmer overlay */}
                  {showGlow && (
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-shimmer rounded-full" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Reward Text */}
        {showText && (
          <div className="animate-slide-up space-y-4">
            <div className="space-y-3">
              <p className="text-xl font-semibold text-foreground">Congratulations! 🎉</p>
              <p className="text-4xl font-bold text-spark-gold-dark drop-shadow-sm">
                You earned ₹{amount}!
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              The reward has been added to your Gold Balance
            </p>

            <div className="pt-6">
              <Button variant="spark" size="full" onClick={onComplete}>
                Go to Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardAnimation;
