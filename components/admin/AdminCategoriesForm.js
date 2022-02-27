import React, { useEffect, useState } from "react";

import { Table } from "components";
const AdminCategoriesForm = ({ categories }) => {
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

  return (
    <div className="w-full">
      Categorias
      <Table headers={tableHeaders} data={categories} actions={actions} />
    </div>
  );
};

export default AdminCategoriesForm;
