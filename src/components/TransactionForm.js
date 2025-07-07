import React, { useState } from "react";

function TransactionForm({ addTransaction }) {
  const [form, setForm] = useState({
    type: "income",
    category: "Salary",
    amount: "",
    note: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.amount || isNaN(form.amount)) return alert("Enter a valid amount");

    const newTransaction = {
      ...form,
      amount: parseFloat(form.amount),
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };

    addTransaction(newTransaction);
    setForm({ type: "income", category: "Salary", amount: "", note: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <div className="row g-3">
        <div className="col-md-2">
          <select
            className="form-select"
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="col-md-3">
          <input
            type="text"
            name="category"
            className="form-control"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-2">
           <input
            type="number"
            name="amount"
            className="form-control"
            placeholder="Amount"
            value={form.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3">
          <input
            type="text"
            name="note"
            className="form-control"
            placeholder="Note"
            value={form.note}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-success w-100">Add</button>
        </div>
      </div>
    </form>
  );
}

export default TransactionForm;
