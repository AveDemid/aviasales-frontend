export const filterTicketsByStops = (tickets, filterState) =>
  tickets.filter(ticket => filterState[ticket.stops]);
