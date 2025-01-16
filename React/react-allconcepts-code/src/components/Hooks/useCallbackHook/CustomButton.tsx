import React from "react";

const CustomButton = ({ onClickHandler, children }) => {
  console.log("Custom Button: " + children);
  return <button onClick={onClickHandler}>{children}</button>;
};

export default React.memo(CustomButton);
