import { createSelector } from "reselect";

const selectEmployeeReducer = (state) => {
    return state.employees;
}

export const selectEmployees = createSelector(
    [selectEmployeeReducer],
    (employeeSlicer) => employeeSlicer.employees
)

export const selectEmployeesMap = createSelector(
    [selectEmployees],
    (employees) => employees
);

export const selectEmployeesIsLoading = createSelector(
    [selectEmployeeReducer],
    (employeeSlicer) => employeeSlicer.isLoading
)