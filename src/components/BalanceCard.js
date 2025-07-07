import React from "react";

function BalanceCard({ data }) {
  const income = data
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = data
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="card text-white bg-success p-3">
          <h6>Income</h6>
          <h5>₹ {income}</h5>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-danger p-3">
          <h6>Expenses</h6>
          <h5>₹ {expense}</h5>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card text-white bg-dark p-3">
          <h6>Balance</h6>
          <h5>₹ {balance}</h5>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
