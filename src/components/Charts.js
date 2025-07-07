import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function Charts({ data }) {
  const incomeTotal = data
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expenseTotal = data
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const pieData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        data: [incomeTotal, expenseTotal],
        backgroundColor: ["#198754", "#dc3545"],
      },
    ],
  };

  const monthlyExpenses = Array(12).fill(0);
  data.forEach((t) => {
    const month = new Date(t.date).getMonth();
    if (t.type === "expense") monthlyExpenses[month] += t.amount;
  });

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Expenses",
        data: monthlyExpenses,
        backgroundColor: "#0d6efd",
      },
    ],
  };

  return (
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card p-3">
          <h6>Income vs Expense</h6>
          <Pie data={pieData} />
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card p-3">
          <h6> Monthly Expenses</h6>
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}

export default Charts;