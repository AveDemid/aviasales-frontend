import React, { useContext } from "react";
import { FilterByStopsContext } from "./../atoms";

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
      <input
        type="checkbox"
        checked={isAllChecked}
        onChange={handleToggleAll}
      />{" "}
      - все <br />
      <input
        type="checkbox"
        data-key="0"
        checked={filterState[0]}
        onChange={handleToggleOne}
      />{" "}
      - без пересадок{" "}
      <button data-key="0" onClick={handleSingleChoice}>
        только
      </button>
      <br />
      <input
        type="checkbox"
        data-key="1"
        checked={filterState[1]}
        onChange={handleToggleOne}
      />{" "}
      - 1 пересадка{" "}
      <button data-key="1" onClick={handleSingleChoice}>
        только
      </button>
      <br />
      <input
        type="checkbox"
        data-key="2"
        checked={filterState[2]}
        onChange={handleToggleOne}
      />{" "}
      - 2 пересадки{" "}
      <button data-key="2" onClick={handleSingleChoice}>
        только
      </button>{" "}
      <br />
      <input
        type="checkbox"
        data-key="3"
        checked={filterState[3]}
        onChange={handleToggleOne}
      />{" "}
      - 3 пересадки{" "}
      <button data-key="3" onClick={handleSingleChoice}>
        только
      </button>
      <br />
    </>
  );
};

export const FilterByStops = FilterByStopsView;
