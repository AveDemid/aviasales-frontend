import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { connect } from "react-redux";

import { getCurrentCurrency, getCurrenciesByName } from "./../selectors";

import { actions as currencyActions } from "./../symbiotes";

const mapStateToProps = state => ({
  currentCurrency: getCurrentCurrency(state),
  currenciesByName: getCurrenciesByName(state)
});

const mapDispatchToProps = {
  setCurrentCurrency: currencyActions.setCurrentCurrency
};
const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const CurrencySwitchView = ({
  currentCurrency,
  currenciesByName,
  setCurrentCurrency
}) => {
  const currencyNames = Object.keys(currenciesByName);

  const handleSetCurrentCurrency = event => {
    const currency = event.currentTarget.getAttribute("data-currency");

    setCurrentCurrency(currency);
  };

  return currencyNames.map(currency => (
    <button
      data-currency={currency}
      onClick={handleSetCurrentCurrency}
      key={currency}
      disabled={currentCurrency === currency}
    >
      {currency}
    </button>
  ));
};

CurrencySwitchView.propTypes = {
  currentCurrency: PropTypes.string.isRequired,
  currenciesByName: PropTypes.shape({
    rub: PropTypes.number.isRequired,
    usd: PropTypes.number.isRequired,
    eur: PropTypes.number.isRequired
  }).isRequired,
  setCurrentCurrency: PropTypes.func.isRequired
};

export const CurrencySwitch = enhance(CurrencySwitchView);
