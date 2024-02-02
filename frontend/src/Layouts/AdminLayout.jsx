import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
const AdminLayout = () => {
  return (
    <>
      <div className="dashboard-bg-image">
        <AdminNavbar />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
