import { all, call, put, takeLatest } from "redux-saga/effects";
import { getOTP, validateOTP } from "../../utils/services";
import { submitOTP, signInSuccess, signInFailed, gotOtp } from "./login.action";
import { LOGIN_ACTION_TYPES } from "./login.types";

export function* onValidateEmail({payload:email}){
    try {
        const loginResponse = yield call(getOTP, email);
        if(loginResponse.email){
            yield put(signInFailed(loginResponse.email));
        }else{
            yield put(gotOtp(loginResponse.otp));
        }
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onValidateOtp({payload: {email,otp} }){
    try {
        const otpResponse = yield call(validateOTP, email, otp);
        if(otpResponse.error){
            yield put(signInFailed(otpResponse.error));
        }else{
            yield put(signInSuccess(otpResponse.api_token,otpResponse.user));
        }
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