import React from "react";

import Label from "components/Label/Label";

const LabeledValue = ({ value, label }) => {
  return (
    <div className="mb-4 px-2">
      {label && <Label label={label} />}
      <div className="border-2 border-gray-100 bg-gray-100 px-2 h-12 content-center py-2">
        <p>{value}</p>
      </div>
    </div>
  );
};

export default LabeledValue;
