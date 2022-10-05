import {
  signinWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase.utils";
const SignIn = () => {
  const logOnWithGoogle = async () => {
    const response = await signinWithGooglePopup();
    createUserDocFromAuth(response.user);
  };
  return (
    <>
      <h2>Sign in page</h2>
      <button onClick={logOnWithGoogle}>Sign in with google</button>
    </>
  );
};

export default SignIn;
