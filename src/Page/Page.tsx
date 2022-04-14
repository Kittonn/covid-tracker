import React, { useEffect } from "react";
import Layout from "../Components/Layout";
import Navbar from "../Components/Navbar";
import TodayCaseDashboard from "../Components/Covid/TodayCaseDashboard";
import { useDispatch } from "react-redux";
import { getTodayCaseAll } from "../Store/todayCaseAllSlice";
import { getTimelineCase } from "../Store/timelineCaseSlice";
import TimelineCaseSelect from "../Components/Select/TimelineCaseSelect";
import { getProvinceCase } from "../Store/provinceCaseSlice";
import { getTesting } from "../Store/testingSlice";
import { getNationalVaccine } from "../Store/nationalVaccineSlice";

const Page: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodayCaseAll());
    dispatch(getTimelineCase());
    dispatch(getProvinceCase());
    dispatch(getTesting());
    dispatch(getNationalVaccine());
  }, [dispatch]);

  return (
    <Layout>
      <Navbar />
      <TodayCaseDashboard />
      <TimelineCaseSelect />
    </Layout>
  );
};

export default Page;
