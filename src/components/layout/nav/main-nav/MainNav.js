import React from "react";
import NavContainer from "../nav-containter/NavContainer";
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
      <div style={{ height: "100%" }}>
        <NavLogoContainer className="flex__container--column-between">
          <NavLogo />

          {/** <p className="content__logo">
            {" "}
            <abbr title="Congregation Ministry Scheduler">CMS </abbr>
          </p> */}
        </NavLogoContainer>
        <NavContainer loggedOut={loggedOut} />
      </div>
    </Navigation>
  );
};

export default DashNav;
