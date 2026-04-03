import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useContext(AppContext);

  const expenses = transactions.filter(t => t.type === "expense");

  const highest = expenses.reduce((max, curr) =>
    curr.amount > (max?.amount || 0) ? curr : max, null);

  return (
    <div className="mt-6 p-4 bg-yellow-100 rounded">
      {highest ? `Highest spending: ${highest.category} (₹${highest.amount})` : "No data"}
    </div>
  );
}