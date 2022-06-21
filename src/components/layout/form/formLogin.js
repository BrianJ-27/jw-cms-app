import React from "react";
import useForm from "./useForm";
import validateForm from "../../../helpers/validate";
import StyledButton from "../../button/button";
import FormField from "../../form-field/input-field";
import styled from "styled-components";

const FormGroup = styled.div`
  position: relative;
`;

const FormLogin = ({ setShowLayout, submitForm }) => {
  const { handleUpdate, handleLogin, formData, errors } = useForm(
    validateForm,
    setShowLayout
  );

  return (
    <form action="index.html" method="get" onSubmit={handleLogin}>
      <fieldset style={{ padding: "0rem" }}>
        <legend className="content__form">Log in</legend>
        <div className="flex__container--column">
          <FormGroup>
            <FormField
              className="form__input"
              type="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={(e) => handleUpdate("email", e)}
              label="Email"
              aria-label="Email Field"
              id="email"
              errors={errors.email}
            />
          </FormGroup>
          <FormGroup>
            <FormField
              className="form__input"
              type="password"
              name="password"
              placeholder=" "
              value={formData.password}
              onChange={(e) => handleUpdate("password", e)}
              label="Password"
              aria-label="Password Field"
              id="password"
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
  );
};

export default FormLogin;
