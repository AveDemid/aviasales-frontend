import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import ticketsJSON from "@fixtures/tickets.json";
import { sortByPriceAscending, filterTicketsByStops } from "@lib/tickets";

import { TicketList, TicketItem, FilterByStops } from "./../organisms";
import { FilterByStopsProvider, FilterByStopsContext } from "./../atoms";

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const tickets = sortByPriceAscending(ticketsJSON.tickets);

const TicketsHomeView = () => (
  <FilterByStopsProvider>
    <FilterByStops />

    <FilterByStopsContext.Consumer>
      {({ filterState }) => (
        <TicketList
          tickets={filterTicketsByStops(tickets, filterState)}
          renderTicket={({ ticket, key }) => (
            <TicketItem ticket={ticket} key={key} />
          )}
        />
      )}
    </FilterByStopsContext.Consumer>
  </FilterByStopsProvider>
);

TicketsHomeView.propTypes = {};

export const TicketsHomePage = enhance(TicketsHomeView);
