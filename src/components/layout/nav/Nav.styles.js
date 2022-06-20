import styled from "styled-components";

// Main Dashboard Navigation Styles
export const Navigation = styled.nav`
  background: linear-gradient(
    to right,
    var(--clr-primary-color),
    var(--clr-bg-dark)
  );
  padding: 0 1rem 0 0.5rem;
  @media only screen and (min-width: 768px) {
    height: 100%;
    position: relative;
  }
`;

// Nav ul Styles
export const NavWrapper = styled.ul`
  list-style-type: none;
  height: 100%;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    justify-content: unset;
    padding-top: 15rem;
  }

  // Nav List Item Styles
  li {
    display: flex;
    align-items: center;
    @media only screen and (min-width: 768px) {
      &:nth-of-type(5) {
        border-top: 1px solid var(--clr-accent-color);
        margin-top: auto;
      }
    }
  }

  // Nav Link Styles
  a {
    &.nav__link--active {
      color: var(--clr-bg-light);
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.5s;
    &:link {
      color: var(--clr-bg-light);
    }
    &:visited {
      color: var(--clr-accent-color);
    }
    &:focus {
      color: var(--clr-bg-light);
    }
    &:hover {
      color: var(--clr-bg-light);
      text-decoration: underline;
    }
    &:active {
      color: var(--clr-bg-dark);
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
        padding-right: 5px;
        padding-bottom: 0px;
      }
    }
  }
`;

export const NavLogoContainer = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: flex;
    /* align-items: center; */
    background-color: black;
    padding: 1rem;
    position: absolute;
    left: 0;
    right: 0;
    font-size: 7rem;
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
