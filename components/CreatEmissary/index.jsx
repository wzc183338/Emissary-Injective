import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import { FormHolder } from "./CreatEmissary.styles";
import CombineInput from "../InputFields/CombineInput";
import Button from "../Button/Button";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import DigestingInfo from "../DigestingInfo";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Router, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { API } from "@/service/api/api";
import { storeEmissary } from "@/redux/EmissaryRedux";

const CreatEmissary = () => {
  const [value, setValue] = useState("");
  const [body, setBody] = useState({});
  const router = useRouter()
  const dispatch = useDispatch()
  const userAddress = useSelector((state) => state.address.address);
  const shorten = (address) => {
    if (address.length > 10) {
      return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    }
    return address;
  };


  const handleEmissaryCreation = async (e) => {
    e.preventDefault()
    if (!body.name) {
      return toast.error("Please provide emissary name!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    setSteps(1)

    if (!body.url) {
      return toast.error("Please provide slug for your name!", {
        hideProgressBar: true,
        icon: false,
      });
    }

    setSteps(2)

    if (!body.file) {
      return toast.error("Please provide a logo for your name!", {
        hideProgressBar: true,
        icon: false,
      });
    }
    body.asset = "INJ"
    setSteps(3)
    if (!body.asset) {
      return toast.error("Please provide a assets for your emissary!", {
        hideProgressBar: true,
        icon: false,
      });
    }

    setSteps(4)

    let formData = new FormData();
    formData.append('name', body.name);
    formData.append('url', body.url);
    formData.append('file', body.file);
    formData.append('asset', body.asset == "INJ");

    try {
      await API.createEmissary(formData).then((res) => {
        if (res.status === 200) {
          dispatch(storeEmissary(res.data.data));
          toast.success(res.data.message);
          router.push("/emissary-listed");
        }
      })
    } catch (error) {
      console.log(error)
      setSteps(3)
      toast.error("Error creating emissary please try again");
    }

  }

  const [steps, setSteps] = useState(0);

  return (
    <>
      <ToastContainer />
      {steps !== 4 && (
        <FormHolder>
          <form className="wrap">
            <Link href="/" className="btn-back">
              <IoArrowBackCircleOutline size="24" /> Back to emissary.global
            </Link>
            <div className="user-info">
              <FaRegUserCircle size="26" />
              <span className="text">{shorten(userAddress)}</span>
            </div>

            {steps == 0 && (
              <div className="input-content">
                <CombineInput onChange={(e) => setBody({ ...body, name: e.target.value })} label="Provide a name for your emissary..." />
                <div className="btn-holder">
                  <Button
                    type="button"
                    variant="primary"
                    className="back"
                    onClick={() => router.push("/emissary-listed")}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={(e) => handleEmissaryCreation(e)}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}
            {steps == 1 && (
              <div className="input-content">
                <CombineInput value={body.url} onChange={(e) => setBody({ ...body, url: e.target.value })} label="Provide a URL slug for your emissary..." />
                <div className="btn-holder">
                  <Button
                    type="button"
                    variant="primary"
                    className="back"
                    onClick={() => setSteps(0)}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={(e) => handleEmissaryCreation(e)}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}

            {steps == 2 && (
              <div className="input-content">
                <strong className="title">
                  Upload a logo for your emissary...
                </strong>
                <p>
                  Recommend an image with a ratio of 4:1 and transparent
                  background for the perfect effect.
                </p>
                <div className="upload-file">
                  <label htmlFor="upload" className="labelButton">
                    <FiPlusCircle />
                  </label>
                  <input onChange={(e) => setBody({ ...body, file: e.target.files[0] })} type="file" id="upload" accept=".pnd , .jpg" />
                </div>
                <div className="btn-holder">
                  <Button
                    type="button"
                    variant="primary"
                    className="back"
                    onClick={() => setSteps(1)}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      handleEmissaryCreation(e)
                    }}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}
            {steps == 3 && (
              <div className="input-content">
                <strong className="title">
                  What asset(s) your emissary utilizing?
                </strong>
                <div className="inner-wrap">
                  <AssetsDropDown
                    selectedValue={value}
                    setSelectedValue={setValue}
                    onChange={(selectedValue) => selectedValue}
                  />
                  <button className="btn-add" type="button">
                    <FiPlusCircle size="30" />
                  </button>
                </div>
                <div className="btn-holder">
                  <Button
                    variant="primary"
                    className="back"
                    type="button"
                    onClick={() => setSteps(2)}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={(e) => handleEmissaryCreation(e)}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}
          </form>
        </FormHolder >
      )}
      {steps == 4 && <DigestingInfo />}
    </>
  );
};

export default CreatEmissary;
