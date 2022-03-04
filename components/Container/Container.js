import { Button } from "components";
import React from "react";

// import { useCollection } from "react-firebase-hooks/firestore";
// import firebase from '../firebase/clientApp';

const Container = ({
  children,
  title,
  buttonRightLabel,
  onClickButtonRight = () => {},
  showBottomDivider,
}) => {
  return (
    <div className="p-4 pb-0 flex-1">
      <div className="flex flex-row h-10 mb-2">
        {title && <p className="text-xl flex-1">{title}</p>}
        {buttonRightLabel && (
          <Button label={buttonRightLabel} onClick={onClickButtonRight} />
        )}
      </div>
      {children}
      {showBottomDivider && <div className="border-b-2 bg-gray-200" />}
    </div>
  );
};

export default Container;
