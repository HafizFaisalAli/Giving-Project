import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-height">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
