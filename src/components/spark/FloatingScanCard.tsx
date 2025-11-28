import { ScanLine } from "lucide-react";

const FloatingScanCard = () => {
  return (
    <button className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-md animate-float">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-spark-gold-highlight via-spark-gold-mid to-spark-gold-deep p-4 shadow-gold">
        {/* Glass overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-spark-gold-highlight/40 via-spark-gold-mid/40 to-spark-gold-highlight/40 blur-xl opacity-60" />
        
        <div className="relative flex items-center gap-4">
          {/* Icon container */}
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/30 shadow-inner">
            <ScanLine className="h-6 w-6 text-spark-gold-deep" />
          </div>
          
          {/* Text content */}
          <div className="flex-1 text-left">
            <h3 className="text-base font-bold text-spark-gold-deep">
              Scan & Pay
            </h3>
            <p className="text-xs text-spark-gold-deep/80">
              Earn gold rewards when you receive payments
            </p>
          </div>
          
          {/* Arrow indicator */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30">
            <span className="text-spark-gold-deep">→</span>
          </div>
        </div>
        
        {/* Sparkle decorations */}
        <div className="absolute top-2 right-12 h-2 w-2 animate-sparkle rounded-full bg-white/60" />
        <div className="absolute bottom-3 left-16 h-1.5 w-1.5 animate-sparkle rounded-full bg-white/50" style={{ animationDelay: '0.3s' }} />
      </div>
    </button>
  );
};

export default FloatingScanCard;