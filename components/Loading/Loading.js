import { Icon } from "components";
import React, { useEffect } from "react";

// import { useCollection } from "react-firebase-hooks/firestore";
// import firebase from '../firebase/clientApp';

const Loading = ({ size = "3x" }) => {
  return (
    <div className="text-whatkom text-center">
      <Icon name="circle-notch" size={size} spin />
    </div>
  );
};

export default Loading;
