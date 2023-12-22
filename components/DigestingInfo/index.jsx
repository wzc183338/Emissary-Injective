import React, { useEffect, useState } from "react";
import Image from "next/image";
import digestingImg from "../../../public/process-img.gif";
import { DigestingBlock } from "./DigestingInfo.styles";
import { useRouter } from "next/router";

const DigestingInfo = () => {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/listed-emissary");
  //   }, 5000);
  // }, []);

  return (
    <DigestingBlock>
      <strong className="title">Digesting your info...</strong>
      <div className="img-box">
        <Image src={digestingImg} alt="img description" />
      </div>
      <p>Note: Do not close the window during the process.</p>
    </DigestingBlock>
  );
};

export default DigestingInfo;
