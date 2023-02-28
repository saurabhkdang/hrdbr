import { createSelector } from "reselect";

const selectBreadCrumbReducer = (state) => {
    return state.breadcrumb;
}

export const selectBreadCrumb = createSelector(
    [selectBreadCrumbReducer],
    (breadCrumbSlicer) => breadCrumbSlicer.items
)