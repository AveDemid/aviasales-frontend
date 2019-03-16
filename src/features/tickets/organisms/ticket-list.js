import React from "react";
import PropTypes from "prop-types";

import { ConditionalList } from "@ui/organisms";
import { TicketBox, TicketNotFound } from "@ui/atoms";

const TicketListView = ({ tickets, renderTicket }) => (
  <ConditionalList
    list={tickets}
    renderExists={list =>
      list.map((ticket, index) => renderTicket({ ticket, key: index }))
    }
    renderEmpty={() => (
      <TicketBox>
        <TicketNotFound>Мы не нашли подходящих билетов</TicketNotFound>
      </TicketBox>
    )}
  />
);

TicketListView.propTypes = {
  tickets: PropTypes.array.isRequired,
  renderTicket: PropTypes.func.isRequired
};

export const TicketList = TicketListView;
