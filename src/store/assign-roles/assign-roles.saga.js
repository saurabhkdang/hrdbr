import { all, call, put, takeLatest } from "redux-saga/effects";
import { getAssignRoles } from "../../utils/services";
import { fetchAssignRolesSuccess, fetchAssignRolesFailed } from "./assign-roles.action";
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

export function* assignRolesSaga(){
    yield all([call(onFetchAssignRoles)]);
}