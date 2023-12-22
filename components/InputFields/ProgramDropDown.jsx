import React, { useEffect, useState } from "react";
import Image from "next/image";
import nft from "../../../public/nft.png";
import { DropDownItem, DropDownListWrapper, ProgramDrop } from "./Input.styles";
import { API } from "@/service/api/api";
import { useSelector } from "react-redux";

const ProgramDropDown = ({ onChange, selectedValue, setSelectedValue }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const emissary = useSelector((state) => state.emissary.emissary);
  console.log(emissary)
  const [programs, setPrograms] = useState([])


  const handlePrograms = async () => {
    const body = {
      emissaryId: emissary?._id
    }
    await API.getEmissaryPrograms(body).then((res) => {
      if (res.status == 200) {
        console.log(res)
        setPrograms(res.data.data)
      }
    })
  }


  useEffect(() => {
    handlePrograms()
  }, [])


  const ProgramArray = [
    {
      id: 1,
      program: "Klaymakers22 Global Hackathon",
      img: nft,
    },
    {
      id: 2,
      program: "Research Community Award",
      img: nft,
    },
    {
      id: 3,
      program: "Senior Design Team",
      img: nft,
    },
    {
      id: 4,
      program: "Solana Global Hackathon 2023",
    },
    {
      id: 5,
      program: "Polygon Buidl It Hackathon 2022",
    },
    {
      id: 6,
      program: "Metamask Extension Development Team",
    },
    {
      id: 7,
      program: "Flow Hackathon 2023",
    },
  ];
  function handelChange(e, selectedValue) {
    e.stopPropagation();
    setSelectedValue(selectedValue?.name);
    setOpenDropDown(false);
  }
  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);

  return (
    <ProgramDrop>
      <label htmlFor="">Program</label>
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedValue?.program
          ? selectedValue.program
          : "Select name of the program"}{" "}
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
        <DropDownItem display={openDropDown ? "block" : "none"}>
          {programs?.map((elem, ind) => (
            <li key={ind} onClick={(e) => handelChange(e, elem)}>
              {elem.name}{" "}
              {/* {elem.img && <Image src={elem?.img} alt="coinImage" />} */}
            </li>
          ))}
        </DropDownItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default ProgramDropDown;
