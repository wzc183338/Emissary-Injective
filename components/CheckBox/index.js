"use client";
import React from "react";
import { CheckBoxHolder } from "./Checkbox.styles";

const CheckBox = ({
  label,
  id,
  For,
  checked,
  onChange,
  align,
  radio,
  defaultChecked,
  type,
  name,
  size,
}) => {
  return (
    <CheckBoxHolder align={align} radio={radio} size={size}>
      <input
        type={type}
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={For}>{label}</label>
    </CheckBoxHolder>
  );
};

export default CheckBox;
