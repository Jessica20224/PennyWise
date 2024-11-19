// App.js
import React, { useState } from "react";
import UserRegistration from "./Components/UserRegistration";
import ExpenseTracker from "./Components/ExpenseTracker";
import GoalSetting from "./Components/GoalSetting";
import SpendingChart from "./Components/SpendingChart";
import BudgetAlert from "./Components/BudgetAlert";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="App">
     
      <ErrorBoundary>
        <UserRegistration />
      </ErrorBoundary>

      <ErrorBoundary>
        <ExpenseTracker
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </ErrorBoundary>

      <ErrorBoundary>
        <GoalSetting />
      </ErrorBoundary>

      <ErrorBoundary>
        <SpendingChart transactions={transactions} />
      </ErrorBoundary>

      <ErrorBoundary>
        <BudgetAlert transactions={transactions} budgetLimit={500} />
      </ErrorBoundary>
    </div>
  );
}

export default App;



