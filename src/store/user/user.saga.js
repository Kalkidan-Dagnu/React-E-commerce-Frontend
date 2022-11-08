import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  createAuthUserFromEmailAndPassword,
  createUserDocFromAuth,
  getCurrentUser,
  signinUserWithEmailAndPassword,
  signinWithGooglePopup,
  userSignOut,
} from "../../utils/firebase.utils";
import { USER_ACTION_TYPES } from "./user-action.types";
import {
  signInFailure,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.action";

function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield call(signinWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signinUserWithEmailAndPassword,
      email,
      password
    );
    console.log("user", user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(error);
  }
}

export function* emailSignInStart() {
  yield takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  );
}

function* signInUserAfterSignUp({ payload: { user, additionalDetails } }) {
  console.log("User", user, additionalDetails);
  yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onUserSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInUserAfterSignUp);
}

function* userSignUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserFromEmailAndPassword,
      email,
      password
    );
    // yield getSnapshotFromUserAuth(user, displayName);
    console.log("SIGN UP", user, displayName);
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* userSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, userSignUp);
}

function* onUserSignOut() {
  try {
    yield userSignOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* signOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, onUserSignOut);
}

function* isAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* checkUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isAuthenticated);
}

export function* userSagas() {
  yield all([
    call(checkUserSession),
    call(googleSignInStart),
    call(emailSignInStart),
    call(userSignUpStart),
    call(onUserSignUpSuccess),
    call(signOut),
  ]);
}
