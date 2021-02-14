import React from "react";

export default function Button({ type, onClick, isSubmit, text, className }) {
  const getClasses = () => {
    if (type === "secondary") {
      return "border-2 border-whatkom px-8 py-1 bg-white rounded-lg text-whatkom font-bold";
    }
    return "bg-whatkom text-white rounded-lg border-none px-8 py-1";
  };
  return (
    <input
      type={isSubmit ? "submit" : "button"}
      className={`${getClasses()} ${className}`}
      onClick={onClick}
      value={text}
    />
  );
}
