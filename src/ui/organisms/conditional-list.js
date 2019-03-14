import React from "react";
import PropTypes from "prop-types";

export const ConditionalList = ({ list, renderExists, renderEmpty }) => (
  <>{list && list.length > 0 ? renderExists(list) : renderEmpty()}</>
);

ConditionalList.propTypes = {
  list: PropTypes.array.isRequired,
  renderExists: PropTypes.func.isRequired,
  renderEmpty: PropTypes.func
};

ConditionalList.defaultProps = {
  renderEmpty: () => <p>Not Found</p>
};
