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
  const { date, new_case, name_province } = useSelector(
    (state) => state.provincecase
  );

  const data = {
    labels: date,
    datasets: [
      {
        label: "ผู้ติดเชือใหม่",
        data: new_case,
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgb(54, 162, 235)"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: `กราฟแสดงจำนวนผู้ติดเชื้อใหม่รายวันในรอบ 14 วัน จังหวัด${name_province}`,
        font: {
          size: 20,
          family: "Kanit",
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 7,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="font-[Poppins] h-[300px] md:h-[400px] lg:h-[480px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default ProvinceCaseChart;
