export const getPriceAtTheRate = (price, rate) =>
  parseFloat((price / rate).toFixed(2));
