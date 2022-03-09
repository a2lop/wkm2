import React, { useState, useEffect } from "react";

import { Container, LabeledInput, Loading, Modal, Table } from "components";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "firebaseUtils/clientApp";

import { useAppContext } from "context/state";

const AdminCategoriesForm = ({}) => {
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
      const data = doc.data();
      fetchedCategories.push({
        id: doc.id,
        name: doc.id,
        products: data.products,
      });
    });

    setCategories(fetchedCategories);
    setIsLoading(false);
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

  const addCategory = async () => {
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
        title="Categorias"
        buttonRightLabel="Nueva"
        onClickButtonRight={openAddCategory}
      >
        {isLoading ? (
          <Loading />
        ) : (
          <Table headers={tableHeaders} data={categories} actions={actions} />
        )}
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
        <LabeledInput
          label="Nombre de categoría"
          value={newCategoryName}
          setValue={setNewCategoryName}
        />
      </Modal>
    </>
  );
};

export default AdminCategoriesForm;
