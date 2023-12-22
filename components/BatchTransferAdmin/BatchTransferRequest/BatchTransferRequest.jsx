import React, { useEffect, useState } from "react";
import {
  HeadingWrapper,
  TransferStyles,
  Wrapper,
} from "./TransferRequest.styles";
import nft from "../../../../public/nft.png";
import file from "../../../../public/file.svg";
import Image from "next/image";
import ProgramDropDown from "../../InputFields/ProgramDropDown";
import CombineInput from "../../InputFields/CombineInput";
import PaymentDropDown from "../../InputFields/PaymentDropDown";
import Link from "next/link";
import Button from "../../Button/Button";
import { useRouter } from "next/router";

const BatchTransferRequest = () => {
  const router = useRouter();
  const [value, setvalue] = useState(null);

  function handelData(params) {
    setvalue(params);
  }
  function handelDataProgram(params) {
    // setvalue(params);
  }
  console.log(value);
  function handelSubmit(e) {
    e.preventDefault();
    // router.push("/user/transfer-requests");
  }
  function handelClear(e) {
    e.preventDefault();
    setvalue(null);
  }

  return (
    <>
      <TransferStyles>
        <form onSubmit={handelSubmit}>
          <HeadingWrapper>
            <span className="heading">Create batch transfer</span>
            {/* <span className="autosubmit" onClick={() => setModal(true)}>
              <Image src={nft} alt="nft" />
              Auto Request Submission
            </span> */}
          </HeadingWrapper>
          <Wrapper>
            <ProgramDropDown
              onChange={handelData}
              setSelectedValue={setvalue}
              selectedValue={value}
            />
            <CombineInput label="Project Name" />
            <div className="amountDrop">
              <CombineInput label="Request amount" />
              <PaymentDropDown
                label=""
                onChange={handelDataProgram}
                className="amount"
              />
            </div>
            <CombineInput label="Recipient Wallet Address" />

            <div className="DocumentUpload">
              <span>Tax Documents</span>
              <p>
                Upload{" "}
                <label htmlFor="upload" className="label">
                  required tax document(s)
                </label>{" "}
                to be associated with requests.
                <br />
                Any update to tax documents will be verified to make sure you
                can legally receive the payout.
              </p>
              <label htmlFor="upload" className="labelButton">
                Upload
              </label>
              <input type="file" id="upload" accept=".pdf" />
            </div>
          </Wrapper>
          <Button variant="outline" onClick={handelClear}>
            Clear
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
      </TransferStyles>
    </>
  );
};

export default BatchTransferRequest;
