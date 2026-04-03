import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionsTable() {
  const { transactions, role, setTransactions } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: "2026-04-05",
      amount: 1000,
      category: "New",
      type: "expense",
    };
    setTransactions([...transactions, newTx]);
  };

  return (
    <div className="mt-6">
      <input
        placeholder="Search..."
        className="border p-2 mb-2"
        onChange={(e) => setSearch(e.target.value)}
      />

      {role === "admin" && (
        <button onClick={addTransaction} className="ml-2 p-2 bg-blue-500 text-white">
          Add
        </button>
      )}

      <table className="w-full mt-4 border">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(t => (
            <tr key={t.id}>
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}