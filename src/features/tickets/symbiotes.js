import { createSymbiote } from "redux-symbiote";

const initialState = {
  isFetching: true,
  tickets: []
};

const symbiotes = {
  setFetchingStatus: (state, isFetching) => ({
    ...state,
    isFetching
  }),
  receiveTickets: (state, tickets) => ({
    ...state,
    tickets
  })
};

export const { reducer, actions } = createSymbiote(
  initialState,
  symbiotes,
  "tickets"
);
