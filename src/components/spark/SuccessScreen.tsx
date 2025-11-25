import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessScreenProps {
  amount: number;
  title: string;
  subtitle: string;
  details: { label: string; value: string }[];
  onDone: () => void;
}

const SuccessScreen = ({ amount, title, subtitle, details, onDone }: SuccessScreenProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Success Animation */}
        <div className="relative mx-auto h-32 w-32">
          <div className="absolute inset-0 animate-ping rounded-full bg-spark-success/20" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full gradient-success shadow-lg">
            <div className="animate-success-check">
              <Check className="h-16 w-16 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Amount */}
        <div className="animate-slide-up space-y-2" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg font-medium text-muted-foreground">{title}</p>
          <p className="text-4xl font-bold text-foreground">₹{amount.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Details Card */}
        <div
          className="animate-slide-up rounded-2xl bg-card p-5 shadow-card"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="space-y-3">
            {details.map((detail, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{detail.label}</span>
                <span className="text-sm font-semibold text-foreground">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Done Button */}
        <div className="animate-slide-up pt-4" style={{ animationDelay: "0.6s" }}>
          <Button variant="spark" size="full" onClick={onDone}>
            Done
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
