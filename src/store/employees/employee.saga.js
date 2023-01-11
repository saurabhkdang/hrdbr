import {all, call, put, takeLatest} from "redux-saga/effects";
import { getEmployees } from "../../utils/services";
import { fetchEmployeesSuccess, fetchEmployeesFailed  } from "./employee.action";
import { EMPLOYEES_ACTION_TYPES } from "./employee.types";

export function* fetchEmployeesSync(){
    try {
        const employeesArray = yield call(getEmployees);
        yield put(fetchEmployeesSuccess(employeesArray));
    } catch (error) {
        yield put(fetchEmployeesFailed(error));
    }
}

export function* onFetchEmployees(){
    yield takeLatest(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_START, fetchEmployeesSync);
}

export function* employeesSaga() {
    yield all([call(onFetchEmployees)]);
}