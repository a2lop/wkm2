import React, { useEffect, useState } from "react";

import { useAppContext } from "context/state";
import { Button, Container } from "components";
import AdminField from "./AdminField";

import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "firebaseUtils/clientApp";
import { async } from "@firebase/util";

const AdminPersonalForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [fb, setFb] = useState();
  const [ig, setIg] = useState();
  const [isSaving, setIsSaving] = useState(false);

  const { user } = useAppContext();

  useEffect(() => {
    if (user) {
      setName(user.storeName);
      setCity(user.city);
      setAddress(user.address);
      setEmail(user.email);
      setPhone(user.phone);
      setFb(user.fb);
      setIg(user.ig);
    }
  }, [user]);

  const updateStoreInfo = async () => {
    setIsSaving(true);
    const docRef = doc(db, "stores", "33mia5Ex0noh0ZtiDVej");

    await updateDoc(docRef, {
      storeName: name,
      city,
      phone,
      email,
      address,
      fb,
      ig,
      timestamp: serverTimestamp(),
    });
    setIsSaving(false);
    setIsEditing(false);
  };

  return (
    <div>
      <Container
        title="Información personal"
        buttonRightLabel="Editar"
        onClickButtonRight={() => {
          setIsEditing(!isEditing);
        }}
        showBottomDivider
      >
        <>
          <div className="flex flex-row flex-1">
            <AdminField
              isEditing={isEditing}
              value={name}
              setValue={setName}
              label="Nombre de tu tienda"
            />
            <AdminField
              isEditing={isEditing}
              value={city}
              setValue={setCity}
              label="Ciudad"
            />
          </div>
          <AdminField
            isEditing={isEditing}
            value={address}
            setValue={setAddress}
            label="Dirección"
          />
          <div className="flex flex-row flex-1">
            <AdminField
              isEditing={isEditing}
              value={email}
              setValue={setEmail}
              label="Correo eléctrónico"
            />
            <AdminField
              isEditing={isEditing}
              value={phone}
              setValue={setPhone}
              label="Teléfono"
            />
          </div>
          <div className="flex flex-row flex-1">
            <AdminField
              isEditing={isEditing}
              value={fb}
              setValue={setFb}
              label="Facebook"
            />
            <AdminField
              isEditing={isEditing}
              value={ig}
              setValue={setIg}
              label="Instagram"
            />
          </div>
          {isEditing && (
            <div className="text-center mb-2">
              <Button
                isLoading={isSaving}
                label={"Guardar"}
                onClick={updateStoreInfo}
              />
            </div>
          )}
        </>
      </Container>
      <Container title="Estadisticas">
        <div className="flex flex-row flex-1">
          <AdminField value={20} label="Productos" />
          <AdminField value={4} label="Categorías" />
          <AdminField value={222} label="Visitas" />
        </div>
      </Container>
    </div>
  );
};

export default AdminPersonalForm;
