import { all, call, put, takeLatest } from "redux-saga/effects";
import { getJobDescriptions } from "../../utils/services";
import { fetchJDSuccess, fetchJDFailed } from "./jobdescription.action";
import { JD_ACTION_TYPES } from "./jobdescription.types";

export function* fetchJDSync(){
    try {
        const jdArray = yield call(getJobDescriptions);
        yield put(fetchJDSuccess(jdArray));
    } catch (error) {
        yield put(fetchJDFailed(error));
    }
}

export function* onFetchJDs(){
    yield takeLatest(JD_ACTION_TYPES.FETCH_JD_START, fetchJDSync);
}

export function* jdSaga(){
    yield all([call(onFetchJDs)]);
}