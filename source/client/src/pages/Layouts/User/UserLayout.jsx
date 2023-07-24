import Navbar from "../../../components/Navbar/Navbar";
import { Outlet } from "react-router";
import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";

export const UserLayout = () => {
  return (
    <div className="main">
      <Navbar />
      <Sidebar />
      <div className="content-wrap">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
