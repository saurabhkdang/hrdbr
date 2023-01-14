import { all, call, put, takeLatest } from "redux-saga/effects";
import { getOTP, validateOTP } from "../../utils/services";
import { submitOTP, signInSuccess, signInFailed } from "./login.action";
import { LOGIN_ACTION_TYPES } from "./login.types";

export function* onValidateEmail({payload:email}){
    try {
        const loginResponse = yield call(getOTP, email);
        if(loginResponse.email){
            //put(signInFailed(loginResponse.email));
            alert(loginResponse.email);
        }
        alert(loginResponse.otp);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onValidateOtp({payload: {email,otp} }){
    console.log(email, otp);
    try {
        const otpResponse = yield call(validateOTP, email, otp);
        if(otpResponse.email || otpResponse.error || otpResponse.otp){
            //put(signInFailed(loginResponse.email));
            alert('Some Error');
        }
        yield put(signInSuccess(otpResponse.api_token));
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onLoginStart(){
    yield takeLatest(LOGIN_ACTION_TYPES.LOGIN_IN_START, onValidateEmail);
}

export function* onSubmitOtp(){
    yield takeLatest(LOGIN_ACTION_TYPES.LOGIN_IN_SUBMIT_OTP, onValidateOtp);
}

export function* loginSaga(){
    yield all([call(onLoginStart), call(onSubmitOtp)]);
}