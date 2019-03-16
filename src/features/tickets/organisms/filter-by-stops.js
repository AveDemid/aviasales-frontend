import React, { useContext } from "react";

import { getTextForNumberStops } from "@lib/tickets";
import { CheckboxList } from "@ui/atoms";

import { FilterByStopsContext } from "./../atoms";
import { FilterByStopsItem } from "./../molecules";

const FilterByStopsView = () => {
  const { filterState, setFilterState } = useContext(FilterByStopsContext);

  const filterValues = Object.values(filterState);
  const filterKeys = Object.keys(filterValues);

  const isAllChecked = !filterValues.includes(false);

  const handleToggleOne = event => {
    const key = event.currentTarget.getAttribute("data-key");

    setFilterState({
      ...filterState,
      [key]: !filterState[key]
    });
  };

  const handleToggleAll = () => {
    const nextFilterState = filterKeys.reduce((accumulator, current) => {
      accumulator[current] = !isAllChecked;

      return accumulator;
    }, {});

    setFilterState(nextFilterState);
  };

  const handleSingleChoice = event => {
    event.stopPropagation();

    const key = event.currentTarget.getAttribute("data-key");

    const nextFilterState = filterKeys.reduce((accumulator, current) => {
      accumulator[current] = false;

      return accumulator;
    }, {});

    nextFilterState[key] = true;

    setFilterState(nextFilterState);
  };

  return (
    <CheckboxList>
      <FilterByStopsItem
        itemText="Все"
        onItemClick={handleToggleAll}
        checked={isAllChecked}
      />

      {filterKeys.map(key => (
        <FilterByStopsItem
          key={key}
          filterKey={key}
          itemText={getTextForNumberStops(key)}
          onItemClick={handleToggleOne}
          checked={filterState[key]}
          extraText="только"
          onExtraClick={handleSingleChoice}
        />
      ))}
    </CheckboxList>
  );
};

export const FilterByStops = FilterByStopsView;
