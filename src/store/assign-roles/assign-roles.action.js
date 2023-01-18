import { createAction } from "../../utils/reducer/reducer.utils";
import { ASSIGN_ROLES_ACTION_TYPES } from "./assign-roles.types";

export const fetchAssignRolesStart = (role) => createAction(ASSIGN_ROLES_ACTION_TYPES.FETCH_ASSIGN_ROLES_START, role);
export const fetchAssignRolesSuccess = (AssignRolesArray) => createAction(ASSIGN_ROLES_ACTION_TYPES.FETCH_ASSIGN_ROLES_SUCCESS, AssignRolesArray);
export const fetchAssignRolesFailed = (error) => createAction(ASSIGN_ROLES_ACTION_TYPES.FECH_ASSIGN_ROLES_FAILED, error);
export const updateRoles = (data) => createAction(ASSIGN_ROLES_ACTION_TYPES.UPDATE_ROLES, data);
export const updateRolesSuccess = (success) => createAction(ASSIGN_ROLES_ACTION_TYPES.UPDATE_ROLES_SUCCESS, success);
export const updateRolesError = (error) => createAction(ASSIGN_ROLES_ACTION_TYPES.UPDATE_ROLES_ERROR, error);
export const hideAlert = (alertType) => createAction(ASSIGN_ROLES_ACTION_TYPES.HIDE_ALERT, alertType);