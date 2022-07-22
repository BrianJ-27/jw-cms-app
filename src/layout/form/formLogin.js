import React from "react";
import useForm from "./useForm";
import validateForm from "../../helpers/validate";
import StyledButton from "../../components/button/button";
import FormField from "../../components/form-field/input-field";
import styled from "styled-components";

const FormGroup = styled.div`
  position: relative;
`;

const FormLegend = styled.legend`
  --fp-weight-main: 600;
  font-size: clamp(1.3rem, 3vw, 1.2rem);
  font-weight: var(--fp-weight-main)
  margin-top: 2rem;
  line-height: 1.5;
  color: var(--clr-bg-dark);
`;

const FormLink = styled.a`
  color: var(--clr-bg-dark);
  margin-top: 0.5rem;
`;

const FormLogin = ({ userProfile }) => {
  const { handleUpdate, handleSignin, formData, errors } =
    useForm(validateForm);

  return (
    <form action="index.html" method="get" onSubmit={handleSignin}>
      <fieldset style={{ padding: "0rem" }}>
        <FormLegend>Log in</FormLegend>
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
              <FormLink href="#a">Forgot Password&#63;</FormLink>
            </p>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default FormLogin;
