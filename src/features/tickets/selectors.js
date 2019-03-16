import { createSelector } from "reselect";

const rootSelector = createSelector(
  state => state.tickets,
  tickets => tickets
);

export const getTicketList = createSelector(
  rootSelector,
  tickets => tickets.tickets
);

export const getFetchingStatus = createSelector(
  rootSelector,
  tickets => tickets.isFetching
);
