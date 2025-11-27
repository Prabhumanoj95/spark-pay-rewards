import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useGoldBalance } from "@/context/GoldBalanceContext";
import GoldPot from "./GoldPot";

interface RewardAnimationProps {
  amount: number;
  onComplete: () => void;
}

const RewardAnimation = ({ amount, onComplete }: RewardAnimationProps) => {
  const { addReward, fillLevel } = useGoldBalance();
  const [showPot, setShowPot] = useState(false);
  const [showText, setShowText] = useState(false);
  const [rewardAdded, setRewardAdded] = useState(false);
  const [animatePot, setAnimatePot] = useState(false);

  useEffect(() => {
    const timeline = [
      { delay: 200, action: () => setShowPot(true) },
      { delay: 400, action: () => setAnimatePot(true) },
      { delay: 2200, action: () => setShowText(true) },
      { delay: 2400, action: () => {
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
        {/* Golden Pot with unified component */}
        {showPot && (
          <div className="mx-auto">
            <GoldPot 
              fillLevel={fillLevel} 
              size="lg" 
              showRewardAnimation={animatePot}
              rewardAmount={amount}
            />
          </div>
        )}

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
