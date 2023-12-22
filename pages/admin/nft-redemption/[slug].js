import Button from "@/components/Button/Button";
import {
  NFTRedemptionData,
  NftCreationDetail,
  NftCreationprocess,
  NftDetailWrapper,
} from "@/components/NftCreationComp/NftCreation";
import PageHeader from "@/components/PageHeader";
import SideNav from "@/components/SideNav";
import Image from "next/image";
import React, { useState } from "react";
import nftGif from "../../../../public/nftCreation.gif";
import NftCreated from "@/components/NftCreationComp/NftCreatedComp";

const NFTRedemption = ({ elem }) => {
  const [processing, setProcessing] = useState(true);
  return (
    <>
      <SideNav />
      <PageHeader>NFT Redemption</PageHeader>
      <NftDetailWrapper>
        {processing ? (
          <NftCreationDetail>
            <div className="imageWrapper">
              <Image src={elem.img} alt="nft-card" />
            </div>
            <span className="title">{elem.title}</span>
            <div className="nftId">
              <span>{elem.id}</span>
            </div>
            <span className="disc">{elem.content}</span>
            <Button
              variant="primary"
              width="100%"
              onClick={() => setProcessing(false)}
            >
              Mint
            </Button>
          </NftCreationDetail>
        ) : (
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
          // <NftCreated /> when Nft is Created this component will Mount
        )}
      </NftDetailWrapper>
    </>
  );
};
export async function getStaticPaths() {
  const paths = NFTRedemptionData.map((elem) => ({
    params: { slug: elem.slug },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const elem = NFTRedemptionData.find((elem) => elem.slug === params.slug);

  return {
    props: { elem },
  };
}
export default NFTRedemption;
