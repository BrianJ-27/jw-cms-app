import React from "react";
import ProfileBlock from "../profile/index";
// import DashLogo from "../../logo/logo";
import styled from "styled-components";
import { Settings } from "@styled-icons/fluentui-system-regular/Settings";

const HeaderContainer = styled.header`
  background-color: var(--clr-bg-color);
  padding: 1.25rem 1rem 0rem;
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
  bottom: translateY(-20%);
  left: 1rem;
  text-align: center;
  display: flex;
  svg {
    fill: var(--clr-primary-color);
    font-size: 3.5rem;

    padding-right: 2px;
  }
  @media only screen and (min-width: 768px) {
    position: unset;
    display: none;
  }
`;

const StyledSettings = styled(Settings)`
  color: var(--clr-bg-dark);
  width: clamp(45px, 6vw, 50px);
  position: relative;
  top: -20px;
`;

const Header = ({ userProfile }) => {
  return (
    <HeaderContainer className="header flex__container--between">
      <div>
        <div>
          <ScreenReaderH1>Cart Ministry Scheduler App</ScreenReaderH1>
        </div>
        <LogoContainer>
          {/* <DashLogo />*/}
          <ProfileBlock userProfile={userProfile} />
        </LogoContainer>
      </div>
      <StyledSettings />
    </HeaderContainer>
  );
};

export default Header;
