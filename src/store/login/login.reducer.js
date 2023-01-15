import { LOGIN_ACTION_TYPES } from "./login.types";

const token = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

export const LOGIN_INITIAL_STATE = {
    token,
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
            localStorage.setItem('userToken', null);
            return {...state,token:null,user:null,otp:null}
        case LOGIN_ACTION_TYPES.LOGIN_IN_SUCCESS:
            localStorage.setItem('userToken', payload.token);
            return {...state, token: payload.token, user: payload.user, isLoading:false, error:null}
        case LOGIN_ACTION_TYPES.LOGIN_IN_FAILED:
            return {...state, error: payload, isLoading:false}
        case LOGIN_ACTION_TYPES.LOGIN_ERROR_HIDE:
            return {...state, error:null, isLoading:false}
        default:
            return state;
    }
}