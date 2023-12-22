import NftCreation from "@/components/NftCreationComp/NftCreation";
import PageHeader from "@/components/PageHeader";
import SideNav from "@/components/SideNav";
import Link from "next/link";
import React from "react";
const index = () => {
  return (
    // <div>
    //   {NFTRedemptionData.map((elem) => (
    //     <Link href={`nft-redemption/${elem.title}`}>
    //       {elem.title}
    //       <br />
    //     </Link>
    //   ))}
    // </div>
    <>
      <SideNav />
      <PageHeader>NFT Redemption</PageHeader>
      <NftCreation />
    </>
  );
};

export default index;
