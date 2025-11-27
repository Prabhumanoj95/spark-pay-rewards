import { Bell, User, Search } from "lucide-react";
import GoldBalanceBanner from "@/components/spark/GoldBalanceBanner";
import UPIOptions from "@/components/spark/UPIOptions";
import RewardsBanner from "@/components/spark/RewardsBanner";
import BBPSSection from "@/components/spark/BBPSSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 gradient-spark px-4 py-4 shadow-spark">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
              <span className="text-xl">👤</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Hi, Manoj</h1>
              <p className="text-xs text-white/70">Welcome back!</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
              <Bell className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container space-y-5 py-5">
        {/* Gold Balance Banner */}
        <div className="animate-slide-up">
          <GoldBalanceBanner />
        </div>

        {/* UPI Options */}
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <UPIOptions />
        </div>

        {/* Rewards Banner */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <RewardsBanner />
        </div>

        {/* BBPS Section */}
        <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <BBPSSection />
        </div>
      </main>

      {/* Bottom Navigation Placeholder */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card px-4 py-3 shadow-lg">
        <div className="mx-auto flex max-w-md items-center justify-around">
          {[
            { icon: "🏠", label: "Home", active: true },
            { icon: "📊", label: "History", active: false },
            { icon: "🎁", label: "Rewards", active: false },
            { icon: "👤", label: "Profile", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1 ${
                item.active ? "text-spark-blue" : "text-muted-foreground"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom spacing for nav */}
      <div className="h-20" />
    </div>
  );
};

export default Index;
