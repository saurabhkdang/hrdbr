import { JD_ACTION_TYPES } from "./jobdescription.types";

export const JD_INITIAL_STATE = {
    jd: [],
    isLoading: false,
    error: null,
    id:null,
    record:null
}

export const jdReducer = (state = JD_INITIAL_STATE, action={}) => {
    const {type, payload} = action;

    switch(type){
        case JD_ACTION_TYPES.FETCH_JD_START:
            return {...state, isLoading: true};
        case JD_ACTION_TYPES.FETCH_JD_SUCCESS:
            return {...state, jd: payload, isLoading:false};
        case JD_ACTION_TYPES.FETCH_JD_FAILED:
            return {...state, error: payload, isLoading:false};
        case JD_ACTION_TYPES.FETCH_JOB_RECORD_START:
            return {...state, id: payload, isLoading:true}
        case JD_ACTION_TYPES.FETCH_JOB_RECORD_SUCCESS:
            return {...state, record: payload, isLoading:false}
        case JD_ACTION_TYPES.FETCH_JOB_RECORD_FAILED:
            return {...state, error: payload, isLoading:false}
        default:
            return state;
    }
}