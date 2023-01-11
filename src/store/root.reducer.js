import { combineReducers } from "redux";

import { employeesReduer } from "./employees/employee.reducer";
import { jdReducer } from "./jobdescriptions/jobdescription.reducer";

export const rootReducer = combineReducers({
    employees: employeesReduer,
    jd: jdReducer 
})