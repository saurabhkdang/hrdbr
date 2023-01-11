import {all, call} from 'redux-saga/effects';
import { employeesSaga } from './employees/employee.saga';
import { jdSaga } from './jobdescriptions/jobdescription.saga';
import { holidaysSaga } from './holiday/holiday.saga';

export function* rootSaga(){
    yield all([call(employeesSaga), call(jdSaga), call(holidaysSaga)]);
}