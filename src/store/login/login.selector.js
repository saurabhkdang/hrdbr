//import { createSelector } from "reselect";

export const selectToken = (state) => state.login.token;
export const selectUser = (state) => state.login.user;
export const selectOtp = (state) => state.login.otp;
export const selectLoginError = (state) => state.login.error;