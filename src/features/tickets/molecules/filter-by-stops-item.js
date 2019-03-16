import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  CheckboxListExtra,
  CheckboxListItem,
  CheckboxListLabel
} from "@ui/atoms";

export const FilterByStopsItem = ({
  checked,
  itemText,
  extraText,
  onItemClick,
  onExtraClick,
  filterKey
}) => (
  <CheckboxListItem data-key={filterKey} onClick={onItemClick}>
    <Checkbox checked={checked} />

    <CheckboxListLabel>{itemText}</CheckboxListLabel>

    {extraText && onExtraClick && (
      <CheckboxListExtra data-key={filterKey} onClick={onExtraClick}>
        {extraText}
      </CheckboxListExtra>
    )}
  </CheckboxListItem>
);

FilterByStopsItem.propTypes = {
  checked: PropTypes.bool.isRequired,
  itemText: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
  filterKey: PropTypes.string,
  extraText: PropTypes.string,
  onExtraClick: PropTypes.func
};
