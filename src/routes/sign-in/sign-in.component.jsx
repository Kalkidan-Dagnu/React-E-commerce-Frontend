import { getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  signinWithGooglePopup,
  createUserDocFromAuth,
  signinWithGoogleRedirect,
  auth,
} from "../../utils/firebase.utils";
import SignUp from "../sign-up/sign-up.component";

const SignIn = () => {
  useEffect(() => {
    async function test() {
      const response = await getRedirectResult(auth);
      createUserDocFromAuth(response.user);
      console.log(response);
    }
    test();
    return;
  }, []);

  const logOnWithGoogle = async () => {
    const response = await signinWithGooglePopup();
    createUserDocFromAuth(response.user);
  };

  return (
    <>
      <h2>Sign in page</h2>
    
      <button onClick={logOnWithGoogle}>Sign in with google pop up</button>
      <button onClick={signinWithGoogleRedirect}>
        Sign in with google redirect
      </button>
      <SignUp />
    </>
  );
};

export default SignIn;
