import { createSelector } from "reselect";

const selectJDReducer = (state) => {
    return state.jd;
}

export const selectJD = createSelector(
    [selectJDReducer],
    (jdSlicer) => jdSlicer.jd
)

export const selectJDMap = createSelector(
    [selectJD],
    (jd) => jd
)

export const selectJDIsLoading = createSelector(
    [selectJDReducer],
    (jdSlicer) => jdSlicer.isLoading
)

export const selectJDRecord = createSelector(
    [selectJDReducer],
    (jdSlicer) => jdSlicer.record
)

export const selectUpdateSuccess = createSelector(
    [selectJDReducer],
    (jdSlicer) => jdSlicer.success
)

export const selectUpdateRecordId = createSelector(
    [selectJDReducer],
    (jdSlicer) => jdSlicer.record_id
)

export const selectUpdateError = createSelector(
    [selectJDReducer],
    (jdSlicer) => jdSlicer.error
)

export const selectAssignRolesIsLoading = createSelector(
    [selectJDReducer],
    (jdSlicer) => jdSlicer.isLoading
)