import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Case from "../content/Case";
import Vaccine from "../content/Vaccine";

const Page = () => {
  return (
    <Layout>
      <Navbar />
      <Case />
      <Vaccine />
      <Footer />
    </Layout>
  );
};

export default Page;
