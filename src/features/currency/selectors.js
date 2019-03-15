import { createSelector } from "reselect";

const rootSelector = createSelector(
  state => state.currency,
  currency => currency
);

export const getCurrentCurrency = createSelector(
  rootSelector,
  currency => currency.currentCurrency
);

export const getCurrenciesByName = createSelector(
  rootSelector,
  currency => currency.currenciesByName
);

export const getValueCurrentCurrency = createSelector(
  [getCurrenciesByName, getCurrentCurrency],
  (currenciesByName, currentCurrency) => currenciesByName[currentCurrency]
);

export const currencySelectors = {
  rootSelector,
  getCurrentCurrency,
  getCurrenciesByName,
  getValueCurrentCurrency
};
