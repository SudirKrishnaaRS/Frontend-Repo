import React, { useEffect, useRef } from "react";
import CustomInput from "./CustomInput";

const ForwardRefExample: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <CustomInput placeholder="Enter your name" ref={inputRef} />
    </div>
  );
};

export default ForwardRefExample;
