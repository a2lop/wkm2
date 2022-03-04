import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name = "angry", size = "1x", color, spin }) => {
  return (
    <>
      <FontAwesomeIcon
        spin={spin}
        icon={["fas", name]}
        size={size}
        color={color}
      />
    </>
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
