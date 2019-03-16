import { combineReducers } from "redux";
import { currencyReducer } from "@features/currency";
import { ticketsReducer } from "@features/tickets";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  tickets: ticketsReducer
});
