import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Case from "../content/Case";
import Vaccine from "../content/Vaccine";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Case />
      {/* <Vaccine /> */}
      <Footer />
    </div>
  );
};

export default Page;
