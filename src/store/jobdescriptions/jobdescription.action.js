import { createAction } from "../../utils/reducer/reducer.utils";
import {JD_ACTION_TYPES} from './jobdescription.types';

export const fetchJDStart = () => createAction(JD_ACTION_TYPES.FETCH_JD_START);
export const fetchJDSuccess = (jdArray) => createAction(JD_ACTION_TYPES.FETCH_JD_SUCCESS, jdArray);
export const fetchJDFailed = (error) => createAction(JD_ACTION_TYPES.FETCH_JD_FAILED, error);
export const fetchJDRecordStart = (id) => createAction(JD_ACTION_TYPES.FETCH_JOB_RECORD_START, id);
export const fetchJDRecordSuccess = (record) => createAction(JD_ACTION_TYPES.FETCH_JOB_RECORD_SUCCESS, record);
export const fetchJDRecordFailed = (error) => createAction(JD_ACTION_TYPES.FETCH_JOB_RECORD_FAILED, error);
export const updateJDRecord = (jdData) => createAction(JD_ACTION_TYPES.UPDATE_JOB_DESCRIPTION, jdData);
export const updateJDRecordSuccess = (success) => createAction(JD_ACTION_TYPES.UPDATE_JOB_DESCRIPTION_SUCCESS, success);
export const updateJDRecordError = (error) => createAction(JD_ACTION_TYPES.UPDATE_JOB_DESCRIPTION_ERROR, error);
export const hideAlert = (alertType) => createAction(JD_ACTION_TYPES.HIDE_ALERT, alertType);
export const resetRecordId = (record_id) => createAction(JD_ACTION_TYPES.RESET_RECORD_ID, record_id);
export const deleteJD = (route) => createAction(JD_ACTION_TYPES.DELETE_JOB_DESCRIPTION, route);
export const deleteJDSuccess = (success) => createAction(JD_ACTION_TYPES.DELETE_JOB_DESCRIPTION_SUCCESS, success);
export const deleteJDError = (error) => createAction(JD_ACTION_TYPES.DELETE_JOB_DESCRIPTION_ERROR, error);