// BudgetAlert.js
import React, { useEffect, useState } from "react";

function BudgetAlert({ transactions, budgetLimit }) {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const totalExpense = transactions
      .filter((t) => t.type === "Expense")
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    setAlert(totalExpense > budgetLimit);
  }, [transactions, budgetLimit]);

  return <>{alert && <p style={{ color: "red" }}>Alert: You have exceeded your budget!</p>}</>;
}

export default BudgetAlert