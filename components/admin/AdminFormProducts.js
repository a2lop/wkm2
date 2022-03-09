import React, { useState, useEffect } from "react";

import {
  Container,
  LabeledInput,
  LabeledSelector,
  Loading,
  Modal,
  Table,
} from "components";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "firebaseUtils/clientApp";

import { useAppContext } from "context/state";

const AdminFormProducts = ({}) => {
  const [newProductName, setNewProductName] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const units = ["Unidad", "Kilo", "Libra", "Metro"];

  const { categories, setCategories } = useAppContext();

  // useEffect(() => {
  //   if (categories.length === 0) {
  //     loadCategories();
  //   }
  // }, [categories]);

  const tableHeaders = ["Nombre", "Productos"];

  const onEdit = (category) => {
    console.log("onEdit", category);
  };

  const onDelete = (category) => {
    console.log("onDelete", category);
  };

  const actions = [
    { icon: "pencil", action: onEdit },
    { icon: "trash-can", action: onDelete },
  ];

  const openAddProduct = () => {
    setShowModal(true);
  };

  const addProduct = async () => {
    setIsAddingCategory(true);
    setTimeout(() => {
      setIsAddingCategory(false);
      setShowModal(false);
    }, 3000);

    const storeRef = doc(
      db,
      "stores",
      "33mia5Ex0noh0ZtiDVej",
      "categories",
      newCategoryName
    );

    const response = await setDoc(storeRef, {
      name: newCategoryName,
      products: 0,
    });
    setIsAddingCategory(false);
    setShowModal(false);
    loadCategories();
  };

  return (
    <>
      <Container
        title="Productos"
        buttonRightLabel="Añadir"
        onClickButtonRight={openAddProduct}
      >
        {/* {isLoading ? (
          <Loading />
        ) : (
          <Table headers={tableHeaders} data={categories} actions={actions} />
        )} */}
      </Container>

      <Modal
        showModal={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
        title="Nuevo Producto"
        labelAccept="Crear"
        onSubmit={addProduct}
        isLoading={isAddingCategory}
      >
        <div className="flex flex-row">
          <LabeledSelector
            options={["cat1", "bebidas", "frutas"]}
            label="Categoría"
            value={newCategory}
            setValue={setNewCategory}
          />
          <LabeledInput
            label="Nombre"
            value={newProductName}
            setValue={setNewProductName}
          />
        </div>
        <div className="flex flex-row">
          <LabeledSelector
            options={units}
            label="Unidad de venta"
            value={newCategory}
            setValue={setNewCategory}
          />
          <LabeledInput
            label="Precio"
            value={newProductName}
            setValue={setNewProductName}
          />
        </div>
        <LabeledInput
          label="Descripción"
          isTextArea
          value={newProductName}
          setValue={setNewProductName}
        />
      </Modal>
    </>
  );
};

export default AdminFormProducts;
