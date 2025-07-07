import React from "react";

function TransactionList({ data, onDelete }) {
  if (data.length === 0) return <p className="text-muted">No transactions recorded.</p>;

  return (
    <div className="card p-3 mb-4">
      <h5 className="mb-3">Transactions</h5>
      <ul className="list-group">
        {data.map((t) => (
          <li
            key={t.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${t.type === "income" ? "list-group-item-success" : "list-group-item-danger"}`}
          >
            <div>
              <strong>{t.category}</strong>: ₹{t.amount} <small className="text-muted">({t.note})</small>
            </div>
            <div>
              <span className="badge bg-secondary me-2">{t.date}</span>
              <button className="btn btn-sm btn-outline-dark" onClick={() => onDelete(t.id)}>
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;