import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App"; // Main App Component
import ExpenseTracker from "./Components/ExpenseTracker";
import GoalSetting from "./Components/GoalSetting";
import SpendingChart from "./Components/SpendingChart";
import BudgetAlert from "./Components/BudgetAlert";
import LoginOrRegister from "./Components/LoginorRegister";
import reportWebVitals from "./reportWebVitals";
import './styles.css'; // Import your global styles
import Dashboard from "./Components/Dashboard";


// Define your routes here
const router = createBrowserRouter([
  {
    path: "/", // Root path for your main app
    element: <App />,
  },
  {
    path: "/loginorregister", //LoginorRegister path
    element: <LoginOrRegister />,
  },
  {
    path: "/dashboard", // Dashboard path
    element: <Dashboard />,
  },
  {
    path: "/expense-tracker", // Expense tracker path
    element: <ExpenseTracker />,
  },
  {
    path: "/goal-setting", // Goal setting path
    element: <GoalSetting />,
  },
  {
    path: "/spending-chart", // Spending chart path
    element: <SpendingChart />,
  },
  {
    path: "/budget-alert", // Budget alert path
    element: <BudgetAlert />,
  },
]);

// Render the RouterProvider
const rootElement = document.getElementById("root"); // Targeting the 'root' div in index.html
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
