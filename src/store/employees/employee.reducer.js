import { EMPLOYEES_ACTION_TYPES } from "./employee.types";

export const EMPLOYEES_INITIAL_STATE = {
    employees: [],
    isLoading: false,
    error: null,
    searchObj: {}
}

export const employeesReduer = (state = EMPLOYEES_INITIAL_STATE, action={}) => {
    const { type, payload } = action;
    
    switch(type) {
        case EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_START:
            return { ...state, searchObj:payload, isLoading: true }
        case EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_SUCCESS:
            return { ...state, employees: payload, isLoading:false }
        case EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_FAILED:
            return { ...state, error: payload, isLoading: false }
        default:
            return state;
    }
}