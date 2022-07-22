import React from "react";
import WelcomeBanner from "../components/welcome-banner/WelcomeBanner";
import Cards from "../components/cards/Cards";
import Announcements from "../components/announcements/Announcements";

const Dashboard = ({ userProfile }) => {
  return (
    <main className="main">
      <WelcomeBanner userProfile={userProfile} />
      <div className="main__grid--wrapper">
        <section className="announcements" aria-label="Ministry Announcements">
          <h2 className="title__secondary">Announcements</h2>
          <Announcements />
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
