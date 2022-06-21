import React from "react";
import CustomForm from "./formLogin";
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

const Form = ({ setShowLayout, setCurrentUser }) => {
  return (
    <FormContainer className="flex__container--column-center">
      <header className="title__primary--form">
        <h1 className="title__primary">Publisher Portal</h1>
      </header>

      <CustomForm setShowLayout={setShowLayout} />
    </FormContainer>
  );
};
export default Form;
