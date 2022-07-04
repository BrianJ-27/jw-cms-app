import React from "react";
import ProfileBlock from "../profile/index";
import styled from "styled-components";
import StyledButton from "../../button/button";
import { ArrowIosDownward } from "@styled-icons/evaicons-solid/ArrowIosDownward";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: var(--clr-bg-light);
  border-bottom: 1px solid var(--clr-bg-shade);
  width: 100%;
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

const HeaderLogo = styled.p`
  --fp-weight-main: 600;
  font-weight: var(--fp-weight-main);
  color: var(--clr-primary-color);
  font-size: clamp(1rem, 6vw, 1.5rem);
  padding-left: 1rem;
`;

const LogoContainer = styled.div`
  left: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  justify-content: flex-end;
`;

const Options = styled(ArrowIosDownward)`
  width: 20px;
  margin: 5px 10px 5px 0px;
  color: var(--clr-primary-color);
`;

const Header = ({ userProfile }) => {
  return (
    <HeaderContainer className="header flex__container--between-center">
      <div>
        <ScreenReaderH1>Cart Ministry Scheduler App</ScreenReaderH1>
        <HeaderLogo>
          <abbr title="Congregation Ministry Scheduler">CMS </abbr>
        </HeaderLogo>
      </div>

      <LogoContainer>
        <ProfileBlock userProfile={userProfile} />
        <StyledButton svg_interactive>
          <Options aria-hidden />
        </StyledButton>
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
