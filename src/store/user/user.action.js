import { CreateAction } from "../../utils/dispatch-action.utils";
import { USER_ACTION_TYPES } from "./user-action.types";

export const setCurrentUser = (user) =>
  CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

/**
 * 
 *     CHECK_USER_SESSION: "SET_USER_SESSION",
    GOOGLE_SIGN_IN_START: "GOOGLE_SIGN_IN_START",
    EMAIL_SIGN_IN_START: "EMAIL_SIGN_IN_START",
    SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
    SIGN_IN_FAILURE: "SIGN_IN_FAILURE"
 * 
 */

export const checkUserSession = () =>
  CreateAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  CreateAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  CreateAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, { email, password });

export const signInSuccess = (user) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailure = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);

export const signUpStart = (email, password, displayName) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (user, additionalDetails) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalDetails,
  });

export const signUpFailed = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  CreateAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
