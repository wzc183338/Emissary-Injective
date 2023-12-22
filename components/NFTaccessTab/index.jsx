import React, { useEffect, useState } from "react";
import CombineInput from "../InputFields/CombineInput";
import Button from "../Button/Button";
import { GeneralTabHolder } from "./NFTaccessTab.styles";
import CheckBox from "../CheckBox";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "@/service/api/api";
import { useSelector } from "react-redux";

function NFTaccessTab() {
  const [body, setBody] = useState({});
  const [accessMethod, setAccessMethod] = useState("");
  const emissary = useSelector((state) => state.emissary.emissary);


  const userEmissary = async () => {
    const data = { emissaryId: emissary._id }
    await API.getUserEmissaryById(data).then((res) => {
      if (res.status === 200) {
        // console.log(res);
        const responseData = res.data.data;
        const access = responseData.access === "NFTHolder" ? "NFTHolder" : "Public";
        setAccessMethod(access);
        setBody(responseData);

      }
    })
  }


  const handleCheckBoxChange = (method) => {
    setAccessMethod(method);
    setBody({ ...body, access: method });
  };

  const handleEmissaryAccess = async (e) => {
    handleValidation()
    await API.updateUserEmissary(body).then((res) => {
      if (res.status == 200) {
        toast.success("Changes saved successfully!", {
          hideProgressBar: true,
          icon: false,
        });
      }
    })
  }


  useEffect(() => {
    userEmissary()
  }, [])

  const handleValidation = async () => {
    if (body.NFTHolder) {
      if (!body.nftContractAddress) {
        return toast.error("Please provide NFT Contract Address!", {
          hideProgressBar: true,
          icon: false,
        });
      }

      if (body.Public) {
        delete body["nftContractAddress"]
        return toast.error("Please provide NFT Contract Address!", {
          hideProgressBar: true,
          icon: false,
        });
      }
    }
  }

  return (
    <GeneralTabHolder>
      <ToastContainer />
      <form>
        <div className="content-holder">
          <div className="box">
            <strong className="subtitle">Emissary Access Method</strong>
            <p>Choose only one access method from the two below.</p>
          </div>
          <div className="box">
            {/* first check Box item */}
            <div className="checkBoxWrapper">
              <CheckBox
                type="checkbox"
                id="default"
                For="default"
                label="Access open for everyone (Default)"
                checked={accessMethod === "Public"}
                onChange={() => handleCheckBoxChange("Public")}
              />
              <div className="formWrapper">
                <p>
                  Everyone can access to this emissary after connecting their
                  wallet at my emissary homepage. Perfect for community which
                  not everyone owns a certain NFT collection and need to process
                  different payouts!
                </p>
              </div>
            </div>
            <div className="checkBoxWrapper">
              <CheckBox
                type="checkbox"
                id="nft"
                For="nft"
                label="Access open for NFT collection holders only"
                checked={accessMethod === "NFTHolder"}
                onChange={() => handleCheckBoxChange("NFTHolder")}
              />
              <div className="formWrapper">
                <p>
                  Only certain NFT collection holder can access to this emissary
                  after connecting their wallet at my emissary homepage. Perfect
                  for community with an NFT collection as an identity!
                </p>
                {accessMethod === "NFTHolder" && (
                  <div className="borderform">
                    <CombineInput value={body.nftContractAddress} onChange={(e) => setBody({ ...body, nftContractAddress: e.target.value })} label="NFT contract address" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="btn-holder">
          <Button variant="primary" type="button" onClick={handleEmissaryAccess}>
            Save Changes
          </Button>
        </div>
      </form>
    </GeneralTabHolder>
  );
}

export default NFTaccessTab;
