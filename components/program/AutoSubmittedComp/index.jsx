import React from "react";
import {
  AutoSubmitstyles,
  NftImage,
  ProgramCreated,
} from "./AutoSubmit.styles";
import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import nft from "../../../../public/nft.png";
import { RxHamburgerMenu } from "react-icons/rx";
const AutoSubmittedComp = () => {
  return (
    <AutoSubmitstyles>
      <div className="inputWrapper">
        <span className="icon">
          <LuSearch color="var(--gray-50)" size="24" />
        </span>
        <input type="text" placeholder="Search program name" />
      </div>
      <p>
        Drag and reorder the programs to change how they order in the transfer
        request form. Click to edit the program info and settings.
      </p>
      <ProgramCreated>
        <div className="text">
          <span>Klaymakers22 Global Hackathon</span>
          <strong className="Created">Created on 16 August 2023</strong>
        </div>
        <NftImage>
          <Image src={nft} alt="img" />
          <RxHamburgerMenu color="var(--gray-50)" />
        </NftImage>
      </ProgramCreated>
    </AutoSubmitstyles>
  );
};

export default AutoSubmittedComp;
