import React, { useEffect, useState } from "react";

import LabeledInput from "components/LabeledInput/LabeledInput";
import SidebarOption from "components/SidebarOption/SidebarOption";
import LabeledValue from "components/LabeledValue/LabeledValue";
import Icon from "components/Icon/Icon";

const PersonalForm = ({ selectedOption = "categories", setSelectedOption }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [name, setName] = useState("Mi tienda");
  const [address, setAddress] = useState("Mi tienda");
  return (
    <div className="">
      Información personal
      <Icon name="coffee"/>
      {isEditing ? (
        <>
          <LabeledInput
            value={name}
            setValue={setName}
            label="Nombre de tu tienda"
          />
          <LabeledInput
            value={address}
            setValue={setAddress}
            label="Dirección"
          />
        </>
      ) : (
        <>
          <LabeledValue value={name} label="Nombre de tu tienda" />
          <LabeledValue value={address} label="Dirección" />
        </>
      )}
    </div>
  );
};

export default PersonalForm;
