import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js ke required elements register karna zaroori hai
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Example data — apna actual data props se pass karo
const sampleLabels = ["INFY", "ONGC", "TCS", "WIPRO", "RELIANCE"];
const sampleValues = [1555.45, 116.8, 3194.8, 577.75, 2112.4];

const BarChartComponent = ({
  labels = sampleLabels,
  values = sampleValues,
  label = "Price",
  barColor = "#d510aa",
}) => {
  const data = {
    labels,
    datasets: [
      {
        label,
        data: values,
        backgroundColor: barColor,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "350px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChartComponent;