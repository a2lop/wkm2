import { Button, Icon } from "components";
import React, { useEffect } from "react";

const Modal = ({
  children,
  title,
  labelDismiss = "Cancelar",
  labelAccept = "Aceptar",
  closeModal = () => {},
  onSubmit = () => {},
  showModal,
  isLoading = true,
}) => {
  if (!showModal) {
    return <></>;
  }
  return (
    <div>
      <div className="absolute bg-black border-2 border-gray-200 top-0 bottom-0 left-0 right-0 bg-opacity-30 p-32">
        <div className="bg-white z-10">
          <div className="px-4 py-2 flex flex-row">
            <p className="text-xl">{title}</p>
            <Button
              icon="times"
              iconSize="lg"
              className={"ml-2"}
              type="naked"
              onClick={closeModal}
            />
          </div>
          <hr />
          <div className="p-2">{children}</div>
          <hr />
          <div className="py-2 px-4 text-right">
            <Button
              label={labelDismiss}
              type="secondary"
              onClick={closeModal}
            />
            <Button
              className="w-20"
              label={labelAccept}
              onClick={onSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
