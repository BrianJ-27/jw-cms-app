import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  --fp-weight-main: 500;
  background: var(--clr-primary-color);
  color: var(--clr-bg-light);
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.3s ease-out;
  padding: 18px;
  border-radius: 10px;
  letter-spacing: 1.1px;
  font-size: 1.2rem;
  font-weight: var(--fp-weight-main);
  margin-top: 1.5rem;

  &:hover {
    background: var(--clr-bg-dark);
    color: var(--clr-primary-color);
  }
  &:focus,
  &:focus-visible {
    outline: 3px dotted black;
  }
 */

  /* --- Upcoming Shift Button --- */
  ${(props) =>
    props.full_details &&
    css`
      --fp-weight-main: 400;
     font-size: clamp(0.8rem, 6vw, 1.3rem)
     font-weight: var(--fp-weight-main);
     margin-top: unset;
     padding: 10px;
    `};

  /* --- Re-useable SVG Button Styles --- */
  ${(props) =>
    props.svg_interactive &&
    css`
      border: none;
      background: none;
      cursor: pointer;
      margin-top: unset;
      padding: unset;
      &:focus {
        outline: 2px dashed #17171d;
        background-color: transparent;
        color: var(--clr-bg-color);
      }
      &:hover {
        background: unset;
        color: unset;
      }
    `};
  ${(props) =>
    props.full_details &&
    css`
      --fp-weight-main: 400;
     font-size: clamp(0.8rem, 6vw, 1.3rem)
     font-weight: var(--fp-weight-main);
     margin-top: unset;
     padding: 15px ;
    `};
`;

const CustomButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}> {children} </Button>;
};

export default CustomButton;
