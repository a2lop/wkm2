import React, { useState, useEffect } from "react";

import { Container, LabeledInput, Modal, Table } from "components";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "firebaseUtils/clientApp";

import { useAppContext } from "context/state";

const AdminCategoriesForm = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const [isAddingCategory, setIsAddingCategory] = useState(false);

  const { categories, setCategories } = useAppContext();

  useEffect(() => {
    if (categories.length === 0) {
      loadCategories();
    }
  }, [categories]);

  const loadCategories = async () => {
    const docRef = collection(
      db,
      "stores",
      "33mia5Ex0noh0ZtiDVej",
      "categories"
    );
    const categoriesResult = await getDocs(docRef);
    const fetchedCategories = [];
    categoriesResult.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const data = doc.data();
      fetchedCategories.push({
        id: doc.id,
        name: doc.id,
        products: data.products,
      });
    });
    console.log(fetchedCategories);

    setCategories(fetchedCategories);
  };

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

  const openAddCategory = () => {
    setShowModal(true);
  };

  const addCategory = () => {
    setIsAddingCategory(true);
    setTimeout(() => {
      setIsAddingCategory(false);
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <Container
        title="Categorias"
        buttonRightLabel="Nueva"
        onClickButtonRight={openAddCategory}
      >
        <Table headers={tableHeaders} data={categories} actions={actions} />
      </Container>

      <Modal
        showModal={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
        title="Nueva categoría"
        labelAccept="Crear"
        onSubmit={addCategory}
        isLoading={isAddingCategory}
      >
        <LabeledInput label="Nombre de categoría" />
      </Modal>
    </>
  );
};

export default AdminCategoriesForm;
