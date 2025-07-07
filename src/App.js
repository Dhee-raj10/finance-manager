import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("financeData");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("financeData", JSON.stringify(data));
  }, [data]);

  const addTransaction = (t) => setData([t, ...data]);
  const deleteTransaction = (id) => setData(data.filter((t) => t.id !== id));

  return (
    <ThemeProvider>
      <div className="container">
        <Header />
        <BalanceCard data={data} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionList data={data} onDelete={deleteTransaction} />
        <Charts data={data} />
      </div>
    </ThemeProvider>
  );
}

export default App;
