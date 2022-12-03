import React from "react";
import OrgDashboardHeader from "../components/layout/OrgDashboardHeader";
import OrgDashboardBody from "./OrgDashboardBody.js";
import "../assets/css/home.css";
import Footer from "../components/layout/Footer";
import './ORGDASHBOARD.css';

const OrgDashboard = () => {
  return (
    <>
      <OrgDashboardHeader />
      <OrgDashboardBody />
      <div style={{ height: '128px' }}/>
      <Footer />
    </>
  );
};

export default OrgDashboard;
