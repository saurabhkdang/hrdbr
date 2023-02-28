import { createAction } from "../../utils/reducer/reducer.utils";
import { BREADCRUMB_TYPES } from "./breadcrumb.types";

export const setBreadcrumb = (item) => createAction(BREADCRUMB_TYPES.CREATE_NEW, item);