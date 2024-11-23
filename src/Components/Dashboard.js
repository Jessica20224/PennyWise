//Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Link for navigation

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Your Dashboard!</h1>

      <div className="dashboard-links">
        <h2>Navigate to a section:</h2>
        <ul>
          <li>
            <Link to="/expense-tracker">Expense Tracker</Link>
          </li>
          <li>
            <Link to="/goal-setting">Goal Setting</Link>
          </li>
          <li>
            <Link to="/spending-chart">Spending Chart</Link>
          </li>
          <li>
            <Link to="/budget-alert">Budget Alert</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function LogOutDashboard({ onLogout }) {
    return (
      <div>
        <h1>Welcome to the Dashboard!</h1>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  }
  
export default Dashboard;
