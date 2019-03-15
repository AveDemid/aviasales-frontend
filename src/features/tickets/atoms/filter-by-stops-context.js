import React, { createContext, useState } from "react";

export const FilterByStopsContext = createContext();

export const FilterByStopsProvider = ({ children }) => {
  const initialState = {
    0: true,
    1: true,
    2: true,
    3: true
  };

  const [filterState, setFilterState] = useState(initialState);

  return (
    <FilterByStopsContext.Provider value={{ filterState, setFilterState }}>
      {children}
    </FilterByStopsContext.Provider>
  );
};
