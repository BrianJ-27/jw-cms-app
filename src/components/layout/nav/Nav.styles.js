import styled from "styled-components";

// Main Dashboard Navigation Styles
export const Navigation = styled.nav`
  background-color: var(--clr-bg-light);
  border-radius: 15px 15px 0px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  div {
  }
  @media only screen and (min-width: 768px) {
    border-radius: 0px 15px 15px 0px;

    div {
      justify-content: unset;
      height: unset;
      flex-direction: column;
    }
  }
`;

// Nav ul Styles
export const NavWrapper = styled.ul`
  position: relative;
  list-style-type: none;
  width: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    padding: 5rem 0rem 0rem;
  }

  li {
    position: relative;
    z-index: 1;
    padding: 0px 9px;
    @media only screen and (min-width: 768px) {
      width: 100%;
      padding: unset;
    }
    &:nth-of-type(3)::before {
      content: "";
      display: block;
      background-color: var(--clr-bg-light);
      padding: 30px;
      transform: translateY(-35px);
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      @media only screen and (min-width: 768px) {
        display: none;
      }

      &:nth-of-type(5) {
        @media only screen and (min-width: 768px) {
          margin-top: auto;
        }
      }
    }
  }

  // Nav Link Styles
  a {
    --fp-weight-main: 500;
    font-size: clamp(0.55rem, 2vw, 1.1rem);
    font-weight: var(--fp-weight-main);
    text-decoration: none;

    &.nav__link--active {
      transform: translateY(-35px);
      @media only screen and (min-width: 768px) {
        transform: translateY(0px);
      }
    }
    &:link {
      color: var(--clr-bg-dark);
    }
    &:visited {
      color: var(--clr-bg-dark);
    }
    &:focus {
      color: var(--clr-bg-dark);
    }
    &:hover {
      color: var(--clr-primary-color);
      @media only screen and (min-width: 768px) {
        border-left: 4px solid var(--clr-primary-color);
      }
    }
    &:active,
    span:active {
      color: var(--clr-primary-color) !important;
      @media only screen and (min-width: 768px) {
        border-left: 4px solid var(--clr-primary-color);
      }
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
    }
    // Navigation Icon Styles
    svg {
      width: 25px;
      height: 25px;
      padding-bottom: 5px;
      @media only screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
        padding-bottom: 0px;
        transform: translateX(20px);
      }
    }
    // Navigation Icon Text Styles
    span {
      --fp-weight-main: 700;
      font-weight: var(--fp-weight-main);
      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;

export const NavLogoContainer = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 1.8rem;

    svg {
      fill: var(--clr-bg-dark);
      width: 40px;
      font-size: 2.5rem;
    }
    p {
      writing-mode: vertical-rl;
      text-orientation: upright;
      padding-left: 4px;
      font-family: Georgia, serif;
      letter-spacing: 1px;
      font-size: 2rem;
    }
  }
`;
