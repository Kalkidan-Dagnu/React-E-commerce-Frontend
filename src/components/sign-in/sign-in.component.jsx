import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.compoenent";
import {
  createUserDocFromAuth,
  signinUserWithEmailAndPassword,
  signinWithGooglePopup,
} from "../../utils/firebase.utils";
import "./sign-in.styles.scss";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  const logOnWithGoogle = async () => {
    console.log("Pop up sign in");
    const response = await signinWithGooglePopup();
    createUserDocFromAuth(response.user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await signinUserWithEmailAndPassword(email, password);
      console.log(response);
      // await createUserDocFromAuth(response.user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Password is wrong!");
          break;
        case "auth/user-not-found":
          alert("User not found!");
          break;
        default:
          alert("athentication failed");
      }
      console.log(error);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={submitForm}>
        <div>
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
        </div>
        <div className="buttons-container">
          <Button children={`Sign In`} type="submit" buttonTypeClass="" />
          <Button
            children={`Google Sign in`}
            buttonTypeClass="google-sign-in"
            type="button"
            onClick={logOnWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
