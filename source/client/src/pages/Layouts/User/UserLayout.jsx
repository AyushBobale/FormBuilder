import { Outlet, useLocation } from "react-router";

import Navbar from "../../../components/Navbar/Navbar";
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

export const UserLayout = () => {
  const location = useLocation();
  return (
    <div className="main">
      <Navbar />
      <Sidebar />
      <div
        className={
          location.pathname == "/" ? "content-wrap" : "content-wrap-full"
        }
      >
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
