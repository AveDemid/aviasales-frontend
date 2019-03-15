export const getPriceAtTheRate = (price, currencyName, rate) => {
  const currencySymbols = {
    rub: "₽",
    usd: "$",
    eur: "€"
  };

  return parseFloat((price / rate).toFixed(2)) + currencySymbols[currencyName];
};
