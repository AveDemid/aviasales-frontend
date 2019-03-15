import PropTypes from "prop-types";
import styled from "styled-components";

export const ButtonSwitch = styled.button`
  font-weight: 600;
  text-transform: uppercase;
  color: ${props => (props.isActive ? "#ffffff" : "#2196f3")};
  font-size: 1.2rem;
  line-height: 2.2rem;
  letter-spacing: 0.05rem;

  background-color: ${props => (props.isActive ? "#2196F3" : "#ffffff")};
  border: 1px solid ${props => (props.isActive ? "#2196F3" : "#d2d5d6")};
  border-radius: 0.5rem;
  padding: 8px 20px;
  outline: none;

  cursor: pointer;
  position: relative;
  z-index: ${props => (props.isActive ? 2 : 1)};
  &:hover,
  &:focus {
    z-index: 3;
    background-color: ${props => (props.isActive ? "#2196F3" : "#f2fcff")};
    border-color: ${props => (props.isActive ? "#2196F3" : "#64b5f5")};
  }
`;

ButtonSwitch.propTypes = {
  disabled: PropTypes.bool,
  isActive: PropTypes.bool.isRequired
};
