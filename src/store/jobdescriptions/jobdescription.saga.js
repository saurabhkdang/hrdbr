import { all, call, put, takeLatest } from "redux-saga/effects";
import { getJobDescriptions, getJobById, updateJDRecord, deleteRecord } from "../../utils/services";
import { fetchJDSuccess, fetchJDFailed, fetchJDRecordSuccess, fetchJDRecordFailed, updateJDRecordSuccess, updateJDRecordError, deleteJDSuccess, deleteJDError  } from "./jobdescription.action";
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

export function* updateJDRecordSaga({payload: data}) {
    console.log(data,'here');
    try {
        const success = yield call(updateJDRecord, data);
        yield put(updateJDRecordSuccess(success));
    } catch (error) {
        yield put(updateJDRecordError(error));
    }
}

export function* deleteJDSaga({payload: route}) {
    try {
        const success = yield call(deleteRecord, route);
        yield put(deleteJDSuccess(success));
    } catch (error) {
        yield put(deleteJDError(error));
    }
}

export function* onFetchJDs(){
    yield takeLatest(JD_ACTION_TYPES.FETCH_JD_START, fetchJDSync);
}

export function* onFetchJDRecord(){
    yield takeLatest(JD_ACTION_TYPES.FETCH_JOB_RECORD_START, fetchJDRecord);
}

export function* onUpdateJDRecord(){
    yield takeLatest(JD_ACTION_TYPES.UPDATE_JOB_DESCRIPTION, updateJDRecordSaga);
}

export function* onDeleteJD() {
    yield takeLatest(JD_ACTION_TYPES.DELETE_JOB_DESCRIPTION, deleteJDSaga)
}

export function* jdSaga(){
    yield all([call(onFetchJDs), call(onFetchJDRecord), call(onUpdateJDRecord), call(onDeleteJD)]);
}