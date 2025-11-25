import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Car, ChevronRight, Plus, Minus } from "lucide-react";
import Header from "@/components/spark/Header";
import { Button } from "@/components/ui/button";
import SuccessScreen from "@/components/spark/SuccessScreen";
import RewardAnimation from "@/components/spark/RewardAnimation";

const suggestedAmounts = [100, 200, 500, 1000, 2000, 5000];

type Step = "form" | "success" | "reward";

const FastagRecharge = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("form");
  const [amount, setAmount] = useState(500);

  const customerName = "Manoj";
  const vehicleModel = "Swift Dzire";
  const fastagBalance = 10;
  const provider = "Axis Bank";

  const handleProceed = () => {
    if (amount >= 100) {
      setStep("success");
    }
  };

  const handleSuccessDone = () => {
    setStep("reward");
  };

  const handleRewardComplete = () => {
    navigate("/");
  };

  if (step === "reward") {
    return <RewardAnimation amount={10} onComplete={handleRewardComplete} />;
  }

  if (step === "success") {
    return (
      <SuccessScreen
        amount={amount}
        title="FASTag Recharged"
        subtitle="Your FASTag has been topped up"
        details={[
          { label: "Customer Name", value: customerName },
          { label: "Vehicle", value: vehicleModel },
          { label: "FASTag Provider", value: provider },
          { label: "New Balance", value: `₹${fastagBalance + amount}` },
        ]}
        onDone={handleSuccessDone}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="FASTag Recharge" />

      <main className="container space-y-5 py-5">
        {/* FASTag Details Card */}
        <div className="animate-slide-up rounded-2xl bg-card p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
              <Car className="h-8 w-8 text-green-600" />
            </div>
            <div className="flex-1 space-y-3">
              <div>
                <p className="text-lg font-bold text-foreground">{customerName}</p>
                <p className="text-sm text-muted-foreground">{vehicleModel}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  Balance: ₹{fastagBalance}
                </span>
                <span className="rounded-full bg-spark-blue-light px-3 py-1 text-xs font-semibold text-spark-blue">
                  {provider}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="animate-slide-up space-y-4" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Enter Amount
          </h3>
          <div className="rounded-2xl bg-card p-5 shadow-card">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setAmount(Math.max(100, amount - 100))}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-muted/80"
              >
                <Minus className="h-5 w-5" />
              </button>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center gap-1">
                  <span className="text-2xl font-bold text-muted-foreground">₹</span>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-32 bg-transparent text-center text-4xl font-bold text-foreground outline-none"
                  />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">Minimum ₹100</p>
              </div>
              <button
                onClick={() => setAmount(amount + 100)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-spark-blue text-white transition-colors hover:bg-spark-blue-dark"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Suggested Amounts */}
        <div className="animate-slide-up space-y-3" style={{ animationDelay: "0.15s" }}>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Quick Select
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {suggestedAmounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setAmount(amt)}
                className={`rounded-xl py-3 text-center font-semibold transition-all ${
                  amount === amt
                    ? "gradient-spark text-white shadow-spark"
                    : "bg-card text-foreground shadow-card hover:bg-muted"
                }`}
              >
                ₹{amt.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Reward Banner */}
        <div
          className="animate-slide-up flex items-center gap-3 rounded-2xl bg-spark-gold-light p-4"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-2xl">🎁</span>
          <p className="flex-1 text-sm font-medium text-foreground">
            Recharge FASTag & earn <span className="font-bold text-spark-gold-dark">₹10 reward!</span>
          </p>
          <ChevronRight className="h-5 w-5 text-spark-gold-dark" />
        </div>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card p-4 shadow-lg">
        <Button
          variant="spark"
          size="full"
          onClick={handleProceed}
          disabled={amount < 100}
        >
          Proceed to Pay • ₹{amount.toLocaleString()}
        </Button>
      </div>
    </div>
  );
};

export default FastagRecharge;
