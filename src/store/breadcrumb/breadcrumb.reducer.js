import { BREADCRUMB_TYPES } from "./breadcrumb.types";

export const BREAD_CRUMB_INITIAL_STATE = {
    'items' : null
}

export const breadCrumbReducer = (state = BREAD_CRUMB_INITIAL_STATE, action = {}) => {
    const {type, payload} = action;

    switch(type){
        case BREADCRUMB_TYPES.CREATE_NEW:
            return {...state, items: payload}
        default:
            return state;
    }
}