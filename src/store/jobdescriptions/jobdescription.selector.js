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