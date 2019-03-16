import React from "react";
import PropTypes from "prop-types";

import {
  TicketCity,
  TicketDate,
  TicketDestinationBox,
  TicketTime,
  TicketWeekDay
} from "@ui/atoms";

export const TicketDestination = ({
  arrival_time,
  destination_name,
  destination,
  arrival_date,
  arrival_day_week
}) => (
  <TicketDestinationBox>
    <TicketTime>{arrival_time}</TicketTime>
    <TicketCity>
      {destination_name}, {destination}
    </TicketCity>
    <TicketDate>
      {arrival_date}, <TicketWeekDay>{arrival_day_week}</TicketWeekDay>
    </TicketDate>
  </TicketDestinationBox>
);

TicketDestination.propTypes = {
  arrival_time: PropTypes.string.isRequired,
  destination_name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  arrival_date: PropTypes.string.isRequired,
  arrival_day_week: PropTypes.string.isRequired
};
