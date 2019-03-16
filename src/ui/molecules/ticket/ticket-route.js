import React from "react";
import PropTypes from "prop-types";
import { TicketRouteBox, TicketRoutePath, TicketStops } from "@ui/atoms";

export const TicketRoute = ({ stops }) => (
  <TicketRouteBox>
    <TicketStops>{stops}</TicketStops>
    <TicketRoutePath />
  </TicketRouteBox>
);

TicketRoute.propTypes = {
  stops: PropTypes.string.isRequired
};
