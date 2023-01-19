import { all, call, put, takeLatest } from "redux-saga/effects";
import { getJobDescriptions, getJobById } from "../../utils/services";
import { fetchJDSuccess, fetchJDFailed, fetchJDRecordSuccess, fetchJDRecordFailed } from "./jobdescription.action";
import { JD_ACTION_TYPES } from "./jobdescription.types";

export function* fetchJDSync(){
    try {
        const jdArray = yield call(getJobDescriptions);
        yield put(fetchJDSuccess(jdArray));
    } catch (error) {
        yield put(fetchJDFailed(error));
    }
}

export function* fetchJDRecord({payload: id}) {
    try {
        const jdRecord = yield call(getJobById, id);
        yield put(fetchJDRecordSuccess(jdRecord));
    } catch (error) {
        yield put(fetchJDRecordFailed(error));
    }
}

export function* onFetchJDs(){
    yield takeLatest(JD_ACTION_TYPES.FETCH_JD_START, fetchJDSync);
}

export function* onFetchJDRecord(){
    yield takeLatest(JD_ACTION_TYPES.FETCH_JOB_RECORD_START, fetchJDRecord);
}

export function* jdSaga(){
    yield all([call(onFetchJDs), call(onFetchJDRecord)]);
}