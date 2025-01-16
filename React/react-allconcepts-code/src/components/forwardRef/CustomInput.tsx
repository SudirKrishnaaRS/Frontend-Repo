import { forwardRef } from "react";

type CustomInputPropType = {
  placeholder: string;
};

const CustomInput = forwardRef<HTMLInputElement, CustomInputPropType>(
  (props, ref) => {
    return <input type="text" placeholder={props.placeholder} ref={ref} />;
  }
);

export default CustomInput;
