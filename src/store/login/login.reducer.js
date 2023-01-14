import { LOGIN_ACTION_TYPES } from "./login.types";

export const LOGIN_INITIAL_STATE = {
    token: null,
    error: null,
    isLoading:false,
    user:null,
    otp:null,
}

export const loginReducer = (state = LOGIN_INITIAL_STATE, action={}) => {
    const {type, payload} = action;

    switch(type){
        case LOGIN_ACTION_TYPES.LOGIN_IN_START:
            return {...state, isLoading:true }
        case LOGIN_ACTION_TYPES.LOGIN_OTP:
            return {...state, otp: payload, isLoading:false}
        case LOGIN_ACTION_TYPES.LOGOUT_START:
            return {...state,token:null,user:null,otp:null}
        case LOGIN_ACTION_TYPES.LOGIN_IN_SUCCESS:
            return {...state, token: payload.token, user: payload.user, isLoading:false}
        case LOGIN_ACTION_TYPES.LOGIN_IN_FAILED:
            return {...state, error: payload, isLoading:false}
        default:
            return state;
    }
}