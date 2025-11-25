import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Landmark, ChevronRight, AlertCircle, Calendar } from "lucide-react";
import Header from "@/components/spark/Header";
import { Button } from "@/components/ui/button";
import SuccessScreen from "@/components/spark/SuccessScreen";
import RewardAnimation from "@/components/spark/RewardAnimation";

type Step = "form" | "success" | "reward";

const LoanPayment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("form");

  const lenderName = "Shriram Finance";
  const customerName = "Manoj";
  const mobileNumber = "7358107051";
  const amountDue = 15000;
  const dueDate = "Today";
  const loanAccountNo = "XXXX XXXX 4521";

  const handleProceed = () => {
    setStep("success");
  };

  const handleSuccessDone = () => {
    setStep("reward");
  };

  const handleRewardComplete = () => {
    navigate("/");
  };

  if (step === "reward") {
    return <RewardAnimation amount={150} onComplete={handleRewardComplete} />;
  }

  if (step === "success") {
    return (
      <SuccessScreen
        amount={amountDue}
        title="Payment Successful"
        subtitle="Your loan EMI has been paid"
        details={[
          { label: "Lender", value: lenderName },
          { label: "Customer Name", value: customerName },
          { label: "Loan Account", value: loanAccountNo },
          { label: "Transaction ID", value: "TXN" + Date.now().toString().slice(-8) },
        ]}
        onDone={handleSuccessDone}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Loan Payment" />

      <main className="container space-y-5 py-5">
        {/* Lender Card */}
        <div className="animate-slide-up rounded-2xl bg-card p-5 shadow-card">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
              <Landmark className="h-8 w-8 text-amber-600" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-lg font-bold text-foreground">{lenderName}</p>
              <p className="text-sm text-muted-foreground">Personal Loan</p>
              <div className="flex items-center gap-2 pt-1">
                <span className="rounded-full bg-spark-blue-light px-3 py-1 text-xs font-semibold text-spark-blue">
                  {loanAccountNo}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Details */}
        <div className="animate-slide-up rounded-2xl bg-card p-5 shadow-card" style={{ animationDelay: "0.1s" }}>
          <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Customer Details
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Customer Name</span>
              <span className="text-sm font-semibold text-foreground">{customerName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Registered Mobile</span>
              <span className="text-sm font-semibold text-foreground">{mobileNumber}</span>
            </div>
          </div>
        </div>

        {/* Amount Due Card */}
        <div
          className="animate-slide-up rounded-2xl border-2 border-amber-200 bg-amber-50 p-5"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-5 w-5 text-amber-600" />
            <span className="text-sm font-semibold text-amber-800">Payment Due</span>
          </div>
          <div className="space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm text-amber-700">Amount Due</p>
                <p className="text-4xl font-bold text-foreground">₹{amountDue.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-red-100 px-3 py-1">
                <Calendar className="h-4 w-4 text-red-600" />
                <span className="text-sm font-semibold text-red-600">{dueDate}</span>
              </div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-amber-200">
              <div className="h-full w-full gradient-spark rounded-full" />
            </div>
            <p className="text-xs text-amber-700">Pay now to avoid late payment charges</p>
          </div>
        </div>

        {/* Reward Banner */}
        <div
          className="animate-slide-up flex items-center gap-3 rounded-2xl bg-spark-gold-light p-4"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-2xl">🎁</span>
          <p className="flex-1 text-sm font-medium text-foreground">
            Pay your loan & earn <span className="font-bold text-spark-gold-dark">₹150 reward!</span>
          </p>
          <ChevronRight className="h-5 w-5 text-spark-gold-dark" />
        </div>

        {/* Payment Info */}
        <div
          className="animate-slide-up rounded-2xl bg-muted/50 p-4"
          style={{ animationDelay: "0.25s" }}
        >
          <p className="text-xs text-muted-foreground text-center">
            By proceeding, you agree to pay ₹{amountDue.toLocaleString()} to {lenderName}. 
            This transaction is processed via BBPS.
          </p>
        </div>
      </main>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card p-4 shadow-lg">
        <Button variant="spark" size="full" onClick={handleProceed}>
          Proceed to Pay • ₹{amountDue.toLocaleString()}
        </Button>
      </div>
    </div>
  );
};

export default LoanPayment;
