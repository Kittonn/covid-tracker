import React from "react";
import ChartLayout from "./ChartLayout";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectNationalVaccineManufacturer } from "../../Store/selector";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const NationaVaccineManufacturerChart: React.FC = () => {
  const datas = useSelector(selectNationalVaccineManufacturer);
  const data = {
    labels: datas.map((item) => item.date),
    datasets: [
      {
        label: "AstraZeneca",
        data: datas.map((item) => item.AstraZeneca),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        label: "Johnson & Johnson",
        data: datas.map((item) => item["Johnson & Johnson"]),
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgb(255, 205, 86)",
        borderWidth: 1,
      },
      {
        label: "Sinopharm",
        data: datas.map((item) => item.Sinopharm),

        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
      {
        label: "Sinovac",
        data: datas.map((item) => item.Sinovac),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
      },
      {
        label: "Pfizer",
        data: datas.map((item) => item.Pfizer),
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgb(153, 102, 255)",
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
          "กราฟแสดงจำนวนการฉีดวัคซีนทั้งประเทศ",
          "แยกตามผู้ผลิต ในรอบ 14 วัน",
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
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 7,
        },
      },
      y: {
        ticks: {
          callback: (value: any) => {
            return value === 0
              ? 0
              : value < 1000000 && value >= 1000
              ? value / 1000 + "K"
              : value >= 1000000
              ? value / 1000000 + "M"
              : value;
          },
        },
        beginAtZero: true,
      },
    },
  };
  return (
    <ChartLayout>
      <Line data={data} options={options} />{" "}
    </ChartLayout>
  );
};

export default NationaVaccineManufacturerChart;
