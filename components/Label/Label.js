import React, { useEffect } from "react";

// import { useCollection } from "react-firebase-hooks/firestore";
// import firebase from '../firebase/clientApp';

const Label = ({ label }) => {
  return <p className="text-gray-500 text-xs uppercase">{label}</p>;
};

export default Label;
