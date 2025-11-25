import { Send, QrCode, Building2, RefreshCw } from "lucide-react";

const options = [
  { icon: Send, label: "Send Money", color: "bg-blue-500" },
  { icon: QrCode, label: "Scan & Pay", color: "bg-purple-500" },
  { icon: Building2, label: "Bank Transfer", color: "bg-green-500" },
  { icon: RefreshCw, label: "Self Transfer", color: "bg-orange-500" },
];

const UPIOptions = () => {
  return (
    <div className="rounded-2xl bg-card p-5 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
        Money Transfers
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {options.map((option) => (
          <button
            key={option.label}
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-105 active:scale-95"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${option.color} text-white shadow-lg transition-shadow group-hover:shadow-xl`}
            >
              <option.icon className="h-6 w-6" />
            </div>
            <span className="text-xs font-medium text-foreground text-center leading-tight">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UPIOptions;
