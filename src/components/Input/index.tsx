import React, { InputHTMLAttributes } from "react";
import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="input-block">
      <label htmlFor={props.name}>{props.label}</label>
      <input type="text" id={props.name} {...props} />
      {/*  Os "Type" dos inputs podem receber muitas propriedades diferentes, portanto importamos InputHTMLAttributes e extendemos na interface */}
    </div>
  );
};
export default Input;
