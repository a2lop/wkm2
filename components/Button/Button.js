import React from "react";

import Icon from "components/Icon/Icon";
import Image from "next/image";

const Button = ({
  label,
  onClick = () => {},
  icon,
  iconSize,
  type = "main",
  isLoading,
  className,
}) => {
  const getStyles = () => {
    if (type === "secondary") {
      return "px-4 py-2 text-black active:bg-gray-300";
    } else if (type === "naked") {
      return "text-black active:bg-gray-300";
    }
    return "px-4 h-10 bg-whatkom rounded-md text-white active:bg-green-600";
  };

  return (
    <button onClick={onClick} className={`${getStyles()} ${className}`}>
      {!isLoading ? (
        <>
          {icon && <Icon name={icon} size={iconSize} />}
          <p className="">{label}</p>
        </>
      ) : (
        <Icon name={"circle-notch"} size={"lg"} spin />
      )}
    </button>
  );
};

export default Button;
