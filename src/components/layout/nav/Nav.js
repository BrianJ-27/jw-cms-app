import React from "react";
import { Dashboard } from "@styled-icons/boxicons-solid/Dashboard";
import { PersonBoard } from "@styled-icons/fluentui-system-filled/PersonBoard";
import { AddToList } from "@styled-icons/entypo/AddToList";
import { Location } from "@styled-icons/entypo/Location";
import { LogoutCircle } from "@styled-icons/remix-line/LogoutCircle";
import { Link } from "react-router-dom";
import { NavWrapper, Navigation, NavLogoContainer } from "./Nav.styles";
import NavLogo from "../../logo/logo";

const DashNav = ({
  currentUser,
  showLayout,
  setShowLayout,
  setCurrentUser,
}) => {
  const loggedOut = () => {
    /*This one piece of code is toggling 
      the nav and header components out of the DOM
    */
    setShowLayout(!showLayout);
    setCurrentUser(false);
  };

  return (
    <Navigation className="nav">
      <div style={{ height: "100%" }} className="flex__container--between">
        <NavLogoContainer className="flex__container--column-between">
          <NavLogo />

          {/** <p className="content__logo">
            {" "}
            <abbr title="Congregation Ministry Scheduler">CMS </abbr>
          </p> */}
        </NavLogoContainer>

        <NavWrapper className="flex__container--between">
          <li className="flex__container--v-center">
            <Link
              className="nav__link flex__container--column-v-center"
              to="/dashboard"
            >
              <Dashboard className="nav__icon" />
              <span className="title"> Dashboard</span>
            </Link>
          </li>

          <li className="flex__container--v-center">
            <Link
              className="nav__link flex__container--column-v-center"
              to="/publishers"
            >
              <PersonBoard className="nav__icon" />
              <span className="title">Publishers</span>
            </Link>
          </li>

          <li className="flex__container--v-center">
            <Link
              className="nav__link--active flex__container--column-v-center"
              to="/addshift"
            >
              <AddToList className="nav__icon" />
              <span className="title">Add Shift</span>
            </Link>
          </li>

          <li className="flex__container--v-center">
            <Link
              className="nav__link flex__container--column-v-center"
              to="/cartlocation"
            >
              <Location className="nav__icon" />
              <span className="title">Cart Locations</span>
            </Link>
          </li>
          {currentUser ? (
            <li className="flex__container--v-center">
              <Link
                to="/"
                className="nav__link flex__container--column-v-center"
              >
                <LogoutCircle className="nav__icon" />
                <span className="title">Log Out</span>
              </Link>
            </li>
          ) : (
            <li className="flex__container--v-center" onClick={loggedOut}>
              <Link
                to="/"
                className="nav__link flex__container--column-v-center"
              >
                <LogoutCircle className="nav__icon" />
                <span className="title">Log Out</span>
              </Link>
            </li>
          )}
          {console.log(currentUser)}
        </NavWrapper>
      </div>
    </Navigation>
  );
};

export default DashNav;
