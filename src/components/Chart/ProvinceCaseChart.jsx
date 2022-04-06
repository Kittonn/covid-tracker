import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProvinceCaseChart = () => {
  const { date, new_case } = useSelector((state) => state.provincecase);

  const data = {
    labels: date,
    datasets: [
      {
        label: "ผู้ติดเชือใหม่",
        data: new_case,
        backgroundColor: ["rgba(255,99,132,0.6)"],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default ProvinceCaseChart;
