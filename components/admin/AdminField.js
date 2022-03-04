// import React, { useEffect, useState } from "react";

import { LabeledInput, LabeledValue } from "components";

const AdminField = ({ isEditing, value, setValue, label }) => {
  return (
    <>
      {isEditing ? (
        <>
          <LabeledInput value={value} setValue={setValue} label={label} />
        </>
      ) : (
        <>
          <LabeledValue value={value} label={label} />
        </>
      )}
    </>
  );
};

export default AdminField;
