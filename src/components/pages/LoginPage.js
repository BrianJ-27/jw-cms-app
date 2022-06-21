import React from "react";
import Form from "../layout/form/form";
import styled from "styled-components";
import HeroImage from "../hero-image/heroImg";

const LoginScreenWrapper = styled.main`
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 9;
  height: 45%;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 50%;
    position: absolute;
    left: 0;
    height: 100vh;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 55%;
  width: 100%;
  z-index: 9;
  @media only screen and (min-width: 768px) {
    width: 50%;
    position: absolute;
    right: 0;
    height: 100vh;
  }
`;

const ImageQuote = styled.div`
  position: absolute;
  width: 50%;
  background: transparent;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: var(--clr-bg-light);
  z-index: 1;
  blockquote p {
  }
`;

const LoginPage = ({ setShowLayout, setCurrentUser }) => {
  return (
    <LoginScreenWrapper className="flex__container--column-centered-fully">
      <ImageContainer>
        <ImageQuote>
          <blockquote>
            <p className="content__quote">
              "...Do the work of an{" "}
              <span className="content__highlight">Evangelizer</span>, fully
              accomplish your ministry."
            </p>
            <cite className="content__author"> - 2 Timothy 4:2</cite>
          </blockquote>
        </ImageQuote>
        <HeroImage />
      </ImageContainer>
      <FormContainer id="form">
        <Form setShowLayout={setShowLayout} setCurrentUser={setCurrentUser} />
      </FormContainer>
    </LoginScreenWrapper>
  );
};

export default LoginPage;
