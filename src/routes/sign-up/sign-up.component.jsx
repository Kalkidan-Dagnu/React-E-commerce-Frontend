import { useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.compoenent";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
import "./sign-up.styles.scss";
const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password Mismatch");
      return;
    }
    try {
      const response = await createAuthUserFromEmailAndPassword(
        email,
        password
      );
      console.log(response);
      await createUserDocFromAuth(response.user, { displayName });
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={submitForm}>
        <div>
          <FormInput
            label="Display Name"
            required
            type="text"
            value={displayName}
            onChange={handleChange}
            name="displayName"
          />

          <FormInput
            label="Email"
            required
            type="text"
            value={email}
            onChange={handleChange}
            name="email"
          />

          <FormInput
            label="Password"
            required
            type="password"
            value={password}
            onChange={handleChange}
            name="password"
          />
          <FormInput
            label="Confirm Password"
            required
            type="password"
            value={confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
          />
        </div>
        <Button
          children={`Sign Up`}
          type="submit"
          buttonTypeClass=""
          onClick={submitForm}
        />

        {/* <button type="submit">Sign Up</button> */}
      </form>
    </div>
  );
};

export default SignUp;
