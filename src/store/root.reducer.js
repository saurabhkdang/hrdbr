import { combineReducers } from "redux";

import { employeesReduer } from "./employees/employee.reducer";
import { jdReducer } from "./jobdescriptions/jobdescription.reducer";
import { holidaysReducer } from "./holiday/holiday.reducer";
import { assignRolesReducer } from "./assign-roles/assign-roles.reducer";
import { monthlyRatingsReducer } from './monthly-ratings/monthly-ratings.reducer';

export const rootReducer = combineReducers({
    employees: employeesReduer,
    jd: jdReducer,
    holidays: holidaysReducer,
    assign_roles: assignRolesReducer,
    monthly_ratings: monthlyRatingsReducer
})