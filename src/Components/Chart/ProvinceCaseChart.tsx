import React from "react";
import ChartLayout from "./ChartLayout";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectProvinceCase } from "../../Store/selector";
import { formatDate } from "../../change_date";
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

const ProvinceCaseChart = ({
  selected,
  type,
}: {
  selected: string;
  type: string;
}) => {
  const text =
    type === "new_case" ? "ผู้ติดเชื้อรายใหม่" : "ผู้เสียชีวิตรายใหม่";
  const datas = useSelector(selectProvinceCase);
  const data = {
    labels: Object.keys(datas?.case || {}).map((item) =>
      formatDate(new Date(item))
    ),
    datasets: [
      {
        label: "จำนวน",
        data: Object.values(datas?.case || {}),
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
        text: [`กราฟแสดงจำนวน${text}`, `จังหวัด${selected} ในรอบ 14 วัน`],
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

export default ProvinceCaseChart;
