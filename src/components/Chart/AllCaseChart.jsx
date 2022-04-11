import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllDay } from "../../store/alldayCaseSlice";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AllCaseChart = ({ selected }) => {
  const dispatch = useDispatch();

  const text =
    selected === "new_case"
      ? "ผู้ติดเชื้อรายใหม่"
      : selected === "new_death"
      ? "ผู้เสียชีวิตรายใหม่"
      : "ผู้ป่วยรักษาหาย";

  useEffect(() => {
    dispatch(getAllDay());
  }, [dispatch]);

  const allDay = useSelector((state) => state.allday.data);
  const data = {
    labels: allDay.map((item) => item.txn_date),
    datasets: [
      {
        label: "จำนวน",
        data: allDay.map((item) => item.case),
        backgroundColor: ["rgba(255, 205, 86, 0.2)"],
        borderColor: ["rgb(255, 205, 86)"],
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
          callback: (value, index, array) => {
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
    <div className="font-[Poppins] h-[300px] md:h-[400px] lg:h-[480px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default AllCaseChart;
