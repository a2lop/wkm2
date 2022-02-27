import React, { useEffect, useState } from "react";

import LabeledInput from "components/LabeledInput/LabeledInput";
import LabeledValue from "components/LabeledValue/LabeledValue";
import Button from "components/Button/Button";
import { useAppContext } from "context/state";

const AdminPersonalForm = ({
  selectedOption = "categories",
  setSelectedOption,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const [address, setAddress] = useState("Mi tienda");

  const { user } = useAppContext();

  useEffect(() => {
    if (user) {
      setName(user.storeName);
    }
  }, [user]);

  return (
    <div className="">
      Información personal
      <Button
        label={"Editar"}
        onClick={() => {
          setIsEditing(!isEditing);
        }}
      />
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

export default AdminPersonalForm;
