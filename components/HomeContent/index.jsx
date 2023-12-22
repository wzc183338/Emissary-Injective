import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/emissary-logo.svg";
import { FluidContent } from "./HomeContent.styles";
import RecentLogin from "../RecentLogin";
import LaunchExistingEmissary from "../LaunchExistingEmissary";
import LaunchNewEmissary from "../LaunchNewEmissary";
import SuccessfullyCreated from "../SuccessfullyCreated";

const HomeContent = () => {
  return (
    // <FluidContent>
    //   <div className="container">
    //     <div className="holder">
    //       <div className="leftCol">
    //         <div className="logo">
    //           <Link href="/">
    //             <Image src={logoImg} alt="img description" />
    //           </Link>
    //         </div>
    //         <div className="text-box">
    //           <h1>
    //             A better way to manage payouts & treasury on{" "}
    //             <span>Injective</span> Network.{" "}
    //           </h1>
    //         </div>
    //         <RecentLogin />
    //       </div>
    //       <div className="rightCol">
    //         <LaunchExistingEmissary />
    //         <LaunchNewEmissary />
    //       </div>
    //     </div>
    //   </div>
    // </FluidContent>

    <SuccessfullyCreated />
  );
};

export default HomeContent;
