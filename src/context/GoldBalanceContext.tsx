import { createContext, useContext, useState, ReactNode } from "react";

interface GoldBalanceContextType {
  balance: number;
  addReward: (amount: number) => void;
}

const GoldBalanceContext = createContext<GoldBalanceContextType | undefined>(undefined);

export const GoldBalanceProvider = ({ children }: { children: ReactNode }) => {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem("goldBalance");
    return saved ? parseInt(saved, 10) : 14000;
  });

  const addReward = (amount: number) => {
    setBalance((prev) => {
      const newBalance = prev + amount;
      localStorage.setItem("goldBalance", newBalance.toString());
      return newBalance;
    });
  };

  return (
    <GoldBalanceContext.Provider value={{ balance, addReward }}>
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
