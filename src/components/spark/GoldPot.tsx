import { useEffect, useState } from "react";
import goldPotImage from "@/assets/gold-pot-illustrated.png";

interface GoldPotProps {
  fillLevel: number; // 0-100 percentage
  size?: "sm" | "md" | "lg";
  showRewardAnimation?: boolean;
  rewardAmount?: number;
  onAnimationComplete?: () => void;
}

const GoldPot = ({ 
  fillLevel, 
  size = "md", 
  showRewardAnimation = false,
  rewardAmount = 0,
  onAnimationComplete 
}: GoldPotProps) => {
  const [showCoins, setShowCoins] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [localFill, setLocalFill] = useState(fillLevel);
  const [showBounce, setShowBounce] = useState(false);

  // Size configurations
  const sizeConfig = {
    sm: { container: "h-28 w-28", pot: "h-24 w-24", glowSize: 40 },
    md: { container: "h-48 w-48", pot: "h-40 w-40", glowSize: 60 },
    lg: { container: "h-72 w-72", pot: "h-56 w-56", glowSize: 80 },
  };

  const config = sizeConfig[size];

  useEffect(() => {
    setLocalFill(fillLevel);
  }, [fillLevel]);

  useEffect(() => {
    if (showRewardAnimation) {
      // Reset states
      setShowCoins(false);
      setShowSparkles(false);
      setShowBounce(false);

      const timeline = [
        { delay: 200, action: () => setShowCoins(true) },
        { delay: 600, action: () => setShowBounce(true) },
        { delay: 800, action: () => setLocalFill(prev => Math.min(prev + 10, 100)) },
        { delay: 1000, action: () => setShowSparkles(true) },
        { delay: 1400, action: () => setShowBounce(false) },
        { delay: 2000, action: () => {
          setShowCoins(false);
          setShowSparkles(false);
          onAnimationComplete?.();
        }},
      ];

      const timeouts = timeline.map(({ delay, action }) =>
        setTimeout(action, delay)
      );

      return () => timeouts.forEach(clearTimeout);
    }
  }, [showRewardAnimation, onAnimationComplete]);

  return (
    <div className={`relative ${config.container} flex items-center justify-center`}>
      {/* Ambient glow - premium gold tones */}
      <div 
        className="absolute inset-0 animate-pulse-glow"
        style={{ opacity: 0.4 + (localFill / 100) * 0.4 }}
      >
        <div 
          className="absolute inset-4 rounded-full blur-2xl transition-all duration-500"
          style={{
            background: `radial-gradient(circle, hsl(var(--spark-gold-highlight) / 0.6) 0%, hsl(var(--spark-gold-mid) / 0.3) 50%, transparent 70%)`,
          }}
        />
      </div>

      {/* Sparkle particles */}
      {showSparkles && (
        <>
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-sparkle z-20"
              style={{
                left: `${50 + 40 * Math.cos((i * Math.PI) / 6)}%`,
                top: `${50 + 40 * Math.sin((i * Math.PI) / 6)}%`,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <span className="text-lg">✨</span>
            </div>
          ))}
        </>
      )}

      {/* Falling coins animation */}
      {showCoins && (
        <>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-coin-drop z-10"
              style={{
                left: `${20 + i * 8}%`,
                top: "-15%",
                animationDelay: `${i * 0.12}s`,
              }}
            >
              <span className="text-2xl drop-shadow-lg">🪙</span>
            </div>
          ))}
        </>
      )}

      {/* Gold Pot Container */}
      <div className={`relative ${showBounce ? "animate-shake" : ""}`}>
        {/* Shimmer overlay - idle animation */}
        <div className="absolute inset-0 animate-shimmer rounded-full opacity-30 pointer-events-none z-20" />
        
        {/* Fill level glow effect - premium gold gradient */}
        <div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full blur-xl transition-all duration-700"
          style={{
            width: `${config.glowSize + localFill * 0.5}px`,
            height: `${config.glowSize * 0.5 + localFill * 0.3}px`,
            background: `radial-gradient(ellipse, hsl(var(--spark-gold-highlight) / 0.7) 0%, hsl(var(--spark-gold-mid) / 0.4) 50%, transparent 80%)`,
            opacity: 0.5 + (localFill / 100) * 0.4
          }}
        />

        {/* Gold Pot Image with premium shadow */}
        <img 
          src={goldPotImage} 
          alt="Gold pot filled with coins" 
          className={`${config.pot} object-contain relative z-10`}
          style={{
            filter: `drop-shadow(0 10px 20px hsl(var(--spark-gold-deep) / 0.35)) drop-shadow(0 4px 8px hsl(var(--spark-gold-mid) / 0.2))`,
          }}
        />

        {/* Bouncing coins on top when animating */}
        {showCoins && localFill > 30 && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i} 
                className="text-xl animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                🪙
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Reward amount popup */}
      {showRewardAnimation && rewardAmount > 0 && showSparkles && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-slide-up z-30">
          <span className="text-lg font-bold text-amber-600 drop-shadow-sm whitespace-nowrap">
            +₹{rewardAmount}
          </span>
        </div>
      )}
    </div>
  );
};

export default GoldPot;
