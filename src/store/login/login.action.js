import { createAction } from "../../utils/reducer/reducer.utils";
import { LOGIN_ACTION_TYPES } from "./login.types";

export const signInStart = (email) => createAction(LOGIN_ACTION_TYPES.LOGIN_IN_START, email);
export const gotOtp = (otp) => createAction(LOGIN_ACTION_TYPES.LOGIN_OTP, otp);
export const submitOTP = (email, otp) => createAction(LOGIN_ACTION_TYPES.LOGIN_IN_SUBMIT_OTP, {email, otp});
export const signInSuccess = (token, user) => createAction(LOGIN_ACTION_TYPES.LOGIN_IN_SUCCESS, {token, user});
export const signInFailed = (error) => createAction(LOGIN_ACTION_TYPES.LOGIN_IN_FAILED, error);
export const signOutStart = () => createAction(LOGIN_ACTION_TYPES.LOGOUT_START);
export const hideLoginError = () => createAction(LOGIN_ACTION_TYPES.LOGIN_ERROR_HIDE);