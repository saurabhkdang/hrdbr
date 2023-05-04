import { createAction } from "../../utils/reducer/reducer.utils";
import { EMPLOYEES_ACTION_TYPES } from "./employee.types";

export const fetchEmployeesStart = (searchObj) => createAction(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_START, searchObj);
export const fetchEmployeesSuccess = (employeesArray) => createAction(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_SUCCESS, employeesArray);
export const fetchEmployeesFailed = (error) => createAction(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_FAILED, error);

export const fetchEmployeeByIdStart = (id) => createAction(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEE_START, id);
export const fetchEmployeeByIdSucess = (employee) => createAction(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEE_SUCCESS, employee);
export const fetchEmployeeByIdFailed = (error) => createAction(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEE_FAILED, error);