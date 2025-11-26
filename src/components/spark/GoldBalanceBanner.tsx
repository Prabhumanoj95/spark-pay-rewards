import { Coins } from "lucide-react";

interface GoldBalanceBannerProps {
  balance: number;
}

const GoldBalanceBanner = ({ balance }: GoldBalanceBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl gradient-gold p-5 shadow-gold">
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/20 blur-xl" />
      <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-white/10 blur-lg" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-sm shadow-inner">
            <Coins className="h-6 w-6 text-amber-800" />
          </div>
          <div>
            <p className="text-sm font-medium text-amber-900/80">Your Gold Balance</p>
            <p className="text-2xl font-bold text-amber-900">₹{balance.toLocaleString()}</p>
          </div>
        </div>
        
        {/* Gold Pot with Coins Animation */}
        <div className="relative h-20 w-20">
          {/* Glow behind pot */}
          <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-xl animate-pulse-glow" />
          
          {/* The pot */}
          <div className="relative flex items-center justify-center h-full">
            <span className="text-5xl drop-shadow-lg animate-float">🏺</span>
            
            {/* Coins stacking/filling inside pot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 flex flex-col items-center">
              <span className="text-lg animate-coin-bounce" style={{ animationDelay: "0s" }}>🪙</span>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
              <span className="text-xl animate-coin-bounce" style={{ animationDelay: "0.3s" }}>🪙</span>
            </div>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 -translate-y-4">
              <span className="text-lg animate-coin-bounce" style={{ animationDelay: "0.6s" }}>🪙</span>
            </div>
          </div>
          
          {/* Sparkle effects */}
          <div className="absolute top-0 right-0 animate-sparkle" style={{ animationDelay: "0s" }}>
            <span className="text-xs">✨</span>
          </div>
          <div className="absolute bottom-2 left-0 animate-sparkle" style={{ animationDelay: "0.4s" }}>
            <span className="text-xs">✨</span>
          </div>
          <div className="absolute top-1/2 right-0 animate-sparkle" style={{ animationDelay: "0.8s" }}>
            <span className="text-xs">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldBalanceBanner;
