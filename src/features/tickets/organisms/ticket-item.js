import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from "react-redux";

import { currencySelectors } from "@features/currency";
import { getPriceAtTheRate } from "@lib/currency";

const mapStateToProps = state => ({
  rate: currencySelectors.getValueCurrentCurrency(state),
  currencyName: currencySelectors.getCurrentCurrency(state)
});

const mapDispatchToProps = {};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const TicketItemView = ({ ticket, rate, currencyName }) => {
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

  const formattedPrice = getPriceAtTheRate(price, currencyName, rate);

  return (
    <p>
      {origin_name} => {destination_name} | {formattedPrice}
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
  }).isRequired,
  rate: PropTypes.number.isRequired,
  currencyName: PropTypes.string.isRequired
};

export const TicketItem = enhance(TicketItemView);
