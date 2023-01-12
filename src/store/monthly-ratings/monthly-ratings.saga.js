import { all, call, put, takeLatest } from "redux-saga/effects";
import { getMonthlyRatings } from "../../utils/services";
import {fetchMonthlyRatingsSuccess, fetchMonthlyRatingsFailed} from './monthly-ratings.action';
import { MONTHLY_RATINGS_ACTION_TYPES } from "./monthly-ratings.types";

export function* fetchMonthlyRatingsSync(){
    try {
        const monthlyRatingsArray = yield call(getMonthlyRatings);
        yield put(fetchMonthlyRatingsSuccess(monthlyRatingsArray));
    } catch (error) {
        yield put(fetchMonthlyRatingsFailed(error));
    }
}

export function* onFetchMonthlyRatings(){
    yield takeLatest(MONTHLY_RATINGS_ACTION_TYPES.FETCH_MONTHLY_RATINGS_START, fetchMonthlyRatingsSync);
}

export function* monthlyRatingsSaga(){
    yield all([call(onFetchMonthlyRatings)]);
}