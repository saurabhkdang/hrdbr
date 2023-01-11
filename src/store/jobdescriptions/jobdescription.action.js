import { createAction } from "../../utils/reducer/reducer.utils";
import {JD_ACTION_TYPES} from './jobdescription.types';

export const fetchJDStart = () => createAction(JD_ACTION_TYPES.FETCH_JD_START);

export const fetchJDSuccess = (jdArray) => createAction(JD_ACTION_TYPES.FETCH_JD_SUCCESS, jdArray);

export const fetchJDFailed = (error) => createAction(JD_ACTION_TYPES.FETCH_JD_FAILED, error);