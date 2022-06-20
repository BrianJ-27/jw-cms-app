import React from "react";
import {
  MdOutlineHouse,
  MdAddchart,
  MdOutlinePersonSearch,
  MdMap,
} from "react-icons/md";
import { BiDoorOpen } from "react-icons/bi";
import { Link } from "react-router-dom";
import { NavWrapper, Navigation, NavLogoContainer } from "./Nav.styles";
import NavLogo from "../../logo/dashboardLogo";

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
      <div className="flex__container--between">
        <NavLogoContainer>
          <NavLogo />

          <p className="content__logo">
            {" "}
            <abbr title="Congregation Ministry Scheduler">CMS </abbr>
          </p>
        </NavLogoContainer>
        <NavWrapper className="flex__container--between">
          <li>
            <Link className="nav__link link__text" to="/dashboard">
              <MdOutlineHouse className="nav__icon" />
              <span className="title"> Dashboard</span>
            </Link>
          </li>

          <li>
            <Link className="nav__link link__text" to="/publishers">
              <MdOutlinePersonSearch className="nav__icon" />
              <span className="title">Publishers</span>
            </Link>
          </li>

          <li>
            <Link className="nav__link--active link__text" to="/addshift">
              <MdAddchart className="nav__icon" />
              <span className="title">Add Shift</span>
            </Link>
          </li>

          <li>
            <Link className=" nav__link link__text" to="/cartlocation">
              <MdMap className="nav__icon" />
              <span className="title">Cart Locations</span>
            </Link>
          </li>
          {currentUser ? (
            <li>
              <Link to="/" className=" nav__link link__text">
                <BiDoorOpen className="nav__icon" />
                <span className="title">Log Out</span>
              </Link>
            </li>
          ) : (
            <li onClick={loggedOut}>
              <Link to="/" className=" nav__link link__text">
                <BiDoorOpen className="nav__icon" />
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
