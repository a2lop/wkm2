import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Label from "components/Label/Label";
// import { useCollection } from "react-firebase-hooks/firestore";
// import firebase from '../firebase/clientApp';

const LabeledInput = ({
  value,
  setValue = () => {},
  label,
  placeholder,
  type = "text",
  isTextArea,
}) => {
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="mb-4 px-2 flex-1">
      {label && <Label label={label} />}
      {isTextArea ? (
        <textarea
          className={`border-2 border-gray-200 bg-gray-200 px-2 h-16 w-full`}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          className={`border-2 border-gray-200 bg-gray-200 px-2 h-12 w-full`}
          value={value}
          onChange={handleOnChange}
          placeholder={placeholder}
          type={isTextArea ? "textarea" : type}
        />
      )}
    </div>
  );
};

export default LabeledInput;
