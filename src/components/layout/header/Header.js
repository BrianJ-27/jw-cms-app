import React from "react";
import ProfileBlock from "../profile/index";
import DashLogo from "../../reusable/logo/dashboardLogo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: var(--clr-bg-dark);
  position: relative;
  padding: 0rem 1.5rem;
  @media only screen and (min-width: 768px) {
    background-color: var(--clr-bg-color);
    padding-left: 1rem;
  }
`;

const ScreenReaderH1 = styled.h1`
  /*Hide h1 but make it accessible for screen readers*/
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 20%;
  bottom: translateY(-20%);
  left: 1rem;
  text-align: center;
  display: flex;
  svg {
    fill: var(--clr-accent-color);
    font-size: 3.5rem;
    border-right: 1px solid var(--clr-accent-color);
    padding-right: 2px;
  }

  p {
    font-size: 1rem;
    writing-mode: vertical-rl;
    text-orientation: upright;
    padding-left: 4px;
    font-family: Georgia, serif;
    letter-spacing: 1px;
    /* font-style: italic; */
  }
  @media only screen and (min-width: 768px) {
    position: unset;
    display: none;
  }
`;

const Header = ({ userProfile }) => {
  return (
    <HeaderContainer className="header flex__container">
      <div>
        <ScreenReaderH1>Cart Ministry Scheduler App</ScreenReaderH1>
        <p className="content__header">Welcome Back! {userProfile.firstName}</p>
      </div>

      <div>
        <ProfileBlock userProfile={userProfile} />
        <p className="content__profile">
          {userProfile.congregation} &#124;&nbsp;
          <span>Congregation</span>
        </p>
        <LogoContainer>
          <DashLogo />

          <p className="content__logo">
            {" "}
            <abbr title="Congregation Ministry Scheduler">CMS</abbr>
          </p>
        </LogoContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
