import React from "react";
import ChartLayout from "./ChartLayout";
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
  BarElement,
} from "chart.js";
import { useSelector } from "react-redux";
import { selectProvinceVaccineManufacturer } from "../../Store/selector";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const ProvinceVaccineManufacturerChart: React.FC = () => {
  const datas = useSelector(selectProvinceVaccineManufacturer);

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
          datas[0].AstraZeneca,
          datas[0].Pfizer,
          datas[0].Sinovac,
          datas[0].Sinopharm,
          datas[0].Moderna,
          datas[0]["Johnson & Johnson"],
          datas[0].total_doses,
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
          `กราฟแสดงจำนวนการฉีดวัคซีน จังหวัด${datas[0].province} `,
          `แยกตามผู้ผลิต ในรอบ 14 วัน`,
        ],
        font: {
          size: 16,
          family: "Kanit",
        },
      },
      legend: {
        display: true,
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
      <Bar data={data} options={options} />
    </ChartLayout>
  );
};

export default ProvinceVaccineManufacturerChart;
