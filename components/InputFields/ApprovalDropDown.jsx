import React, { useEffect, useState } from "react";
import {
  DropDownAssetsItem,
  DropDownItem,
  DropDownListWrapper,
  ProgramDrop,
} from "./Input.styles";
import { useSelector } from "react-redux";
import { API } from "@/service/api/api";

const ApprovalDropDown = ({ onChange, selectedValue, setSelectedValue, emissaryControlers }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const emissary = useSelector((state) => state.emissary.emissary);
  const [body, setBody] = useState({});



  function handleChange(e, selectedValue) {
    e.stopPropagation();
    console.log(selectedValue.userAddress)
    // setSelectedValue(selectedValue.userAddress);
    // onChange(selectedValue);
    setOpenDropDown(false);
  }








  useEffect(() => {
    onChange(selectedValue.userAddress);
  }, [onChange, selectedValue]);



  return (
    <ProgramDrop>
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedValue.userAddress ? (
          <>{selectedValue.userAddress}</>
        ) : (
          "Select Approval Signature"
        )}{" "}
        <span
          className="dropDownIcon"
          onClick={() => setOpenDropDown(!openDropDown)}
        >

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
          >
            <path d="M7 10L13.9282 0.25H0.0717969L7 10Z" fill="#E1E1E1" />
          </svg>
        </span>
        <DropDownAssetsItem display={openDropDown ? "block" : "none"}>
          {emissaryControlers?.slice(0, 5).map((elem, ind) => (
            <li key={ind} onClick={(e) => handleChange(e, elem)}>
              {elem.userAddress}{" "}
            </li>
          ))}
        </DropDownAssetsItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default ApprovalDropDown;




