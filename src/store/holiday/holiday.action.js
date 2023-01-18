import { createAction } from "../../utils/reducer/reducer.utils";
import { HOLIDAYS_ACTION_TYPES } from "./holiday.types";

export const fetchHolidaysStart = () => createAction(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_START);
export const fetchHolidaysSuccess = (holidaysArray) => createAction(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_SUCCESS, holidaysArray);
export const fetchHolidaysFailed = (error) => createAction(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAYS_FAILED, error);
export const fetchHolidayRecordStart = (id) => createAction(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAY_RECORD_START, id);
export const fetchHolidayRecordSuccess = (record) => createAction(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAY_RECORD_SUCCESS, record);
export const fetchHolidayRecordFailed = (error) => createAction(HOLIDAYS_ACTION_TYPES.FETCH_HOLIDAY_RECORD_ERROR, error);