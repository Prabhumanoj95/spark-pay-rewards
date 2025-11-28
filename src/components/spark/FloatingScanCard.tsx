import { ScanLine } from "lucide-react";

const FloatingScanCard = () => {
  return (
    <button className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 animate-float group">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-spark-gold-highlight via-spark-gold-mid to-spark-gold-deep blur-lg opacity-50 scale-110" />
      
      {/* Main button */}
      <div className="relative flex flex-col items-center gap-1">
        {/* Icon container */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-spark-gold-highlight via-spark-gold-mid to-spark-gold-deep shadow-gold transition-transform group-hover:scale-105 group-active:scale-95">
          {/* Inner highlight */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
          
          {/* Icon */}
          <ScanLine className="relative h-7 w-7 text-white drop-shadow-md" />
          
          {/* Sparkle decorations */}
          <div className="absolute -top-1 -right-1 h-2 w-2 animate-sparkle rounded-full bg-white/80" />
          <div className="absolute -bottom-0.5 -left-0.5 h-1.5 w-1.5 animate-sparkle rounded-full bg-white/60" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Label */}
        <span className="text-[10px] font-semibold text-spark-gold-deep drop-shadow-sm">
          Scan & Pay
        </span>
      </div>
    </button>
  );
};

export default FloatingScanCard;
