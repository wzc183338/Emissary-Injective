import React, { useEffect, useState } from "react";
import {
  DropDownAssetsItem,
  DropDownItem,
  DropDownListWrapper,
  ProgramDrop,
} from "./Input.styles";
import injLogo from "../../../public/Injective-logo.webp";
import Planets from "../../../public/Planets.png";
import USDC from "../../../public/USDC.png";
import USDT from "../../../public/USDT.png";
import XET from "../../../public/XET.png";
import Image from "next/image";

const AssetsDropDown = ({ onChange, selectedValue, setSelectedValue }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(
  //   "  Select name of the program"
  // );
  const ProgramArray = [
    {
      id: 1,
      program: "USDC",
      img: USDC,
      address: ""
    },
    {
      id: 3,
      program: "INJ",
      img: injLogo,
      address: "native"
    },
    {
      id: 4,
      program: "USDT",
      img: USDT,
      address: "0xa9517f5E9fEBD8b87E91086d8DBee43699258Bf5"
    }
  ];
  function handelChange(e, selectedValue) {
    e.stopPropagation();
    setSelectedValue(selectedValue);
    setOpenDropDown(false);
  }
  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);

  return (
    <ProgramDrop>
      {/* <label htmlFor="">Program</label> */}
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedValue?.program ? (
          <>
            <Image src={selectedValue.img} alt="img" width={20} height={20} />
            {selectedValue.program}
          </>
        ) : (
          "Select an asset"
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
          {ProgramArray.map((elem, ind) => (
            <li key={ind} onClick={(e) => handelChange(e, elem)}>
              {elem.program}{" "}
              {elem.img && <Image width={30} src={elem?.img} alt="coinImage" />}
            </li>
          ))}
        </DropDownAssetsItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default AssetsDropDown;
