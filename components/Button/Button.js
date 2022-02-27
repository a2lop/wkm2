import React from "react";
import PropTypes from "prop-types";

import Icon from "components/Icon/Icon";

const Button = ({
  label,
  onClick = () => {},
  icon,
  iconSize,
  type = "main",
}) => {
  const getStyles = () => {
    if (type === "naked") {
      return "px-4 py-2 text-black active:bg-gray-300";
    }
    return "px-4 py-2 bg-whatkom rounded-md text-white active:bg-green-600";
  };

  return (
    <button onClick={onClick} className={getStyles()}>
      {icon && <Icon name={icon} size={iconSize} />}
      <p className="">{label}</p>
    </button>
  );
};

export default Button;
