import React from "react";
import useForm from "./useForm";
import validate from "../../../helpers/validate";
import StyledButton from "../../button/button";
import FormField from "../../form-field/input-field";
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

const FormGroup = styled.div`
  position: relative;
  svg.form__icons {
    fill: var(--clr-bg-light);
  }
`;

const Form = ({ setShowLayout, setCurrentUser }) => {
  const { handleUpdate, handleLogin, formData, errors } = useForm(
    validate,
    setShowLayout
  );

  return (
    <FormContainer className="flex__container--column-center">
      <header className="title__primary--form">
        <h1 className="title__primary">Publisher Portal</h1>
      </header>

      <form method="post" action="#" onSubmit={handleLogin}>
        <fieldset style={{ padding: "0rem" }}>
          <legend className="content__form">Log in</legend>
          <div className="flex__container--column">
            <FormGroup>
              <FormField
                className="form__input"
                id="email"
                type="email"
                name="email"
                placeholder=" "
                onChange={(e) => handleUpdate(formData.email, e)}
                required
                label="Email"
                errors={errors.email}
              />
            </FormGroup>
            <FormGroup>
              <FormField
                className="form__input"
                id="password"
                type="password"
                name="password"
                placeholder=" "
                onChange={(e) => handleUpdate(formData.password, e)}
                required
                label="Password"
                errors={errors.password}
              />
            </FormGroup>

            <StyledButton>Sign In</StyledButton>
            <div>
              <p>
                <a href="#a" className="content__link">
                  Forgot Password&#63;
                </a>
              </p>
            </div>
          </div>
        </fieldset>
      </form>
    </FormContainer>
  );
};
export default Form;
