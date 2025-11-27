import { useNavigate } from "react-router-dom";
import { Fuel, Smartphone, Landmark, ChevronRight, Gift } from "lucide-react";

const rewards = [
  {
    icon: Fuel,
    title: "Pay FASTag & Earn",
    reward: "₹10",
    color: "from-emerald-400 to-emerald-600",
    path: "/fastag",
  },
  {
    icon: Smartphone,
    title: "Recharge Mobile & Earn",
    reward: "₹5",
    color: "from-violet-400 to-violet-600",
    path: "/recharge",
  },
  {
    icon: Landmark,
    title: "Pay Your Loan & Get",
    reward: "₹150",
    color: "from-amber-400 to-amber-600",
    path: "/loan",
  },
];

const RewardsBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-card p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <Gift className="h-5 w-5 text-spark-gold" />
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Earn Gold Rewards
        </h3>
      </div>
      <div className="space-y-3">
        {rewards.map((reward) => (
          <button
            key={reward.title}
            onClick={() => navigate(reward.path)}
            className="group flex w-full items-center gap-4 rounded-xl bg-muted/50 p-4 transition-all hover:bg-muted hover:shadow-md active:scale-[0.99]"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${reward.color} text-white shadow-lg`}
            >
              <reward.icon className="h-6 w-6" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">{reward.title}</p>
              <p className="text-lg font-bold text-spark-gold">{reward.reward}</p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default RewardsBanner;
