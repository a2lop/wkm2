import React, { useEffect } from "react";

import { useRouter } from "next/router";
// import { useCollection } from "react-firebase-hooks/firestore";
// import firebase from '../firebase/clientApp';

const SidebarOption = ({ option, onClick = () => {}, isSelected }) => {
  const isSelectedStyles = isSelected ? "font-bold" : "";

  return (
    <button
      className={`py-2 w-28 text-white ${isSelectedStyles}`}
      onClick={() => {
        onClick(option.id);
      }}
    >
      {option.label}
    </button>
  );
};

export default SidebarOption;
