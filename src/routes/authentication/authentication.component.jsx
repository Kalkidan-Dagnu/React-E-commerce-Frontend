import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import { createUserDocFromAuth, auth } from "../../utils/firebase.utils";
import SignUp from "../sign-up/sign-up.component";
import { AuthenticationContainer } from "./authentication.styles";

const Authentication = () => {
  // useEffect(() => {
  //   async function test() {
  //     const { user } = await getRedirectResult(auth);
  //     createUserDocFromAuth(user);
  //   }
  //   test();
  //   return;
  // }, []);

  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default Authentication;
