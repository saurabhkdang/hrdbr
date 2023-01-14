import {all, call} from 'redux-saga/effects';
import { employeesSaga } from './employees/employee.saga';
import { jdSaga } from './jobdescriptions/jobdescription.saga';
import { holidaysSaga } from './holiday/holiday.saga';
import { assignRolesSaga } from './assign-roles/assign-roles.saga';
import { monthlyRatingsSaga } from './monthly-ratings/monthly-ratings.saga';
import { loginSaga } from './login/login.saga';

export function* rootSaga(){
    yield all([
        call(employeesSaga), 
        call(jdSaga), 
        call(holidaysSaga), 
        call(assignRolesSaga),
        call(monthlyRatingsSaga),
        call(loginSaga)
    ]);
}