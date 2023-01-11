import { combineReducers } from "redux";

import { employeesReduer } from "./employees/employee.reducer";
import { jdReducer } from "./jobdescriptions/jobdescription.reducer";
import { holidaysReducer } from "./holiday/holiday.reducer";


export const rootReducer = combineReducers({
    employees: employeesReduer,
    jd: jdReducer,
    holidays: holidaysReducer
})