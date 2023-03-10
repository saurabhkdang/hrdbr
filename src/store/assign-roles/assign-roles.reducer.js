import { ASSIGN_ROLES_ACTION_TYPES } from "./assign-roles.types";

export const ASSIGN_ROLES_INITIAL_STATE = {
    assign_roles: [],
    isLoading: false,
    error: null,
    role:null,
    success:null
}

export const assignRolesReducer = (state = ASSIGN_ROLES_INITIAL_STATE, action={}) => {
    const {type, payload} = action;

    switch(type){
        case ASSIGN_ROLES_ACTION_TYPES.FETCH_ASSIGN_ROLES_START:
            return {...state, role: payload, isLoading: true};
        case ASSIGN_ROLES_ACTION_TYPES.FETCH_ASSIGN_ROLES_SUCCESS:
            return {...state, assign_roles: payload, isLoading:false};
        case ASSIGN_ROLES_ACTION_TYPES.FECH_ASSIGN_ROLES_FAILED:
            return {...state, error: payload, isLoading:false}
        case ASSIGN_ROLES_ACTION_TYPES.UPDATE_ROLES:
            return {...state, isLoading:true }
        case ASSIGN_ROLES_ACTION_TYPES.UPDATE_ROLES_SUCCESS:
            return {...state, success: payload.success, isLoading:false}
        case ASSIGN_ROLES_ACTION_TYPES.UPDATE_ROLES_ERROR:
            return {...state, error: payload.error, isLoading:false}
        case ASSIGN_ROLES_ACTION_TYPES.HIDE_ALERT:
            if (payload === 'success')
            return {...state, success:null, isLoading:false}
            else
            return {...state, error:null, isLoading:false}
        default:
            return state;
    }
}