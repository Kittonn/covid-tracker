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
        data: allDay.map((item) => item.case),
        backgroundColor: ["rgba(255,99,132,0.6)"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `กราฟแสดงจำนวน${text} ในรอบ 14 วัน`,
        font: {
          size: 22,
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
          maxTicksLimit: 12,
        },
      },
    },
  };

  return (
    <div className="font-[Poppins]">
      <Line data={data} height={150} options={options} />
    </div>
  );
};

export default AllCaseChart;
