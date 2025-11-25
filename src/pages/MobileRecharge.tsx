import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smartphone, Check, ChevronRight } from "lucide-react";
import Header from "@/components/spark/Header";
import { Button } from "@/components/ui/button";
import SuccessScreen from "@/components/spark/SuccessScreen";
import RewardAnimation from "@/components/spark/RewardAnimation";

const plans = [
  { id: 1, amount: 199, validity: "24 days", data: "1.5GB/day", description: "Unlimited calls + 100 SMS/day" },
  { id: 2, amount: 299, validity: "28 days", data: "2GB/day", description: "Unlimited calls + 100 SMS/day" },
  { id: 3, amount: 479, validity: "56 days", data: "1.5GB/day", description: "Unlimited calls + 100 SMS/day" },
  { id: 4, amount: 719, validity: "84 days", data: "1.5GB/day", description: "Unlimited calls + 100 SMS/day" },
  { id: 5, amount: 149, validity: "28 days", data: "Data Pack", description: "25GB total data" },
  { id: 6, amount: 99, validity: "18 days", data: "Data Pack", description: "12GB total data" },
];

type Step = "form" | "success" | "reward";

const MobileRecharge = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("form");
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const mobileNumber = "7358107051";
  const operator = "Airtel";

  const handleProceed = () => {
    if (selectedPlan) {
      setStep("success");
    }
  };

  const handleSuccessDone = () => {
    setStep("reward");
  };

  const handleRewardComplete = () => {
    navigate("/");
  };

  const selectedPlanData = plans.find((p) => p.id === selectedPlan);

  if (step === "reward") {
    return <RewardAnimation amount={5} onComplete={handleRewardComplete} />;
  }

  if (step === "success" && selectedPlanData) {
    return (
      <SuccessScreen
        amount={selectedPlanData.amount}
        title="Recharge Successful"
        subtitle="Your mobile has been recharged"
        details={[
          { label: "Mobile Number", value: mobileNumber },
          { label: "Operator", value: operator },
          { label: "Plan", value: `₹${selectedPlanData.amount}` },
          { label: "Validity", value: selectedPlanData.validity },
        ]}
        onDone={handleSuccessDone}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Mobile Recharge" />

      <main className="container space-y-5 py-5">
        {/* Mobile Number Card */}
        <div className="animate-slide-up rounded-2xl bg-card p-5 shadow-card">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100">
              <Smartphone className="h-7 w-7 text-red-500" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-foreground">{mobileNumber}</p>
              <p className="text-sm text-muted-foreground">{operator} Prepaid</p>
            </div>
            <div className="rounded-full bg-red-500 px-3 py-1">
              <span className="text-xs font-semibold text-white">Airtel</span>
            </div>
          </div>
        </div>

        {/* Plans Section */}
        <div className="animate-slide-up space-y-4" style={{ animationDelay: "0.1s" }}>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Select a Plan
          </h3>
          <div className="space-y-3">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`w-full rounded-2xl border-2 p-4 text-left transition-all ${
                  selectedPlan === plan.id
                    ? "border-spark-blue bg-spark-blue-light shadow-spark"
                    : "border-transparent bg-card shadow-card hover:border-border"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xl font-bold text-foreground">₹{plan.amount}</span>
                      <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                        {plan.validity}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-spark-blue">{plan.data}</p>
                    <p className="text-xs text-muted-foreground">{plan.description}</p>
                  </div>
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-colors ${
                      selectedPlan === plan.id
                        ? "border-spark-blue bg-spark-blue"
                        : "border-muted-foreground"
                    }`}
                  >
                    {selectedPlan === plan.id && <Check className="h-4 w-4 text-white" />}
                  </div>
                </div>
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
            Complete this recharge & earn <span className="font-bold text-spark-gold-dark">₹5 reward!</span>
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
          disabled={!selectedPlan}
        >
          Proceed {selectedPlan && `• ₹${plans.find((p) => p.id === selectedPlan)?.amount}`}
        </Button>
      </div>
    </div>
  );
};

export default MobileRecharge;
