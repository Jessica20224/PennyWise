// BudgetAlert.js
import React from "react";

const BudgetAlert = ({ transactions = [], budgetLimit }) => {
  // Safely filter transactions based on a category or condition
  const overBudgetTransactions = transactions.filter(
    (transaction) => transaction.amount > budgetLimit
  );

  return (
    <div>
      {overBudgetTransactions.length > 0 ? (
        <div>
          <h3>Warning: You have overspent in the following categories:</h3>
          <ul>
            {overBudgetTransactions.map((transaction, index) => (
              <li key={index}>
                {transaction.category}: ${transaction.amount}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Your spending is within budget!</p>
      )}
    </div>
  );
};

export default BudgetAlert;
