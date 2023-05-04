import { createSelector } from "reselect";

const selectEmployeeReducer = (state) => {
    return state.employees;
}

export const selectEmployees = createSelector(
    [selectEmployeeReducer],
    (employeeSlicer) => employeeSlicer.employees
)

export const selectEmployee = createSelector(
    [selectEmployeeReducer],
    (employee) => employee.employee
)

export const selectEmployeesMap = createSelector(
    [selectEmployees],
    (employees) => employees
);

export const selectEmployeeMap = createSelector(
    [selectEmployee],
    (employee) => employee
)

export const selectEmployeesIsLoading = createSelector(
    [selectEmployeeReducer],
    (employeeSlicer) => employeeSlicer.isLoading
)