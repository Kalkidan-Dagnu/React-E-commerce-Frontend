import { useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.compoenent";
import {
  createUserDocFromAuth,
  signinUserWithEmailAndPassword,
  signinWithGooglePopup,
} from "../../utils/firebase.utils";
import { ButtonsContainer, SignInContainer } from "./sign-in.styles";

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
    const { user } = await signinWithGooglePopup();
    createUserDocFromAuth(user);
    // setCurrentUser(user);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const submitForm = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signinUserWithEmailAndPassword(email, password);
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
    }
  };
  return (
    <SignInContainer>
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
        <ButtonsContainer>
          <Button
            children={`Sign In`}
            type="submit"
            buttonTypeClass={BUTTON_TYPE_CLASSES.base}
          />
          <Button
            children={`Google Sign in`}
            buttonTypeClass={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logOnWithGoogle}
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
