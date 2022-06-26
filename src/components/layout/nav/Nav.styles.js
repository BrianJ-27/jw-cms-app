import styled from "styled-components";

// Main Dashboard Navigation Styles
export const Navigation = styled.nav`
  background-color: var(--clr-bg-light);
  padding: 0 1rem 0 0.5rem;
  border-radius: 15px 15px 0px 0px;
  @media only screen and (min-width: 768px) {
    border-radius: 0px 15px 15px 0px;
  }
`;
// Nav ul Styles
export const NavWrapper = styled.ul`
position: relative;
  list-style-type: none;
  width: 100%;
  height: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: unset;
    padding-top: 5rem;
  }

  // Nav List Item Styles
  li {
    display: flex;
    align-items: center;
    &:nth-of-type(3)::before {
      content: ""
        display: block;
        width: 30px;
        background-color: var(--clr-bg-light);
        background: blue;
        position: absolute;
        top: 0px; 
     
    }
    @media only screen and (min-width: 768px) {
      &:nth-of-type(5) {
        border-top: 1px solid var(--clr-primary-color);
        margin-top: auto;
        padding-bottom: 2rem;
      }
    }
  }

  // Nav Link Styles
  a {
    --fp-weight-main:600;
    &.nav__link--active {
      color: var(--clr-bg-light);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.5s;
    font-size: clamp(0.5rem, 2.5vw, .9rem);

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
    }
    &:active {
      color: var(--clr-bg-dark);
    }

    @media only screen and (min-width: 768px) {
      flex-direction: row;
      font-weight: var(--fp-weight-main);
    }
    // Navigation Icon Styles
    svg {
      width: 25px;
      height: 25px;
      padding-bottom: 5px;
      @media only screen and (min-width: 768px) {
        width: 30px;
        height: 30px;
        padding-right: 5px;
        padding-bottom: 0px;
      }
    }
  }
`;

// Nav Logo Container
export const NavLogoContainer = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    svg {
      fill: var(--clr-accent-color);
      border-right: 2px solid var(--clr-accent-color);
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
