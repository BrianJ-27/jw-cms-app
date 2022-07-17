import React from "react";
import UlNavContainer from "../ul-container/NavContainer";
// import NavLogo from "../../../logo/logo";
import styled from "styled-components";

// Main Dashboard Navigation Styles
const Navigation = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  background-color: var(--clr-bg-light);
  padding: 0.5rem 1rem 1.2rem;
  border-radius: 15px 15px 0px 0px;
  border-top: 1px solid var(--clr-bg-shade);
  @media only screen and (min-width: 768px) {
    position: unset;
    border-radius: unset;
    border-top: unset;
    border-right: 1px solid var(--clr-bg-shade);
  }
`;

const DashNav = ({ userProfile }) => {
  return (
    <Navigation className="nav">
      <UlNavContainer />
    </Navigation>
  );
};

export default DashNav;
