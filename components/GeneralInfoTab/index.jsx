import React, { useState, useEffect } from "react";
import CombineInput from "../InputFields/CombineInput";
import Button from "../Button/Button";
import Image from "next/image";
import plusIcon from "../../../public/plusIcon.png";
import { LuFiles } from "react-icons/lu";
import { GeneralTabHolder } from "./GeneralInfoTab.styles";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { API } from "@/service/api/api";
import { storeEmissary } from "@/redux/EmissaryRedux";

function GeneralInfoTab() {
  const emissary = useSelector((state) => state.emissary.emissary);
  const [previewLogo, setPreviewLogo] = useState(emissary.logo);


  const dispatch = useDispatch()
  const [assetsValue, setAssetsValue] = useState("")
  const [formData, setFormData] = useState({
    name: emissary.name,
    uniqueCode: emissary.uniqueCode,
    assetsValue: emissary.asset,
    logo: emissary.logo,
  });

  useEffect(() => {
    setFormData({
      name: emissary.name,
      assetsValue: emissary.asset,
      logo: emissary.logo,
    });
  }, [emissary]);

  useEffect(() => {
    setPreviewLogo(emissary.logo);
  }, [emissary.logo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewLogo(previewUrl);
      setFormData(prevState => ({
        ...prevState,
        file: file
      }));
    }
  };



  const handleUpdateEmissary = async (e) => {
    e.preventDefault();
    const updateFormData = new FormData();
    updateFormData.append('emissaryId', emissary._id);
    updateFormData.append('name', formData.name);
    updateFormData.append('asset', assetsValue?.program);
    if (formData.file instanceof File) {
      updateFormData.append('file', formData.file);
    }

    try {
      const response = await API.updateUserEmissary(updateFormData);

      if (response.status === 200) {
        dispatch(storeEmissary(response.data.data));
        setPreviewLogo(response.data.data.logo);
        toast.success("Changes saved successfully!", {
          hideProgressBar: true,
          icon: false,
        });
      }
    } catch (error) {
      console.error('Failed to update emissary:', error);
    }
  };



  return (
    <>
      <GeneralTabHolder>
        <ToastContainer />
        <form>
          <div className="content-holder">
            <div className="box">
              <CombineInput
                value={formData.name}
                onChange={handleChange}
                name="name"
                label="Name of emissary"
                placeholder="Emissary Name"
              />
            </div>
            <div className="box">
              <strong className="subtitle">Emissary Unique Code</strong>
              <p>This unique code is generated at the time you create the emissary and cannot be changed.</p>
              <div className="code-input">
                <button className="btn-copy" type="button">
                  <LuFiles size="20" />
                </button>
                <input
                  type="text"
                  value={formData.uniqueCode}
                  placeholder="32sj34"
                  readOnly
                />
              </div>
            </div>
            <div className="box">
              <strong className="subtitle">Utilize Asset(s)</strong>
              <p>Add asset(s) that will be used in this emissary for transfer requests and safes payout.</p>
              <AssetsDropDown
                onChange={(value) => formData.asset = value.program}
                selectedValue={assetsValue}
                setSelectedValue={setAssetsValue}
              />
            </div>
            <div className="recommend-img">
              <div className="text-box">
                <strong className="subtitle">Logo Image</strong>
                <p>Recommend an image with a ratio of 4:1 and transparent background for the perfect effect.</p>
              </div>
              <div className="logo-holder">
                <label htmlFor="upload">
                  <Image
                    src={previewLogo || plusIcon}
                    alt="logo"
                    width={185}
                    height={185}
                    layout="responsive"
                  />
                </label>
                <input
                  className="inputupload"
                  id="upload"
                  type="file"
                  accept=".png, .jpg, .gif"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          <div className="btn-holder">
            <Button variant="primary" type="button" onClick={handleUpdateEmissary}>
              Save Changes
            </Button>
          </div>
        </form>
      </GeneralTabHolder>
    </>
  );
}

export default GeneralInfoTab;
