import { createSelector } from "reselect";

const selectAssignRolesReducer = (state) => {
    return state.assign_roles;
}

export const selectAssignRoles = createSelector(
    [selectAssignRolesReducer],
    (assignRolesSlicer) => assignRolesSlicer.assign_roles
)

export const selectAssignRolesMap = createSelector(
    [selectAssignRoles],
    (assign_roles) => assign_roles
)

export const selectUpdateSuccess = createSelector(
    [selectAssignRolesReducer],
    (assignRolesSlicer) => assignRolesSlicer.success
)

export const selectUpdateError = createSelector(
    [selectAssignRolesReducer],
    (assignRolesSlicer) => assignRolesSlicer.error
)

export const selectAssignRolesIsLoading = createSelector(
    [selectAssignRolesReducer],
    (assignRolesSlicer) => assignRolesSlicer.isLoading
)