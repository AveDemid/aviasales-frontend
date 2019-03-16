export const getCurrencySymbol = currencyName => {
  const currencySymbols = {
    rub: "₽",
    usd: "$",
    eur: "€"
  };

  return currencySymbols[currencyName];
};
