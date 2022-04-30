import React from "react";
import ChartLayout from "./ChartLayout";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectNationalVaccine } from "../../Store/selector";
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
const NationalVaccineChart: React.FC = () => {
  const datas = useSelector(selectNationalVaccine);

  const data = {
    labels: datas.map((item) => item.date),
    datasets: [
      {
        label: "เข็มที่ 1",
        data: datas.map((item) => item.first_dose),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
      },
      {
        label: "เข็มที่ 2",
        data: datas.map((item) => item.second_dose),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
      },
      {
        label: "เข็มที่ 3",
        data: datas.map((item) => item.third_dose),
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgb(255, 205, 86)",
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
          "แยกตามเข็มที่ฉีด ในรอบ 14 วัน",
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
      <Line data={data} options={options} />
    </ChartLayout>
  );
};

export default NationalVaccineChart;
