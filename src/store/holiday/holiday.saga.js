import { all, call, put, takeLatest } from "redux-saga/effects";
import { getHolidays } from "../../utils/services";
import {fetchHolidaysSuccess, fetchHolidaysFailed} from './holiday.action';
import { HOLIDAYS_ACTION_TYPES } from "./holiday.types";

export function* fetchHolidaysSync(){
    try {
        const holidaysArray = yield call(getHolidays);
        yield put(fetchHolidaysSuccess(holidaysArray));
    } catch (error) {
        yield put(fetchHolidaysFailed(error));
    }
}

export function* onFetchHolidays(){
    yield takeLatest(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_START, fetchHolidaysSync);
}

export function* holidaysSaga(){
    yield all([call(onFetchHolidays)]);
}