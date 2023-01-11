import { HOLIDAYS_ACTION_TYPES } from "./holiday.types";

export const HOLIDAYS_INITIAL_STATE = {
    holidays: [],
    isLoading: false,
    error:null
}

export const holidaysReducer = (state = HOLIDAYS_INITIAL_STATE, action={}) => {
    const {type, payload} = action;

    switch(type){
        case HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_START:
            return {...state, isLoading: true};
        case HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_SUCCESS:
            return {...state, holidays: payload, isLoading:false};
        case HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_FAILED:
            return {...state, error: payload, isLoading:false};
        default:
            return state;
    }
}