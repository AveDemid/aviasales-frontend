export const getTextForNumberStops = stopsNumber => {
  const variants = {
    0: "Без пересадок",
    1: "1 пересадка",
    2: "2 пересадки",
    3: "3 пересдаки",
    4: "4 пересадки"
    // etc...
  };

  return variants[stopsNumber];
};
