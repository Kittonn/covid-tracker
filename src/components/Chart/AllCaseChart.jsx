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
import { options } from "./options/allDayOptions";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AllCaseChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDay());
  }, [dispatch]);

  const allDay = useSelector((state) => state.allday.list);
  const data = {
    labels: allDay.map((item) => item.txn_date),
    datasets: [
      {
        label: "ผู้ติดเชือใหม่",
        data: allDay.map((item) => item.new_case),
        backgroundColor: ["rgba(255,99,132,0.6)"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="font-[Poppins]">
      <div className="w-[90%] lg:w-[80%] xl:w-[60%] mx-auto">
        <Line data={data} height={150} options={options} />
      </div>
    </div>
  );
};

export default AllCaseChart;
