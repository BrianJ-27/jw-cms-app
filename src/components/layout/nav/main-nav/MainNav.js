import React from "react";
import MainNavigation from "../nav-links/NavLinks";
import { Navigation, NavLogoContainer } from "../Nav.styles";
import NavLogo from "../../../logo/logo";

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
        <MainNavigation loggedOut={loggedOut} />
      </div>
    </Navigation>
  );
};

export default DashNav;
