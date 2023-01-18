import { all, call, put, takeLatest } from "redux-saga/effects";
import { getAssignRoles, updateRoles } from "../../utils/services";
import { fetchAssignRolesSuccess, fetchAssignRolesFailed, updateRolesSuccess, updateRolesError } from "./assign-roles.action";
import { ASSIGN_ROLES_ACTION_TYPES } from "./assign-roles.types";

export function* fetchAssignRolesSync({payload: role}){
    try {
        const assignRolesArray = yield call(getAssignRoles, role);
        yield put(fetchAssignRolesSuccess(assignRolesArray));
    } catch (error) {
        yield put(fetchAssignRolesFailed(error));
    }
}

export function* onFetchAssignRoles(){
    yield takeLatest(ASSIGN_ROLES_ACTION_TYPES.FETCH_ASSIGN_ROLES_START, fetchAssignRolesSync);
}

export function* postUpdateRoles({payload: data}) {
    try {
        const success = yield call(updateRoles, data);
        yield put(updateRolesSuccess(success));
    } catch (error) {
        yield put(updateRolesError(error));
    }
}

export function* onUpdateRoles(){
    yield takeLatest(ASSIGN_ROLES_ACTION_TYPES.UPDATE_ROLES, postUpdateRoles);
}

export function* assignRolesSaga(){
    yield all([call(onFetchAssignRoles), call(onUpdateRoles)]);
}