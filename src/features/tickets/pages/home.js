import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";

import { Header } from "@features/common/organisms";
import { Sidebar } from "@features/tickets/organisms";
import { MainTemplate } from "@ui/templates";
import { Spinner } from "@ui/molecules";
import { filterTicketsByStops, sortByPriceAscending } from "@lib/tickets";

import { FilterByStopsProvider, FilterByStopsContext } from "./../atoms";
import { TicketList, TicketItem } from "./../organisms";
import { getTicketList, getFetchingStatus } from "./../selectors";
import { loadTickets } from "./../effects";

const mapStateToProps = state => ({
  tickets: getTicketList(state),
  ticketsIsFetching: getFetchingStatus(state)
});

const mapDispatchToProps = {
  loadTickets
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const TicketsHomeView = ({ loadTickets, tickets, ticketsIsFetching }) => {
  useEffect(() => {
    loadTickets();
  }, []);

  const sortedTickets = sortByPriceAscending(tickets);

  return (
    <FilterByStopsProvider>
      <MainTemplate header={<Header />} sidebar={<Sidebar />}>
        <FilterByStopsContext.Consumer>
          {({ filterState }) => {
            const filteredTickets = filterTicketsByStops(
              sortedTickets,
              filterState
            );

            return ticketsIsFetching ? (
              <Spinner />
            ) : (
              <TicketList
                tickets={filteredTickets}
                renderTicket={({ ticket, key }) => (
                  <TicketItem ticket={ticket} key={key} />
                )}
              />
            );
          }}
        </FilterByStopsContext.Consumer>
      </MainTemplate>
    </FilterByStopsProvider>
  );
};

TicketsHomeView.propTypes = {
  loadTickets: PropTypes.func.isRequired,
  tickets: PropTypes.array.isRequired,
  ticketsIsFetching: PropTypes.bool.isRequired
};

export const TicketsHomePage = enhance(TicketsHomeView);
