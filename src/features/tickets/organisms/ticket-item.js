import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from "react-redux";

import TALogoUrl from "@assets/rater/turkish-airlines-logo.png";

import { currencySelectors } from "@features/currency";
import {
  getPriceAtTheRate,
  getNumberWithSpaces,
  getCurrencySymbol
} from "@lib/currency";

import { getDayOfTheWeek } from "@lib/dates";
import { getTextForNumberStops } from "@lib/tickets";

import {
  BayButton,
  TicketBox,
  TicketBayCol,
  TicketContent,
  TicketCarrier
} from "@ui/atoms";

import { TicketOrigin, TicketDestination, TicketRoute } from "@ui/molecules";

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
    departure_date,
    departure_time,
    destination,
    destination_name,
    origin,
    origin_name,
    price,
    stops
  } = ticket;

  const price_at_the_rate = getPriceAtTheRate(price, rate);
  const price_with_space = getNumberWithSpaces(price_at_the_rate);
  const currency_symbol = getCurrencySymbol(currencyName);
  const stops_text = getTextForNumberStops(stops);
  const departure_day_week = getDayOfTheWeek(departure_date);
  const arrival_day_week = getDayOfTheWeek(arrival_date);
  const formatted_price = price_with_space + currency_symbol;

  return (
    <TicketBox>
      <TicketBayCol>
        <TicketCarrier src={TALogoUrl} />
        <BayButton>
          Купить
          <br />
          за {formatted_price}
        </BayButton>
      </TicketBayCol>

      <TicketContent>
        <TicketOrigin
          departure_date={departure_date}
          departure_time={departure_time}
          departure_day_week={departure_day_week}
          origin={origin}
          origin_name={origin_name}
        />

        <TicketRoute stops={stops_text} />

        <TicketDestination
          arrival_date={arrival_date}
          arrival_time={arrival_time}
          arrival_day_week={arrival_day_week}
          destination={destination}
          destination_name={destination_name}
        />
      </TicketContent>
    </TicketBox>
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
