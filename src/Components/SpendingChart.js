// SpendingChart.js
import React, { useEffect, useRef } from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SpendingChart = ({ transactions }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: transactions.map((t) => t.category),
        datasets: [
          {
            label: "Spending",
            data: transactions.map((t) => t.amount),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true },
        },
      },
    });

    // Cleanup to avoid canvas reuse issue
    return () => chart.destroy();
  }, [transactions]);

  return <canvas ref={chartRef} />;
};

export default SpendingChart;
