import { createSelector } from "reselect";

const selectHolidaysReducer = (state) => {
    return state.holidays;
}

export const selectHolidays = createSelector(
    [selectHolidaysReducer],
    (holidaysSlicer) => holidaysSlicer.holidays
)

export const selectHolidaysMap = createSelector(
    [selectHolidays],
    (holidays) => holidays
)

export const selectHolidaysIsLoading = createSelector(
    [selectHolidaysReducer],
    (holidaysSlider) => holidaysSlider.isLoading
)