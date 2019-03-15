import { createSymbiote } from "redux-symbiote";

const initialState = {
  currenciesByName: {
    rub: 1,
    usd: 65,
    eur: 75
  },
  currentCurrency: "rub"
};

const symbiotes = {
  setCurrentCurrency: (state, currentCurrency) => ({
    ...state,
    currentCurrency
  })
};

export const { reducer, actions } = createSymbiote(
  initialState,
  symbiotes,
  "currency"
);
