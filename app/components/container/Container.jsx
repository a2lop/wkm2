import React from "react";

export default function Container({ children, type }) {
  const getClasses = () => {
    if (type === "naked") {
      return "";
    }
    return "border border-gray-500 p-2";
  };
  return <div className={`${getClasses()}`}>{children}</div>;
}
