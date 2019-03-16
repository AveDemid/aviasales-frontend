import { createPromise } from "@features/common/api";
import { actions } from "./symbiotes";
import ticketsJSON from "@fixtures/tickets.json";

export const loadTickets = () => async dispatch => {
  dispatch(actions.setFetchingStatus(true));

  try {
    const tickets = await createPromise(ticketsJSON);

    dispatch(actions.receiveTickets(tickets.tickets));
  } catch (e) {
    // Ignore error because use fixtures
  } finally {
    dispatch(actions.setFetchingStatus(false));
  }
};
