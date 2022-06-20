import React from "react";
import styled, { css } from "styled-components";

const StyledInput = styled.input`
  border-radius: 10px;
  border-width: 0.5px;
  padding: 15px;
  margin-top: 1rem;
  width: 100%;
  background: transparent;
  border-bottom: 2px solid var(--clr-primary-color);
  color: var(--clr-bg-dark);
  font-family: inherit;
  &::placeholder {
    font-size: 1.5rem;
  }

  &:focus,
  &:focus-visible {
    outline: 1px dotted var(--clr-primary-color);
  }

  &.form__input:focus ~ label,
  &.form__input:not(:placeholder-shown).form__input:not(:focus) ~ label {
    top: 0.75rem;
    font-size: 0.8em;
    letter-spacing: 1px;
    font-weight: bold;
    color: var(--clr-primary-color);
  }

  ${(props) =>
    props.error &&
    css`
      border: 2px solid red;
    `};
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 2.6rem;
  color: var(--clr-bg-dark);
  top: 2rem;
  /* cursor: text; */
  transition: top 200ms ease-in, left 200ms ease-in;
  background-color: var(--clr-bg-color);
`;

const InputField = ({ label, id, errors, ...otherProps }) => {
  return (
    <React.Fragment>
      <StyledInput {...otherProps} id={id} />
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
    </React.Fragment>
  );
};

export default InputField;
