import { createSelector } from "reselect";

const selectMonthlyRatingsReducer = (state) => {
    return state.monthly_ratings;
}

export const selectMonthlyRatings = createSelector(
    [selectMonthlyRatingsReducer],
    (monthlyRatingsSlicer) => monthlyRatingsSlicer.monthly_ratings
)

export const selectMonthlyRatingsMap = createSelector(
    [selectMonthlyRatings],
    (monthly_ratings) => monthly_ratings
)

export const selectMonthlyRatingsIsLoading = createSelector(
    [selectMonthlyRatingsReducer],
    (monthlyRatingsSlicer) => monthlyRatingsSlicer.isLoading
)