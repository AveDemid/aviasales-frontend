import { combineReducers } from "redux";
import { currencyReducer } from "@features/currency";

export const rootReducer = combineReducers({
  currency: currencyReducer
});
