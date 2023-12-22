import React from "react";
import { AddRequestUserStyles } from "./AddSafe.styles";
import face from "../../../../public/face.png";
import Image from "next/image";

const AddSafe = ({ setCreatingSafe }) => {
  return (
    <AddRequestUserStyles>
      <div className="imageWrapper">
        <Image src={face} alt="face" />
      </div>
      There are no safes assigned from your side. Create one!
      <div className="addTransfer" onClick={() => setCreatingSafe(true)}>
        + Safe
      </div>
    </AddRequestUserStyles>
  );
};

export default AddSafe;
