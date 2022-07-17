import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import DashboardNav from "./components/layout/nav/nav-main/MainNav";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import AddShift from "./components/pages/AddShift";
import CartLocation from "./components/pages/CartLocation";
import Publishers from "./components/pages/Publishers";
import NoMatch from "./components/pages/NotFoundPage";

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
      <React.Fragment>
        <Header userProfile={profile} />
        <DashboardNav />
      </React.Fragment>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard userProfile={profile} />}
        />
        <Route path="/addshift" element={<AddShift />} />
        <Route path="/cartlocation" element={<CartLocation />} />
        <Route path="/publishers" element={<Publishers />} />
        <Route
          path="/"
          element={<LoginPage userProfile={profile} setProfile={setProfile} />}
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
