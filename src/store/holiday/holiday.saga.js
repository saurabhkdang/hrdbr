import { all, call, put, takeLatest } from "redux-saga/effects";
import { getHolidays, getHolidayById } from "../../utils/services";
import {fetchHolidaysSuccess, fetchHolidaysFailed, fetchHolidayRecordSuccess, fetchHolidayRecordFailed} from './holiday.action';
import { HOLIDAYS_ACTION_TYPES } from "./holiday.types";

export function* fetchHolidaysSync(){
    try {
        const holidaysArray = yield call(getHolidays);
        yield put(fetchHolidaysSuccess(holidaysArray));
    } catch (error) {
        yield put(fetchHolidaysFailed(error));
    }
}

export function* fetchHolidayById({payload: id}){
    try {
        const holidayData = yield call(getHolidayById, id);
        yield put(fetchHolidayRecordSuccess(holidayData));
    } catch (error) {
        yield put(fetchHolidayRecordFailed(error));
    }
}

export function* onFetchHolidays(){
    yield takeLatest(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_START, fetchHolidaysSync);
}

export function* onFetchHolidayById() {
    yield takeLatest(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAY_RECORD_START, fetchHolidayById);
}

export function* holidaysSaga(){
    yield all([call(onFetchHolidays), call(onFetchHolidayById)]);
}