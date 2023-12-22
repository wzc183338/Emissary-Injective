import styled from "styled-components";

export const ProgramStyled = styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px; */
  color: var(--gray-50);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  max-width: 580px;
  width: 100%;

  .buttonWrapp {
    display: flex;
    gap: 10px;
    margin: 20px 0;

    @media (min-width: 768px) {
      margin: 20px 0 20px 30px;
    }
  }

  p {
    padding-top: 10px;
  }

  .heading {
    color: var(--blue);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 10px;
  }
  .inputWrapper {
    width: 100%;
    margin-bottom: 20px;
  }
  .checkBoxWrapper {
    margin-bottom: 29px;
    width: 100%;
  }
  .formWrapper {
    width: 100%;

    @media (min-width: 768px) {
      margin-left: 30px;
    }
  }
  .borderform {
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    padding: 16px 15px;
    width: 100%;
    margin-top: 8px;

    @media (min-width: 768px) {
      padding: 20px 29px;
    }

    .input {
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }
    }

    .amountDrop {
      display: flex;
      input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .amount {
        max-width: 112px;
        width: 100%;
        margin-top: 17px;
        /* z-index: 2; */
        ul {
          padding: 14px 18px;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          color: var(--blue);
        }
      }
    }
  }
`;

export const UploadImage = styled.div`
  position: relative;
  padding-top: 20px;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 55px;
    padding-top: 40px;
  }

  .inputupload {
    display: none;
  }

  .text {
    position: relative;
    margin: 0 0 13px;

    @media (min-width: 768px) {
      margin: 0;
    }

    strong.title {
      display: block;
      color: var(--solid-gray);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    p {
      max-width: 206px;
      margin: 0;
    }
  }

  .labelBorder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 217px;
    height: 217px;
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    overflow: hidden;
  }
`;

export const FinalCheck = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  width: 100%;
  p {
    margin: 0;
  }
  strong {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  label {
    color: var(--gray-50);
  }
`;

import React, { useState } from "react";
import CombineInput from "../InputFields/CombineInput";
import CheckBox from "../CheckBox";
import PaymentDropDown from "../InputFields/PaymentDropDown";
import Image from "next/image";
import plusIcon from "../../../public/plusIcon.png";
import Button from "../Button/Button";
import {
  NftCreationprocess,
  NftDetailWrapper,
} from "../NftCreationComp/NftCreation";
import nftGif from "../../../public/nftCreation.gif";
import NftCreated from "./NftCreatedComp";
import AutoSubmittedComp from "./AutoSubmittedComp";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API } from "@/service/api/api";
import { useSelector } from "react-redux";


