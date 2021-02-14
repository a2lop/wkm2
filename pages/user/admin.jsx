import React, { useState } from "react";
import Button from "../../app/components/common/Button";
import Container from "../../app/components/container/Container";
import ModalEditStore from "../../app/components/modals/modalEditStore/modalEditStore";

export default function admin() {
  const [modalEditStoreIsOpened, setModalEditStoreIsOpened] = useState(true);
  return (
    <div>
      ADMIN
      <Container>Content</Container>
      <Button
        text="Test"
        isSubmit={true}
        type="secondary"
        onClick={() => {
          setModalEditStoreIsOpened(true);
        }}
      ></Button>
      <ModalEditStore
        isOpen={modalEditStoreIsOpened}
        closeModal={() => {
          setModalEditStoreIsOpened(false);
        }}
      ></ModalEditStore>
    </div>
  );
}
