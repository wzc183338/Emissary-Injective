import NftCreationUser from "@/components/NftCreationComp copy/NftCreationUser";
import NftCreation from "@/components/NftCreationComp/NftCreation";
import PageHeader from "@/components/PageHeader";
import SideNavUser from "@/components/SideNavUser";
import Link from "next/link";
import React from "react";
const index = () => {
  return (
    <>
      <SideNavUser />
      <PageHeader>NFT Redemption</PageHeader>
      <NftCreationUser />
    </>
  );
};

export default index;
