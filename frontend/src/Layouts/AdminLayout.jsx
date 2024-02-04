import React from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { useSelector } from "react-redux";
import NotFound from "../components/NotFound";

const AdminLayout = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      {userInfo ? (
        <div className="dashboard-bg-image">
          <AdminNavbar />
          <Outlet />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default AdminLayout;
