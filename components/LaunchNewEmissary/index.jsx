import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";
import plusImg from "../../../public/icon-plus.svg";
import Button from "../Button/Button";
import { NewLaunchColumn } from "./LaunchEmissary.styles";
import Link from "next/link";

const LaunchNewEmissary = () => {
  return (
    <NewLaunchColumn>
      <div className="wrap">
        <div className="icon-box">
          <Image src={plusImg} alt="img description" />
        </div>
        <strong className="title">New emissary </strong>
        <p>
          A new emissary that can controlled by one or multiple owners. The
          perfect solution to process payout to your community.
        </p>
        <div className="btn-holder">
          <Link href="/create-emissary">
            <Button variant="primary">Create my emissary</Button>
          </Link>
        </div>
      </div>
    </NewLaunchColumn>
  );
};

export default LaunchNewEmissary;
