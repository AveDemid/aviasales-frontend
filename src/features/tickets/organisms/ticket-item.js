import React from "react";
import PropTypes from "prop-types";

const TicketItemView = ({ ticket }) => {
  const {
    arrival_date,
    arrival_time,
    carrier,
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops
  } = ticket;

  return (
    <p>
      {origin_name} => {destination_name} | {price}
    </p>
  );
};

TicketItemView.propTypes = {
  ticket: PropTypes.shape({
    arrival_date: PropTypes.string.isRequired,
    arrival_time: PropTypes.string.isRequired,
    carrier: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    departure_time: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stops: PropTypes.number.isRequired
  })
};

export const TicketItem = TicketItemView;
