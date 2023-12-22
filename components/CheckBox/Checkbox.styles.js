"use client";
import styled from "styled-components";
import Checkmark from "../../../public/checkmark.png";
import css from "styled-jsx/css";
export const CheckBoxHolder = styled.div`
  position: relative;
  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }
  label {
    color: var(--solid-gray);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: ${({ size }) => (size ? size : "14px")};
    line-height: 20px;
    padding-left: 30px;
    display: block;
    cursor: pointer;
    ${({ align }) =>
      align === true &&
      css`
        padding-left: 0;
      `}
  }
  label:before {
    content: "";
    border: 1px solid var(--matte-black);
    border-radius: 5px;
    width: 22px;
    height: 22px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    vertical-align: middle;
    cursor: pointer;
    ${({ align }) =>
      align === true &&
      css`
        left: auto;
        right: 0;
      `}
  }
  input:checked + label:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3px;
    width: 16px;
    height: 16px;
    background-image: url(${Checkmark.src});
    background-repeat: no-repeat;
    ${({ align }) =>
      align === true &&
      css`
        left: auto;
        right: 3px;
      `}
    ${({ radio }) =>
      radio === true &&
      css`
        content: "";
        left: 5px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #fff;
        background-image: none;
      `}
  }
  input:checked + label:before {
    /* background-color: var(--primary); */
  }
`;
