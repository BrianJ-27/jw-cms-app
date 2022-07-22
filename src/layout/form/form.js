import React from "react";
import FormLogin from "./formLogin";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: clamp(1.5rem, 3vw, 3rem);
  @media only screen and (min-width: 768px) {
    max-width: 550px;
  }
`;

const Form = ({ userProfile }) => {
  return (
    <FormContainer className="flex__container--column-center">
      <header>
        <h1 className="title__primary--form">Publisher Portal</h1>
      </header>

      <FormLogin userProfile={userProfile} />
    </FormContainer>
  );
};
export default Form;
