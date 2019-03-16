import React from "react";
import PropTypes from "prop-types";
import {
  TicketCity,
  TicketDate,
  TicketOriginBox,
  TicketTime,
  TicketWeekDay
} from "@ui/atoms";

export const TicketOrigin = ({
  departure_time,
  origin,
  origin_name,
  departure_date,
  departure_day_week
}) => (
  <TicketOriginBox>
    <TicketTime>{departure_time}</TicketTime>
    <TicketCity>
      {origin}, {origin_name}
    </TicketCity>
    <TicketDate>
      {departure_date}, <TicketWeekDay>{departure_day_week}</TicketWeekDay>
    </TicketDate>
  </TicketOriginBox>
);

TicketOrigin.propTypes = {
  departure_time: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  origin_name: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  departure_day_week: PropTypes.string.isRequired
};
