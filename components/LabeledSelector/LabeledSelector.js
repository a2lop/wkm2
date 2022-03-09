import React, { useEffect } from "react";

import Label from "components/Label/Label";
import ComboBox from "react-responsive-combo-box";

import "react-responsive-combo-box/dist/index.css";

const LabeledSelector = ({
  value,
  setValue = () => {},
  options = [],
  label,
  placeholder,
}) => {
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="mb-4 px-2 flex-1">
      {label && <Label label={label} />}
      <ComboBox
        className="flex-1 border-2 border-gray-200 bg-gray-200 px-2 h-12 w-full"
        options={options}
        enableAutocomplete
      />
    </div>
  );
};

export default LabeledSelector;
