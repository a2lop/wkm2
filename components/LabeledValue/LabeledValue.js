import React from "react";

import Label from "components/Label/Label";

const LabeledValue = ({ value, label }) => {
  return (
    <div className="mb-4 px-2 flex-1">
      {label && <Label label={label} />}
      <div className=" px-2 h-12 content-center py-2">
        <p className="">{value}</p>
      </div>
    </div>
  );
};

export default LabeledValue;
