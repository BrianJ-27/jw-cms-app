import React, { useState } from "react";
import HomePageLogin from "./components/pages/HomePageLogin";
import DashboardHome from "./components/pages/DashboardHome";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [profile, setProfile] = useState({
    firstName: "Brian",
    lastName: "Johnson",
    role: "Administrator",
    congregation: "East Tampa",
    profilePicture: "https://avatars.githubusercontent.com/u/45458265?v=4",
    isLoggedIn: false,
  });

  return (
    <div className="grid__wrapper">
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePageLogin userProfile={profile} />}
        />
        <Route
          path="/dashboard/*"
          element={<DashboardHome userProfile={profile} />}
        />
      </Routes>
    </div>
  );
};

export default App;
