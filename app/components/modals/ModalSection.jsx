import React from "react";

export default function ModalSection({ label, children }) {
  return (
    <div className="flex">
      <div className="w-36 mr-2">
        <p className={"font-bold"}>{label}</p>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
