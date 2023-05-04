import {all, call, put, takeLatest} from "redux-saga/effects";
import { getEmployees, getEmployeeById } from "../../utils/services";
import { fetchEmployeesSuccess, fetchEmployeesFailed, fetchEmployeeByIdSucess, fetchEmployeeByIdFailed  } from "./employee.action";
import { EMPLOYEES_ACTION_TYPES } from "./employee.types";

export function* fetchEmployeesSync({payload: searchObj}){
    try {
        const employeesArray = yield call(getEmployees, searchObj);
        yield put(fetchEmployeesSuccess(employeesArray));
    } catch (error) {
        yield put(fetchEmployeesFailed(error));
    }
}

export function* fetchEmployeeById({payload: id}){
    try {
        const employee = yield call(getEmployeeById, id);
        yield put(fetchEmployeeByIdSucess(employee));
    } catch (error) {
        yield put(fetchEmployeeByIdFailed(error));
    }
}

export function* onFetchEmployees(){
    yield takeLatest(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES_START, fetchEmployeesSync);
}

export function* onFetchEmployeeById() {
    yield takeLatest(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEE_START, fetchEmployeeById);
}

export function* employeesSaga() {
    yield all([call(onFetchEmployees), call(onFetchEmployeeById)]);
}