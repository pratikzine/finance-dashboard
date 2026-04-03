import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Charts() {
  const { transactions } = useContext(AppContext);

  const categoryData = Object.values(
    transactions.reduce((acc, curr) => {
      if (curr.type === "expense") {
        acc[curr.category] = acc[curr.category] || { name: curr.category, value: 0 };
        acc[curr.category].value += curr.amount;
      }
      return acc;
    }, {})
  );

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      <LineChart width={300} height={200} data={transactions}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amount" />
      </LineChart>

      <PieChart width={300} height={200}>
        <Pie data={categoryData} dataKey="value" outerRadius={80}>
          {categoryData.map((_, index) => (
            <Cell key={index} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}