import React from "react";
import { GiWhiteBook } from "react-icons/gi";
import styled from "styled-components";

// Navigation SVG Icon Styles
const StyledLogo = styled(GiWhiteBook)`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    fill: var(--clr-bg-dark);
    font-size: 3.5rem;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LogoContainer = styled.div`
  @media only screen and (min-width: 768px) {
    &::after {
      content: "";
      display: block;
      width: 100%;
      color: var(--clr-bg-shade);
      margin: 0 auto;
      border-bottom: 1px solid var(--clr-bg-shade);
      padding-top: 15px;
      position: relative;
      top: 55px;
    }
  }
`;

const dashboardLogo = () => {
  return (
    <LogoContainer>
      <StyledLogo />
    </LogoContainer>
  );
};

export default dashboardLogo;
