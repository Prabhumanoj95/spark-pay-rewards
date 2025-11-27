import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useGoldBalance } from "@/context/GoldBalanceContext";
import goldPotImage from "@/assets/gold-pot-illustrated.png";

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
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    const timeline = [
      { delay: 200, action: () => setShowPot(true) },
      { delay: 600, action: () => setShowCoins(true) },
      { delay: 800, action: () => setFillLevel(30) },
      { delay: 1000, action: () => { setShake(true); setFillLevel(60); } },
      { delay: 1200, action: () => { setShowGlow(true); setFillLevel(100); } },
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
        <div className="relative mx-auto h-72 w-72">
          {/* Glow Effect */}
          {showGlow && (
            <div className="absolute inset-0 animate-pulse-glow">
              <div className="absolute inset-4 rounded-full bg-amber-400/50 blur-3xl" />
              <div className="absolute inset-8 rounded-full bg-amber-500/60 blur-2xl" />
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
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-coin-drop"
                  style={{
                    left: `${20 + i * 8}%`,
                    top: "-15%",
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  <span className="text-3xl drop-shadow-lg">🪙</span>
                </div>
              ))}
            </>
          )}

          {/* Gold Pot Image */}
          {showPot && (
            <div
              className={`relative flex h-full w-full items-center justify-center transition-transform duration-200 ${
                shake ? "animate-shake" : ""
              }`}
            >
              {/* Fill level glow effect */}
              <div 
                className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full bg-amber-400/60 blur-xl transition-all duration-500"
                style={{
                  width: `${60 + fillLevel}px`,
                  height: `${30 + fillLevel * 0.5}px`,
                  opacity: fillLevel / 100
                }}
              />
              
              <img 
                src={goldPotImage} 
                alt="Gold pot filled with coins" 
                className="h-56 w-56 object-contain drop-shadow-2xl relative z-10"
              />
              
              {/* Bouncing coins on top of pot */}
              {showCoins && fillLevel > 50 && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-2xl animate-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      🪙
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Reward Text */}
        {showText && (
          <div className="animate-slide-up space-y-4">
            <div className="space-y-3">
              <p className="text-xl font-semibold text-foreground">Congratulations! 🎉</p>
              <p className="text-4xl font-bold text-amber-600 drop-shadow-sm">
                You earned ₹{amount}!
              </p>
            </div>

            <p className="text-sm text-muted-foreground">
              Gold reward added to your balance
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