const ProgramCreation = () => {
  const [uploadedNft, setUploadedNft] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState("");
  const emissary = useSelector((state) => state.emissary.emissary);
  const [body, setBody] = useState({})

  console.log(body)
  console.log(selectedCheckbox)

  const handleCheckboxChange = (checkboxId) => {
    setSelectedCheckbox(checkboxId);
  };

  const handleProgram = (e) => {
    e.preventDefault();
    const isValid = handleValidation();

    if (!isValid) {
      return;
    }

    const formData = new FormData();
    for (const key in body) {
      if (Object.prototype.hasOwnProperty.call(body, key)) {
        formData.append(key, body[key]);
      }
    }

    if (uploadedNft instanceof File) {
      formData.append('file', uploadedNft);
    }

    API.createProgram(formData).then((res) => {
      if (res.status === 200) {
        setSelectedCheckbox("")
        setBody({})
        setUploadedNft("");
        return toast.success("Program created successfully!", {
          hideProgressBar: true,
          icon: false,
        });
      }
    });
  };

  const handleValidation = () => {
    if (!body.name) {
      toast.error("Please enter program name!", {
        hideProgressBar: true,
        icon: false,
      });
      return false;
    }

    const fieldsToRemove = {
      program: ['nftRedemption', 'title', 'titleVerify', 'description', 'symbol', 'nftImage', 'autoNFTContractRequestCurrency', 'autoNFTContractAddress', 'autoNFTContractRequestAmount'],
      redemption: ['tokenGatedNFTProgram', 'tokenGatedNFTContractAddress', 'autoNFTContractAddress', 'autoNFTContractRequestAmount', 'autoNFTContractRequestCurrency'],
      Submission: ['nftRedemption', 'title', 'titleVerify', 'description', 'symbol', 'nftImage', 'tokenGatedNFTProgram', 'tokenGatedNFTContractAddress'],
    };

    // Set all fields to false initially
    body.tokenGatedNFTProgram = false;
    body.nftRedemption = false;
    body.nftAutoRequestSubmission = false;
    body.emissaryId = emissary._id;

    // Set the selected field to true
    if (selectedCheckbox === 'program') {
      console.log("program")
      body.tokenGatedNFTProgram = true;
      if (!body.tokenGatedNFTContractAddress) {
        toast.error("Please enter your NFT contract address!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }
    } else if (selectedCheckbox === 'redemption') {
      console.log("redem")
      body.nftRedemption = true;
      if (!body.title) {
        toast.error("Please enter title!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }

      if (!body.description) {
        toast.error("Please enter description!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }

      if (!body.symbol) {
        toast.error("Please enter symbol!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }

      if (!body.file) {
        toast.error("Please select your NFT Image!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }


      if (!body.titleVerify) {
        toast.error("Please Enter  Verify Title name for the final check", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }

      if (body.title != body.titleVerify) {
        toast.error("Title Name Verify Title name for the final check does not matches!", {
          hideProgressBar: true,
          icon: false,

        });
        return false;
      }
    } else if (selectedCheckbox === 'Submission') {
      console.log("submission")
      body.nftAutoRequestSubmission = true;
      if (!body.autoNFTContractRequestCurrency) {
        toast.error("Please Select NFT Contract Currency!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }

      if (!body.autoNFTContractRequestAmount) {
        toast.error("Please enter your NFT Contract Address!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }

      if (!body.autoNFTContractAddress) {
        toast.error("Please enter your NFT Contract Address!", {
          hideProgressBar: true,
          icon: false,
        });
        return false;
      }
    }

    // Check if the selectedCheckbox is valid and remove fields accordingly
    if (fieldsToRemove[selectedCheckbox]) {
      fieldsToRemove[selectedCheckbox].forEach(field => delete body[field]);
    } else {
      console.warn("Selected checkbox does not match any known type");
    }

    return true
  };






  return (
    <>
      <ProgramStyled>
        <ToastContainer />
        <div className="heading">Create programs</div>
        <div className="inputWrapper">
          <CombineInput
            value={body.name || ''}
            onChange={(e) => setBody({ ...body, name: e.target.value })}
            label="Program name" />
        </div>
        {/* first check Box item */}
        <div className="checkBoxWrapper">
          <CheckBox
            type="checkbox"
            id="program"
            For="program"
            label="Set as token-gated (NFT) program"
            checked={selectedCheckbox === "program"}
            onChange={() => handleCheckboxChange("program")}
          />

          <div className="formWrapper">
            <p>
              Only certain NFT holder can create a transfer request of this
              program. You can perfectly <br /> restrict clients who are not
              related to this program to create a transfer request.
            </p>
            {selectedCheckbox === "program" && (
              <div className="borderform">
                <CombineInput onChange={(e) => body.tokenGatedNFTContractAddress = e.target.value} label="NFT contract address" />
              </div>
            )}
          </div>
        </div>
        {/* 2nd check Box item */}
        <div className="checkBoxWrapper">
          <CheckBox
            type="checkbox"
            id="redemption"
            For="redemption"
            label="Setup NFT redemption"
            checked={selectedCheckbox === "redemption"}
            onChange={() => handleCheckboxChange("redemption")}
          />
          <div className="formWrapper">
            <p>
              By enabling this, you can create an NFT collection for this
              program. If your client create a transfer request for this program
              and successfully get paid, they can go to the NFT redemption tab
              to claim their NFT. Perfect for event related programs!
            </p>
            {selectedCheckbox === "redemption" && (
              <div className="borderform">
                <CombineInput label="Title" onChange={(e) => body.title = e.target.value} className="input" />
                <span>This is the name of your NFT collection</span>
                <CombineInput label="Description" onChange={(e) => body.description = e.target.value} className="input" />
                <span>
                  Briefly describe what’s your NFT collection is about
                </span>
                <CombineInput
                  label="Symbol"
                  onChange={(e) => body.symbol = e.target.value}
                  placeholder="Example: PYTHON"
                  className="input"
                />
                <span>The symbol for the NFT collection</span>
                <UploadImage>
                  <div className="text">
                    <strong>NFT Image</strong>
                    <p>
                      Upload your NFT media. Supporting JPEG, PNG and GIF.
                      Maximum size is 100 MB.
                    </p>
                  </div>
                  <div className="labelBorder">
                    <label htmlFor="upload">
                      <Image
                        src={
                          uploadedNft
                            ? URL.createObjectURL(uploadedNft)
                            : plusIcon
                        }
                        alt="img"
                        width={uploadedNft && 185}
                        height={uploadedNft && 185}
                      />
                    </label>
                    <input
                      className="inputupload"
                      id="upload"
                      type="file"
                      accept=".png , .jpg , .gif"
                      onChange={(e) => setBody({ ...body, file: e.target.files[0] })}
                    />
                  </div>
                </UploadImage>
                <FinalCheck>
                  <strong>Final Check</strong>
                  <p>
                    Please ensure all the inputs and info are correct before
                    publishing this course. As once the NFT contract is
                    deployed, it cant be changed anymore.
                  </p>
                  <CombineInput onChange={(e) => body.titleVerify = e.target.value} label="Type your title of NFT collection again to confirm the final check." />
                </FinalCheck>
              </div>
            )}
          </div>
        </div>
        {/* 3rd check Box item */}
        <div className="checkBoxWrapper">
          <CheckBox
            type="checkbox"
            id="Submission"
            For="Submission"
            label="Setup NFT Auto Request Submission"
            checked={selectedCheckbox === "Submission"}
            onChange={() => handleCheckboxChange("Submission")}
          />
          <div className="formWrapper">
            <p>
              By enabling this, you can bond an NFT collection to this program.
              When your client is an holder of this NFT collection and creating
              a transfer request, he/she can choose to use Auto Request
              Submission where all the info of the transfer request will
              automatically fill in for him/her. Perfect to a program where the
              amount of transfer request is the same!
            </p>
            {selectedCheckbox === "Submission" && (
              <div className="borderform">
                <CombineInput onChange={(e) => body.autoNFTContractAddress = e.target.value} label="NFT Contract Address" />
                <div className="amountDrop">
                  <CombineInput onChange={(e) => body.autoNFTContractRequestAmount = e.target.value} label="Request amount" />
                  <PaymentDropDown
                    label=""
                    onChange={(param) => body.autoNFTContractRequestCurrency = param.program}
                    className="amount"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="buttonWrapp">
          <Button variant="outline" type="reset">
            Clear
          </Button>
          <Button onClick={(e) => handleProgram(e)} variant="primary">Submit</Button>
        </div>
      </ProgramStyled>
      {/* when second checkBox is checked and form is submitted this part will work */}
      {/* <NftDetailWrapper>
        <NftCreationprocess>
          <div className="imageWrappe">
            <Image src={nftGif} alt="nft creation" />
          </div>
          <h6>Creating your NFT collection...</h6>
          <span className="alert">
            Process with the gas fee in order to mint your NFT <br /> Do not
            close the window during this process
          </span>
        </NftCreationprocess>
        <NftCreated />
      </NftDetailWrapper> */}
      {/* After form submision this part will work */}

      {/* when third checkBox is checked and form is submitted this part will work */}

      {/* <AutoSubmittedComp /> */}
    </>
  );
};

export default ProgramCreation;
