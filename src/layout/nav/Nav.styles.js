import styled from "styled-components";

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
        border-top: 1px solid var(--clr-bg-shade);
        margin-top: auto;
      }
    }
  }

  // Nav Link Styles
  a {
    --fp-weight-main:600;
    &.nav__link--active {
      color: var(--clr-primary-color);
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
