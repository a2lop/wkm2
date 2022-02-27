import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name = "angry", size = "1x", color }) => {
  return (
    <>
      <FontAwesomeIcon icon={["fas", name]} size={size} color={color} />
    </>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
