import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import ticketsJSON from "@fixtures/tickets.json";
import { sortByPriceAscending, filterTicketsByStops } from "@lib/tickets";

import { MainTemplate } from "@ui/templates";
import { Header } from "@features/common/organisms";
import { Sidebar } from "@features/tickets/organisms";

import { TicketList, TicketItem } from "./../organisms";
import { FilterByStopsProvider, FilterByStopsContext } from "./../atoms";

const mapStateToProps = () => ({});
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
    <MainTemplate header={<Header />} sidebar={<Sidebar />}>
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
    </MainTemplate>
  </FilterByStopsProvider>
);

TicketsHomeView.propTypes = {};

export const TicketsHomePage = enhance(TicketsHomeView);
