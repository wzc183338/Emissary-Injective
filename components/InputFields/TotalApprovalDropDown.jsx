import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "@/service/api/api";
import {
  DropDownAssetsItem,
  DropDownListWrapper,
  ProgramDrop,
} from "./Input.styles";

const TotalApprovalDropDown = ({
  onChange,
  selectedValue,
  setSelectedValue,
  className,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const emissary = useSelector((state) => state.emissary.emissary);
  const [emissaryRoles, setEmissaryRoles] = useState([]);


  const handleControllers = async () => {
    const data = { emissaryId: emissary._id }
    await API.getEmissaryController(data).then((res) => {
      if (res.status === 200) {
        setEmissaryRoles(res.data.data);
      }
    });
  }


  function handelChange(e, selectedValue) {
    e.stopPropagation();
    console.log(selectedValue + 1)
    // console.log(ind + 1)
    setSelectedValue(selectedValue + 1);
    setOpenDropDown(false);
  }

  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);

  // Fetch data on component mount
  useEffect(() => {
    handleControllers();
  }, []);

  return (
    <ProgramDrop className={className}>
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedValue ? <>{selectedValue}</> : "0"}
        <span className="dropDownIcon" onClick={() => setOpenDropDown(!openDropDown)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
            <path d="M7 10L13.9282 0.25H0.0717969L7 10Z" fill="#E1E1E1" />
          </svg>
        </span>
        <DropDownAssetsItem display={openDropDown ? "block" : "none"}>
          {emissaryRoles.slice(0, 5).map((elem, ind) => (
            <li key={ind} onClick={(e) => handelChange(e, ind)}>
              {ind + 1}
            </li>
          ))}
        </DropDownAssetsItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default TotalApprovalDropDown;
