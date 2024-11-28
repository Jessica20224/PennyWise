// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ErrorBoundary from './Components/ErrorBoundary'; // Import the ErrorBoundary component
import LoginOrRegister from './Components/LoginorRegister'; // Login/Sign-Up Component
import Dashboard from './Components/Dashboard'; // Dashboard (home page after login)
import ExpenseTrackerPage from './Components/ExpenseTracker'; // ExpenseTracker Component Page
import GoalSettingPage from './Components/GoalSetting'; // GoalSetting Component Page
import SpendingChartPage from './Components/SpendingChart'; // SpendingChart Component Page
import BudgetAlertPage from './Components/BudgetAlert'; // BudgetAlert Component Page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

   // Check for authentication on load
   useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Set to true once the user successfully logs in
    localStorage.setItem('isAuthenticated', 'true'); // Store authentication status
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Clear authentication status
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Routes>
            {/* Login/Register */}
            <Route
              path="/login"
              element={
                <ErrorBoundary>
                  <LoginOrRegister onLoginSuccess={handleLoginSuccess} />
                </ErrorBoundary>
              }
            />
            <Route
              path="/register"
              element={
                <ErrorBoundary>
                  <LoginOrRegister onLoginSuccess={handleLoginSuccess} />
                </ErrorBoundary>
              }
            />

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <ErrorBoundary>
                    <Dashboard onLogout={handleLogout}/>
                  </ErrorBoundary>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Specific Component Pages */}
            <Route
              path="/expense-tracker"
              element={
                isAuthenticated ?(
                  <ErrorBoundary>
                    <ExpenseTrackerPage /> 
                  </ErrorBoundary>
                ) :(
                 
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/goal-setting"
              element={
                isAuthenticated ? (
                  <ErrorBoundary>
                    <GoalSettingPage />
                  </ErrorBoundary>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/spending-chart"
              element={
                isAuthenticated ? (
                  <ErrorBoundary>
                    <SpendingChartPage />
                  </ErrorBoundary>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/budget-alert"
              element={
                isAuthenticated ? (
                  <ErrorBoundary>
                    <BudgetAlertPage />
                  </ErrorBoundary>
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            {/* Default Route */}
            <Route
              path="/"
              element={
                isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
              }
            />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
