import { createAction } from "../../utils/reducer/reducer.utils";
import {JD_ACTION_TYPES} from './jobdescription.types';

export const fetchJDStart = () => createAction(JD_ACTION_TYPES.FETCH_JD_START);

export const fetchJDSuccess = (jdArray) => createAction(JD_ACTION_TYPES.FETCH_JD_SUCCESS, jdArray);

export const fetchJDFailed = (error) => createAction(JD_ACTION_TYPES.FETCH_JD_FAILED, error);

export const fetchJDRecordStart = (id) => createAction(JD_ACTION_TYPES.FETCH_JOB_RECORD_START, id);

export const fetchJDRecordSuccess = (record) => createAction(JD_ACTION_TYPES.FETCH_JOB_RECORD_SUCCESS, record);

export const fetchJDRecordFailed = (error) => createAction(JD_ACTION_TYPES.FETCH_JOB_RECORD_FAILED, error);