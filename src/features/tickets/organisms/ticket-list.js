import React from "react";
import PropTypes from "prop-types";

import { ConditionalList } from "@ui/organisms";

const TicketListView = ({ tickets, renderTicket }) => (
  <ConditionalList
    list={tickets}
    renderExists={list =>
      list.map((ticket, index) => renderTicket({ ticket, key: index }))
    }
    renderEmpty={() => <h2>Мы не нашли подходящих билетов</h2>}
  />
);

TicketListView.propTypes = {
  tickets: PropTypes.array.isRequired,
  renderTicket: PropTypes.func.isRequired
};

export const TicketList = TicketListView;
