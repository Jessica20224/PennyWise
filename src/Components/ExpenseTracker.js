// ExpenseTracker.js
import React, { useState } from "react";

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState({ description: "", amount: 0, type: "Income" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransaction({ ...transaction, [name]: value });
  };

  const addTransaction = (e) => {
    e.preventDefault();
    setTransactions([...transactions, transaction]);
    setTransaction({ description: "", amount: 0, type: "Income" });
  };

  return (
    <div>
      <form onSubmit={addTransaction}>
        <input type="text" name="description" placeholder="Description" onChange={handleInputChange} required />
        <input type="number" name="amount" placeholder="Amount" onChange={handleInputChange} required />
        <select name="type" onChange={handleInputChange}>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <button type="submit">Add Transaction</button>
      </form>

      <ul>
        {transactions.map((t, index) => (
          <li key={index}>
            {t.description} - {t.type}: ${t.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseTracker