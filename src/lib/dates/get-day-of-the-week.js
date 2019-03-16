export const getDayOfTheWeek = dateString => {
  const [DD, MM, YY] = dateString.split(".");

  const date = new Date(+`20${YY}`, MM - 1, DD - 1);

  return date.toLocaleString("ru", { weekday: "short" });
};
