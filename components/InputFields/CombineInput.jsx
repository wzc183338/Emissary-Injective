import React from "react";
import { CombineInputStyle } from "./Input.styles";

const CombineInput = ({ label = "Project name", className, ...props }) => {
  return (
    <CombineInputStyle className={className}>
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} {...props} />
    </CombineInputStyle>
  );
};

export default CombineInput;
