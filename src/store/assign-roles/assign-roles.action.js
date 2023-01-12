import { createAction } from "../../utils/reducer/reducer.utils";
import { ASSIGN_ROLES_ACTION_TYPES } from "./assign-roles.types";

export const fetchAssignRolesStart = (role) => createAction(ASSIGN_ROLES_ACTION_TYPES.FETCH_ASSIGN_ROLES_START, role);
export const fetchAssignRolesSuccess = (AssignRolesArray) => createAction(ASSIGN_ROLES_ACTION_TYPES.FETCH_ASSIGN_ROLES_SUCCESS, AssignRolesArray);
export const fetchAssignRolesFailed = (error) => createAction(ASSIGN_ROLES_ACTION_TYPES.FECH_ASSIGN_ROLES_FAILED, error);