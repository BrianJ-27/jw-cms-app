import React from "react";
import FormLogin from "../layout/form-login/form";
import styled from "styled-components";
import HeroImage from "../hero-image/heroImg";

const LoginScreenWrapper = styled.main`
  height: 100vh;
`;

const FormContainer = styled.div`
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
  z-index: 0;
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
    color: var(--clr-bg-light);
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;

const LoginPage = ({ setShowLayout, setCurrentUser }) => {
  return (
    <LoginScreenWrapper className="flex__container--column-centered-fully">
      <ImageContainer>
        <ImageQuote>
          <blockquote>
            <p>
              ...Do the work of an Evangelizer, fully accomplish your ministry.
            </p>
            <cite> - 2 Timothy 4:2</cite>
          </blockquote>
        </ImageQuote>
        <HeroImage />
      </ImageContainer>
      <FormContainer id="form">
        <FormLogin
          setShowLayout={setShowLayout}
          setCurrentUser={setCurrentUser}
        />
      </FormContainer>
    </LoginScreenWrapper>
  );
};

export default LoginPage;
