import React, { useEffect, useState } from "react";
import {
  DropDownItem,
  DropDownListWrapper,
  PaymentDropDownItem,
  ProgramDrop,
} from "./Input.styles";
import nft from "../../../public/nft.png";
import klay from "../../../public/klayLogo.png";
import Image from "next/image";
const PaymentDropDown = ({ onChange, className, label = "Program", selectedAssets }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState({
    program: "KLAY",
    img: klay,
  });
  const ProgramArray = [
    {
      id: 1,
      program: "NFT",
      img: nft,
    },
    {
      id: 2,
      program: "KLAY",
      img: klay,
    },
    {
      id: 3,
      program: "NFT",
      img: nft,
    },
    {
      id: 4,
      program: "BTC",
      img: klay,
    },
  ];
  function handelChange(e, elem) {
    e.stopPropagation();
    setSelectedValue(elem);
    setOpenDropDown(false);
  }
  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);

  return (
    <ProgramDrop className={className}>
      <label htmlFor="">{label}</label>
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedAssets?.img && (
          <Image
            src={selectedAssets?.img}
            alt="coinImage"
            width={17}
            height={17}
          />
        )}
        {selectedAssets?.program}{" "}
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
        <PaymentDropDownItem display={openDropDown ? "block" : "none"}>

          <li>
            {selectedAssets?.program}
          </li>

        </PaymentDropDownItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default PaymentDropDown;
