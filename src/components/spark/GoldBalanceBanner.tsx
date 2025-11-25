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
      
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
            <Coins className="h-6 w-6 text-spark-gold-dark" />
          </div>
          <div>
            <p className="text-sm font-medium text-spark-gold-dark/80">Your Gold Balance</p>
            <p className="text-2xl font-bold text-foreground">₹{balance.toLocaleString()}</p>
          </div>
        </div>
        <div className="animate-float">
          <span className="text-4xl">🪙</span>
        </div>
      </div>
    </div>
  );
};

export default GoldBalanceBanner;
