//SpendingChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Ensure this is imported for charts to work properly

const SpendingChart = ({ transactions = [] }) => {
  const chartRef = useRef(null); // Reference to the chart's canvas
  // const chartInstance = useRef(null); // To store the Chart.js instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // const categories = transactions.map((t) => t.category || "Uncategorized");
    // const amounts = transactions.map((t) => t.amount || 0);

    // Create a new chart
    const myChart = new Chart(ctx, {
      type: "bar", // Bar chart
      data: {
        labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: "Spending by Category",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgba(75, 192, 192, 0.6)", // Customize colors
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
     return myChart.destroy();

  }, []); // Re-render the chart when `transactions` changes

  return <canvas ref={chartRef}></canvas>;
  
};

export default SpendingChart;
