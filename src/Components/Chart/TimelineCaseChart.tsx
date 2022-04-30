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
import { selectTimelineCase } from "../../Store/selector";
import ChartLayout from "./ChartLayout";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TimelineCaseChart = ({ selected }: { selected: string }) => {
  const text =
    selected === "new_case"
      ? "ผู้ติดเชื้อรายใหม่"
      : selected === "new_death"
      ? "ผู้เสียชีวิตรายใหม่"
      : "ผู้ป่วยรักษาหาย";
  const datas = useSelector(selectTimelineCase);
  const data = {
    labels: datas.map((item) => item.date),
    datasets: [
      {
        label: "จำนวน",
        data: datas.map((item) => item.cases),
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        borderColor: "rgb(255, 205, 86)",
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
        text: `กราฟแสดงจำนวน${text} ในรอบ 14 วัน`,
        font: {
          size: 16,
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

export default TimelineCaseChart;
