// import React, { useEffect } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
const Table = ({ headers, data = [], actions = [] }) => {
  return (
    <div className="">
      <TableHeader headers={headers} haveActionsSection={actions.length > 0} />
      {data.map((row) => (
        <TableRow key={row.id} row={row} actions={actions} />
      ))}
    </div>
  );
};

export default Table;
