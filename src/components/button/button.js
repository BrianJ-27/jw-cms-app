import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  --fp-weight-main: 700;
  background: var(--clr-primary-color);
  color: var(--clr-bg-light);
  outline: none;
  border: none;
  transition: all 0.3s ease-out;
  border-radius: 10px;
  padding: 18px;
  letter-spacing: 1.1px;
  font-size: 1.2rem;
  font-weight: var(--fp-weight-main);
  margin-top: 1.5rem;
  cursor: pointer;
  &:hover {
    background: var(--clr-bg-dark);
    color: var(--clr-primary-color);
  }
  &:focus,
  &:focus-visible {
    outline: 3px dotted black;
  }
  ${(props) =>
    props.add_shift &&
    css`
      background-color: var(--clr-accent-color);
      color: var(--clr-bg-light);
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
