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
    top: 0.75rem !important;
    font-size: 0.8em !important;
    letter-spacing: 1px !important;
    font-weight: bold !important;
    color: var(--clr-primary-color) !important;
  }

  ${(props) =>
    props.error &&
    css`
      border: 2px solid var(--clr-primary-error);
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

const ErrorMessage = styled.div`
  padding: 5px;
  position: relative;
  bottom: -20px;
  font-size: 12px;
  font-style: italic;
  text-align: right;
  color: var(--clr-primary-error);
`;

const ErrorIcon = styled.svg`
  position: absolute;
  top: -60px;
  right: 10px;
`;

const InputField = ({ label, id, errors, ...otherProps }) => {
  return (
    <React.Fragment>
      <StyledInput {...otherProps} id={id} />
      {label ? <StyledLabel htmlFor={id}>{label}</StyledLabel> : null}
      {errors && (
        <ErrorMessage>
          <p className="show__error-msg">{errors}</p>
          <ErrorIcon width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#FF7979" cx="12" cy="12" r="12" />
              <rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1" />
              <rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1" />
            </g>
          </ErrorIcon>
        </ErrorMessage>
      )}
    </React.Fragment>
  );
};

export default InputField;
