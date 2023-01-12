import { createAction } from "../../utils/reducer/reducer.utils";
import { MONTHLY_RATINGS_ACTION_TYPES } from "./monthly-ratings.types";

export const fetchMonthlyRatingsStart = () => createAction(MONTHLY_RATINGS_ACTION_TYPES.FETCH_MONTHLY_RATINGS_START);
export const fetchMonthlyRatingsSuccess = (monthlyRatingsArray) => createAction(MONTHLY_RATINGS_ACTION_TYPES.FETCH_MONTHLY_RATINGS_SUCCESS, monthlyRatingsArray);
export const fetchMonthlyRatingsFailed = (error) => createAction(MONTHLY_RATINGS_ACTION_TYPES.FETCH_MONTHLY_RATINGS_FAILED, error);