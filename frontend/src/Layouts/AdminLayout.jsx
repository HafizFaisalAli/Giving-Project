import React from "react";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <>
      <div className="dashboard-bg-image">
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
