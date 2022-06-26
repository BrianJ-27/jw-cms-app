import React from "react";
import DashboardStats from "../dashboard-stats/dashboardStats";
import Cards from "../cards/Cards";
import DashboardAnnouncements from "../announcements/Announcements";

const Dashboard = ({ congregation }) => {
  return (
    <main className="main">
      <DashboardStats congregation={congregation} />
      <div className="main__grid--wrapper">
        <section className="announcements" aria-label="Ministry Announcements">
          <h2 className="title__secondary">Announcements</h2>
          <div>
            <DashboardAnnouncements />
          </div>
        </section>
        <section className="shifts" aria-label="Upcoming Shifts Card">
          <h2 className="title__secondary">Upcoming Shifts </h2>
          <Cards />
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
