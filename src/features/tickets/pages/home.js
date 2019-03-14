import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";

import tickets from "@fixtures/tickets.json";
import { sortByPriceAscending } from "@lib/tickets";
import { TicketList, TicketItem } from "./../organisms";

const mapStateToProps = state => ({});
const mapDispatchToProps = {};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const sortedTickets = sortByPriceAscending(tickets.tickets);

const TicketsHomeView = () => (
  <TicketList
    tickets={sortedTickets}
    renderTicket={({ ticket, key }) => <TicketItem ticket={ticket} key={key} />}
  />
);

TicketsHomeView.propTypes = {};

export const TicketsHomePage = enhance(TicketsHomeView);
