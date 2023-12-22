import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { GeneralTabHolder } from "./EmissaryRolesTab.styles";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import RoleDropDown from "../InputFields/RoleDropDown";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { API } from "@/service/api/api";
import { useSelector } from "react-redux";
const approve = [
  "0x9C728A1C7ECeAa661d3330D74D8c2593A...",
  "0x9C728A1C7ECeAa671d3330D74D8c2593A...",
  "0x9C728A1C7ECeAa681d3330D74D8c2593A...",
];
function EmissaryRolesTab() {
  const [assetsValue, setAssetsValue] = useState("Select an asset");
  const [assetsValue1, setAssetsValue1] = useState("Select an asset");
  const [assetsValue2, setAssetsValue2] = useState("Select an asset");
  const [body,] = useState({})
  const [roles, setRoles] = useState([])
  const [selectedValue, setSelectedValue] = useState("")
  const [value, setValue] = useState(approve);
  const emissary = useSelector((state) => state.emissary.emissary);
  const [add, setAdd] = useState("");

  const notify = () =>
    toast.success("Changes saved successfully!", {
      hideProgressBar: true,
      icon: false,
    });


  const handelRemove = async (roleId) => {
    console.log(roleId)
    await API.deleteEmissaryController({ roleId }).then((res) => {
      if (res.status == 200) {
        handleEmissaryRoles()
        return toast.success("Controller deleted successfully!", {
          hideProgressBar: true,
          icon: false,
        });
      }
    })
  }
  function handelAdd(elem) {
    setAdd(elem);
    setValue((prev) => [...prev, add]);
  }


  const handleEmissaryRoles = async () => {
    console.log("inside emissary")
    const data = {
      emissaryId: emissary._id
    }
    await API.getEmissaryController(data).then((res) => {
      if (res.status == 200) {
        console.log(res.data.data)
        setRoles(res.data.data)
      }
    })

  }

  useEffect(() => {
    handleEmissaryRoles()
  }, [])
  return (
    <GeneralTabHolder>
      <ToastContainer />

      <form>
        <div className="content-holder">
          <div className="box">
            <strong className="subtitle">Controllers</strong>
            <p>
              Wallet address that being assigned as a controller will able to
              access to transfer request, safes, programs tabs. However,
              controllers have no access to the emissary settings, only you as
              an admin have the rights to change the settings.
            </p>
          </div>
          <div className="box">
            <div className="roles-holder">
              {roles?.map((elem, ind) => (
                <div className="flex" key={ind}>
                  <div className="col-wrap">
                    <div className="text">{elem.userAddress}</div>
                    <div className="dropdown-wrap">
                      <RoleDropDown
                        roles={roles}
                        setSelectedValue={setSelectedValue}
                        selectedValue={selectedValue}
                        onChange={(value) => console.log(value)} />
                    </div>
                  </div>
                  <ul className="action-btn">
                    <li>
                      <button type="button" onClick={() => handelAdd(elem)}>
                        <FiPlusCircle size="20" />
                      </button>
                    </li>
                    <li>
                      <button type="button" onClick={() => handelRemove(elem._id)}>
                        <RiDeleteBin6Line size="21" />
                      </button>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="btn-holder">
          <Button variant="primary" type="button" onClick={notify}>
            Save Changes
          </Button>
        </div>
      </form>
    </GeneralTabHolder>
  );
}

export default EmissaryRolesTab;
