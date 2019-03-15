import React, { useContext } from "react";
import { FilterByStopsContext } from "./../atoms";

import { Checkbox } from "@ui/atoms";

const FilterByStopsView = () => {
  const { filterState, setFilterState } = useContext(FilterByStopsContext);

  const isAllChecked = !Object.values(filterState).includes(false);

  const handleToggleOne = event => {
    const key = event.currentTarget.getAttribute("data-key");

    setFilterState({
      ...filterState,
      [key]: !filterState[key]
    });
  };

  const handleToggleAll = () => {
    const filterKeys = Object.keys(filterState);

    const nextFilterState = filterKeys.reduce((accumulator, current) => {
      accumulator[current] = !isAllChecked;

      return accumulator;
    }, {});

    setFilterState(nextFilterState);
  };

  const handleSingleChoice = event => {
    const key = event.currentTarget.getAttribute("data-key");

    const filterKeys = Object.keys(filterState);

    const nextFilterState = filterKeys.reduce((accumulator, current) => {
      accumulator[current] = false;

      return accumulator;
    }, {});

    nextFilterState[key] = true;

    setFilterState(nextFilterState);
  };

  return (
    <>
      <Checkbox data-key="0" checked={isAllChecked} onClick={handleToggleAll} />

      <Checkbox
        data-key="0"
        checked={filterState[0]}
        onClick={handleToggleOne}
      />
      <Checkbox
        data-key="1"
        checked={filterState[1]}
        onClick={handleToggleOne}
      />
      <Checkbox
        data-key="2"
        checked={filterState[2]}
        onClick={handleToggleOne}
      />
      <Checkbox
        data-key="3"
        checked={filterState[3]}
        onClick={handleToggleOne}
      />
    </>
  );
};

export const FilterByStops = FilterByStopsView;
