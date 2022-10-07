import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import { createUserDocFromAuth, auth } from "../../utils/firebase.utils";
import SignUp from "../sign-up/sign-up.component";
import "./authentication.styles.scss";

const Authentication = () => {
  useEffect(() => {
    async function test() {
      const response = await getRedirectResult(auth);
      createUserDocFromAuth(response.user);
      console.log(response);
    }
    test();
    return;
  }, []);

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
