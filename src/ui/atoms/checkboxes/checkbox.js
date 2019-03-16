import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CheckboxArrowUrl from "@assets/svg/checkbox-arrow.svg";

export const Checkbox = styled.div`
  background-color: ${props => (props.checked ? "#F2FCFF" : "#ffffff")};
  border: 0.1rem solid ${props => (props.checked ? "#2196F3" : "#d2d5d6")};
  border-radius: 0.3rem;
  width: 2rem;
  height: 2rem;

  position: relative;

  transition-property: border, background-color;
  transition-duration: 100ms;
  transition-timing-function: ease;
  &::after {
    position: absolute;
    display: block;
    content: "";
    width: 0.9rem;
    height: 0.7rem;
    top: 0.6rem;
    left: 0.5rem;
    z-index: 1;
    background-image: url(${CheckboxArrowUrl});
    opacity: ${props => (props.checked ? 1 : 0)};

    transition-property: opacity;
    transition-duration: 100ms;
    transition-timing-function: ease;
  }
`;

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};
