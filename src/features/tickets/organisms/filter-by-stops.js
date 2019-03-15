import React, { useContext } from "react";

import { FilterByStopsContext } from "./../atoms";

import {
  Checkbox,
  CheckboxList,
  CheckboxListItem,
  CheckboxListLabel,
  CheckboxListExtra
} from "@ui/atoms";

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
    event.stopPropagation();

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
    <CheckboxList>
      <CheckboxListItem data-key="0" onClick={handleToggleAll}>
        <Checkbox checked={isAllChecked} />

        <CheckboxListLabel>Все</CheckboxListLabel>
      </CheckboxListItem>

      <CheckboxListItem data-key="0" onClick={handleToggleOne}>
        <Checkbox checked={filterState[0]} />

        <CheckboxListLabel>Без пересадок</CheckboxListLabel>

        <CheckboxListExtra data-key="0" onClick={handleSingleChoice}>
          только
        </CheckboxListExtra>
      </CheckboxListItem>

      <CheckboxListItem data-key="1" onClick={handleToggleOne}>
        <Checkbox checked={filterState[1]} />

        <CheckboxListLabel>1 пересадка</CheckboxListLabel>

        <CheckboxListExtra data-key="1" onClick={handleSingleChoice}>
          только
        </CheckboxListExtra>
      </CheckboxListItem>

      <CheckboxListItem data-key="2" onClick={handleToggleOne}>
        <Checkbox checked={filterState[2]} />

        <CheckboxListLabel>2 пересадки</CheckboxListLabel>

        <CheckboxListExtra data-key="2" onClick={handleSingleChoice}>
          только
        </CheckboxListExtra>
      </CheckboxListItem>

      <CheckboxListItem data-key="3" onClick={handleToggleOne}>
        <Checkbox checked={filterState[3]} />

        <CheckboxListLabel>3 пересадки</CheckboxListLabel>

        <CheckboxListExtra data-key="3" onClick={handleSingleChoice}>
          только
        </CheckboxListExtra>
      </CheckboxListItem>
    </CheckboxList>
  );
};

export const FilterByStops = FilterByStopsView;
