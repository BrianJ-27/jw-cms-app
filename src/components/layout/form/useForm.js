import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useForm = (validate) => {
  // Set initial Form State values to empty strings
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Set empty object to use later in the validate function
  const [errors, setErrors] = useState({});

  // Handles the onchange event when users type in input values
  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
    });
  };

  let history = useNavigate();

  // Handles the action when user clicks on the form button and resets the form
  const handleSignin = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    console.log(formData.email);
    console.log(formData.password);
    history("/dashboard/home");
  };

  return { handleUpdate, handleSignin, formData, errors };
};

export default useForm;
