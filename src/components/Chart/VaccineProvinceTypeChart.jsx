import React from "react";
import { Bar } from "react-chartjs-2";
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
const VaccineProvinceTypeChart = () => {
  const list = useSelector((state) => state.provincevaccinetype.listData);
  console.log(list["Johnson & Johnson"]);
  const data = {
    labels: [
      "AstraZeneca",
      "Pfizer",
      "Sinovac",
      "Sinopharm",
      "Moderna",
      "Johnson & Johnson",
      "ทั้งหมด",
    ],
    datasets: [
      {
        label: "ปริมาณ",
        data: [
          list.AstraZeneca,
          list.Pfizer,
          list.Sinovac,
          list.Sinopharm,
          list.Moderna,
          list["Johnson & Johnson"],
          list.total_doses,
        ],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 200, 200, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255,200,200,1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: [
          `กราฟแสดงจำนวนการฉีดวัคซีนจังหวัง${list.province}`,
          `แยกตามผู้ผลิต ในรอบ 14 วัน`,
        ],
        font: {
          size: 16,
          family: "Kanit",
        },
      },
      legend: {
        labels: {
          font: {
            size: 14,
            family: "Kanit",
          },
        },
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
      <Bar data={data} options={options} />
    </div>
  );
};

export default VaccineProvinceTypeChart;
