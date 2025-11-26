import { Check, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoanSuccessScreenProps {
  amount: number;
  customerName: string;
  loanId: string;
  dueDate: string;
  onDone: () => void;
}

const LoanSuccessScreen = ({ amount, customerName, loanId, dueDate, onDone }: LoanSuccessScreenProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="w-full max-w-sm space-y-6 text-center">
        {/* Success Checkmark */}
        <div className="relative mx-auto h-24 w-24">
          <div className="absolute inset-0 animate-ping rounded-full bg-spark-success/20" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full gradient-success shadow-lg">
            <div className="animate-success-check">
              <Check className="h-12 w-12 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Success Text */}
        <div className="animate-slide-up space-y-2" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-2xl font-bold text-foreground">Payment Successful</h1>
          <p className="text-sm text-muted-foreground">Your loan payment has been completed.</p>
        </div>

        {/* Shriram Finance Card */}
        <div
          className="animate-slide-up rounded-2xl bg-card p-5 shadow-card border border-border"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Lender Header */}
          <div className="flex items-center gap-3 pb-4 border-b border-border mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
              <Building2 className="h-6 w-6 text-amber-600" />
            </div>
            <div className="text-left">
              <p className="text-base font-bold text-foreground">Shriram Finance Ltd</p>
              <p className="text-xs text-muted-foreground">Personal Loan</p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Customer Name</span>
              <span className="text-sm font-semibold text-foreground">{customerName}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Loan ID</span>
              <span className="text-sm font-semibold text-foreground">{loanId}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Bill Amount Paid</span>
              <span className="text-sm font-bold text-spark-success">₹{amount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Due Date</span>
              <span className="text-sm font-semibold text-foreground">{dueDate}</span>
            </div>
          </div>
        </div>

        {/* Done Button */}
        <div className="animate-slide-up pt-2" style={{ animationDelay: "0.5s" }}>
          <Button variant="spark" size="full" onClick={onDone}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoanSuccessScreen;
