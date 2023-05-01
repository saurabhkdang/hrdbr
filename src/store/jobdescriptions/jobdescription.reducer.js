import { JD_ACTION_TYPES } from "./jobdescription.types";

export const JD_INITIAL_STATE = {
    jd: [],
    isLoading: false,
    error: null,
    id:null,
    record:null,
    record_id:null,
    success:null
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
        case JD_ACTION_TYPES.UPDATE_ROLES:
            return {...state, isLoading:true }
        case JD_ACTION_TYPES.UPDATE_JOB_DESCRIPTION_SUCCESS:
            return {...state, success: payload.success,record_id: payload.record_id, isLoading:false}
        case JD_ACTION_TYPES.UPDATE_JOB_DESCRIPTION_ERROR:
            return {...state, error: payload.error, isLoading:false}
        case JD_ACTION_TYPES.RESET_RECORD_ID:
            return {...state, record_id: payload }
        case JD_ACTION_TYPES.DELETE_JOB_DESCRIPTION:
            return {...state, isLoading: true}
        case JD_ACTION_TYPES.DELETE_JOB_DESCRIPTION_SUCCESS:
            return {...state, isLoading: false, success: payload.success}
        case JD_ACTION_TYPES.DELETE_JOB_DESCRIPTION_ERROR:
            return {...state, isLoading: false, error: payload.error}
        case JD_ACTION_TYPES.HIDE_ALERT:
            if (payload === 'success')
            return {...state, success:null, isLoading:false}
            else
            return {...state, error:null, isLoading:false}
        default:
            return state;
    }
}