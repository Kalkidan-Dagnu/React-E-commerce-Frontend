import { useState } from "react";
import { useDispatch } from "react-redux";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.compoenent";
import { signUpStart } from "../../store/user/user.action";

import { SignUpContainer } from "./sign-up.styles";

const defaultFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
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
    // try {
    //   const { user } = await createAuthUserFromEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserDocFromAuth(user, { displayName });
    //   resetFormFields();
    // } catch (error) {}

    //REDUX SAGA CALL FOR ASYNC FUNCTION
    dispatch(signUpStart(email, password, displayName));
    resetFormFields();
  };
  return (
    <SignUpContainer>
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
          buttonType={BUTTON_TYPE_CLASSES.base}
          onClick={submitForm}
        />

        {/* <button type="submit">Sign Up</button> */}
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
