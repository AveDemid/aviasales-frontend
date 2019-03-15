import PropTypes from "prop-types";
import styled from "styled-components";

export const CheckboxBox = styled.div`
  background: ${props => (props.checked ? "#F2FCFF" : "#ffffff")};
  border: 1px solid ${props => (props.checked ? "#2196F3" : "#d2d5d6")};
  border-radius: 3px;
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

CheckboxBox.propTypes = {
  checked: PropTypes.bool.isRequired
};
