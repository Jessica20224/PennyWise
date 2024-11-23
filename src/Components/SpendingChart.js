//SpendingChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Ensure this is imported for charts to work properly

const SpendingChart = ({ transactions = [] }) => {
  const chartRef = useRef(null); // Reference to the chart's canvas
  const chartInstance = useRef(null); // To store the Chart.js instance

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy previous chart instance before re-rendering
    }

    const categories = transactions.map((t) => t.category || "Uncategorized");
    const amounts = transactions.map((t) => t.amount || 0);

    // Create a new chart
    chartInstance.current = new Chart(chartRef.current, {
      type: "bar", // Bar chart
      data: {
        labels: categories,
        datasets: [
          {
            label: "Spending by Category",
            data: amounts,
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
  }, [transactions]); // Re-render the chart when `transactions` changes

  return (
    <div style={{ height: "400px", width: "600px" }}>
      {transactions.length > 0 ? (
        <canvas ref={chartRef}></canvas>
      ) : (
        <p>No transactions available to display.</p>
      )}
    </div>
  );
};

export default SpendingChart;
