import { Coins } from "lucide-react";
import goldPotImage from "@/assets/gold-pot-illustrated.png";

interface GoldBalanceBannerProps {
  balance: number;
}

const GoldBalanceBanner = ({ balance }: GoldBalanceBannerProps) => {
  // Calculate fill level based on balance (0-100%)
  // Assuming max balance of 50000 for full pot
  const fillPercentage = Math.min((balance / 50000) * 100, 100);
  
  return (
    <div className="relative overflow-hidden rounded-2xl gradient-gold p-5 shadow-gold">
      {/* Decorative elements */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/20 blur-xl" />
      <div className="absolute -left-4 -bottom-4 h-20 w-20 rounded-full bg-white/10 blur-lg" />
      
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
        
        {/* Illustrated Gold Pot with fill indicator */}
        <div className="relative -mr-2 -mb-5">
          {/* Sparkle effects around pot */}
          <div className="absolute -inset-2 animate-pulse-glow opacity-60">
            <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-xl" />
          </div>
          
          {/* Gold Pot Image */}
          <img 
            src={goldPotImage} 
            alt="Gold pot filled with coins" 
            className="h-28 w-28 object-contain drop-shadow-lg relative z-10"
          />
          
          {/* Fill level indicator - subtle glow that increases with balance */}
          <div 
            className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-amber-500/40 blur-md transition-all duration-500"
            style={{
              width: `${40 + fillPercentage * 0.4}px`,
              height: `${20 + fillPercentage * 0.2}px`,
              opacity: 0.3 + (fillPercentage / 100) * 0.5
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GoldBalanceBanner;
