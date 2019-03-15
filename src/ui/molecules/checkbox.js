import React from "react";
import PropTypes from "prop-types";
import { CheckboxBox, CheckboxArrow } from "@ui/atoms";

export const Checkbox = ({ checked, onClick, ...props }) => (
  <CheckboxBox checked={checked} onClick={onClick} data-key={props["data-key"]}>
    {checked && <CheckboxArrow />}
  </CheckboxBox>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};
