import React from "react";
import ProfileBlock from "../profile/index";
import styled from "styled-components";
import StyledButton from "../../button/button";
import { Bell } from "@styled-icons/boxicons-regular/Bell";

const HeaderContainer = styled.header`
  background-color: var(--clr-bg-color);
  padding: 0rem 1rem;
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
  transform: translateY(25%);
  left: 1rem;
  text-align: center;
  display: flex;
  svg {
    fill: var(--clr-primary-color);
    font-size: 3.5rem;

    padding-right: 2px;
  }
`;

const StyledSettings = styled(Bell)`
  color: var(--clr-bg-dark);
  width: clamp(35px, 6vw, 45px);
  fill: var(--clr-primary-color);
`;

const Header = ({ userProfile }) => {
  return (
    <HeaderContainer className="header flex__container--between-center">
      <div>
        <div>
          <ScreenReaderH1>Cart Ministry Scheduler App</ScreenReaderH1>
        </div>
        <LogoContainer>
          <ProfileBlock userProfile={userProfile} />
        </LogoContainer>
      </div>
      <StyledButton svg_interactive>
        <StyledSettings aria-hidden tabIndex="-1" />
      </StyledButton>
    </HeaderContainer>
  );
};

export default Header;
