import { Button } from "components";
import React, { useEffect } from "react";
const TableRow = ({ row, actions = [] }) => {
  return (
    <div className="flex flex-row border-b-2">
      {Object.keys(row).map((rowKey) => {
        if (rowKey !== "id") {
          return (
            <p className="flex-1" key={rowKey}>
              {row[rowKey]}
            </p>
          );
        }
        return null;
      })}
      {actions.length > 0 && (
        <>
          {actions.map((action, index) => (
            <Button
              type="naked"
              key={action.icon}
              icon={action.icon}
              onClick={() => {
                try {
                  action.action(row);
                } catch (error) {
                  console.error("error", erro);
                }
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TableRow;
