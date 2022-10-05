// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBTrCCvng-G3C98HQukvWRbZHeE56R2LBk",
  authDomain: "lil-clothing-db.firebaseapp.com",
  projectId: "lil-clothing-db",
  storageBucket: "lil-clothing-db.appspot.com",
  messagingSenderId: "752072657245",
  appId: "1:752072657245:web:fa5d2a887c63dc70ce00b4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})
export const auth = getAuth();
export const signinWithGooglePopup = () => signInWithPopup(auth,provider);

const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
const userDocRef = doc(db,'users',userAuth.uid);
const userSnapshot = await getDoc(userDocRef)
console.log(userSnapshot.exists())
if(!userSnapshot.exists()) {
  const {displayName, email} = userAuth;
  const createdAt = new Date();
  try {
   await setDoc(
     userDocRef, {
       displayName,
       email,
       createdAt
     }
    );
  } catch(error) {}
return  userDocRef;
}
}

