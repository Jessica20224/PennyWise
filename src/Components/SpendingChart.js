import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const SpendingChart = ({ transactions = [] }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    // Default data if no transactions
    const defaultData = [12, 19, 3, 5, 2, 3];
    const labels =
      transactions.length > 0
        ? transactions.map((t) => t.category || "Uncategorized")
        : ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

    const amounts =
      transactions.length > 0
        ? transactions.map((t) => t.amount || 0)
        : defaultData;

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Spending by Category",
            data: amounts,
            backgroundColor: "rgba(75, 192, 192, 0.6)",
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

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [transactions]); // Add transactions to dependency array

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <canvas ref={chartRef} style={{ width: "100%", height: "100%" }}></canvas>
    </div>
  );
};

export default SpendingChart;
