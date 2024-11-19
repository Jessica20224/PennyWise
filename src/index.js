import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App"; // Main App Component
import reportWebVitals from "./reportWebVitals";

// Define your routes here
const router = createBrowserRouter([
  {
    path: "/", // Root path for your main app
    element: <App />,
  },
  {
    path: "/welcome", // Example additional route
    element: <div>Welcome to the Budget Tracker App!</div>,
  },
]);

// Render the RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
