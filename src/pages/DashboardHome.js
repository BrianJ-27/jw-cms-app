import React from "react";
import Header from "../layout/header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddShift from "./AddShift";
import CartLocation from "./CartLocation";
import Publishers from "./Publishers";
import NoMatch from "./NotFoundPage";
import DashboardNav from "../layout/nav/nav-main/MainNav";

const DashboardHome = ({ userProfile }) => {
  return (
    <React.Fragment>
      <Header userProfile={userProfile} />
      <DashboardNav />
      <Routes>
        <Route path="/home" element={<Dashboard userProfile={userProfile} />} />
        <Route path="/addshift" element={<AddShift />} />
        <Route path="/cartlocation" element={<CartLocation />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </React.Fragment>
  );
};

export default DashboardHome;
