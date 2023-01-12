import { MONTHLY_RATINGS_ACTION_TYPES } from './monthly-ratings.types';

export const MONTHLY_RATINGS_INITIAL_STATE = {
    monthly_ratings:[],
    isLoading:false,
    error:null
}

export const monthlyRatingsReducer = (state = MONTHLY_RATINGS_INITIAL_STATE, action={}) => {
    const {type, payload} = action;

    switch(type){
        case MONTHLY_RATINGS_ACTION_TYPES.FETCH_MONTHLY_RATINGS_START:
            return {...state, isLoading:true};
        case MONTHLY_RATINGS_ACTION_TYPES.FETCH_MONTHLY_RATINGS_SUCCESS:
            return {...state, monthly_ratings:payload, isLoading:false};
        case MONTHLY_RATINGS_ACTION_TYPES.FETCH_MONTHLY_RATINGS_FAILED:
            return {...state, error: payload, isLoading:false}
        default:
            return state;
    }
}