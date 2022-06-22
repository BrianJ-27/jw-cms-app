import React from "react";
import DashboardStats from "../dashboard-stats/dashboardStats";
import Cards from "../cards/Cards";

const Dashboard = ({ congregation }) => {
  return (
    <main className="main">
      <DashboardStats />
      <div className="main__grid--wrapper">
        <Cards />
        <div>
          <h2 className="title__secondary">Announcements</h2>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
