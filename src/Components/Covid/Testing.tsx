import React from "react";
import Container from "../Container";
import TestingDashboard from "./TestingDashboard";
import TestingChart from "../Chart/TestingChart";

const Testing: React.FC = () => {
  return (
    <Container>
      <div className="py-8">
        <div className="flex justify-center items-center">
          <TestingDashboard />
        </div>
        <TestingChart />
      </div>
    </Container>
  );
};

export default Testing;
