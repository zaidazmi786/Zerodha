import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChartComponent = ({
  labels = ["Gainers", "Losers"],
  values = [0, 0],
  colors = ["#4caf50", "#eb5b3c"],
}) => {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "220px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChartComponent;