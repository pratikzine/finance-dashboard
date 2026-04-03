import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4 bg-green-100 rounded">Income: ₹{income}</div>
      <div className="p-4 bg-red-100 rounded">Expense: ₹{expense}</div>
      <div className="p-4 bg-blue-100 rounded">Balance: ₹{balance}</div>
    </div>
  );
}