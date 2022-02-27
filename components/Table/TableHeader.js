import React, { useEffect } from "react";
const TableHeader = ({ headers, haveActionsSection }) => {
  return (
    <div className="flex flex-row bg-whatkom text-white flex-1">
      {headers.map((header) => (
        <p className="flex-1 text-center py-2" key={header}>
          {header}
        </p>
      ))}
      {haveActionsSection && <p className="py-2">Acciones</p>}
    </div>
  );
};

export default TableHeader;
