import { createContext, useContext, useState, ReactNode } from "react";

interface GoldBalanceContextType {
  balance: number;
  fillLevel: number;
  addReward: (amount: number) => void;
}

const GoldBalanceContext = createContext<GoldBalanceContextType | undefined>(undefined);

// Max balance for 100% fill (₹50,000)
const MAX_BALANCE = 50000;

export const GoldBalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem("goldBalance");
    return saved ? parseInt(saved, 10) : 14000;
  });

  // Calculate fill level as percentage (0-100)
  const fillLevel = Math.min((balance / MAX_BALANCE) * 100, 100);

  const addReward = (amount: number) => {
    setBalance((prev) => {
      const newBalance = prev + amount;
      localStorage.setItem("goldBalance", newBalance.toString());
      return newBalance;
    });
  };

  return (
    <GoldBalanceContext.Provider value={{ balance, fillLevel, addReward }}>
      {children}
    </GoldBalanceContext.Provider>
  );
};

export const useGoldBalance = () => {
  const context = useContext(GoldBalanceContext);
  if (!context) {
    throw new Error("useGoldBalance must be used within a GoldBalanceProvider");
  }
  return context;
};
