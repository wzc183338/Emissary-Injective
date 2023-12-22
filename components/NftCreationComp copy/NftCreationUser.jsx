import React from "react";
import styled from "styled-components";
import nftImage from "../../../public/nftCreation.png";
import Button from "../Button/Button";
import Link from "next/link";

export const NFTRedemptionData = [
  {
    id: "5D25...oePo",
    title: "Klaymakers22 Global Hackatho",
    img: nftImage,
    content:
      "An NFT Collection for the participants of our Klaymakers22 Global Hackathon",
    slug: "example-1",
    date: " 15 August 2023",
  },
  {
    id: "5D25...oePo",
    title: "Klaymakers22 Global Hacka",
    img: nftImage,
    content:
      "An NFT Collection for the participants of our Klaymakers22 Global Hackathon",
    slug: "example-2",
    date: " 1 August 2023",
  },
  {
    id: "5D25...oePo",
    title: "Klaymakers22 Global Hackathon",
    img: nftImage,
    content:
      "An NFT Collection for the participants of our Klaymakers22 Global Hackathon",
    slug: "example-3",
    date: " 12 August 2023",
  },
];
const NftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const NftStyles = styled.div`
  max-width: 920px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--gray-300);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 23px;
  .Text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    strong {
      color: var(--solid-gray);
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .date {
      color: var(--gray-50);
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
export const NftCreationDetail = styled.div`
  border-radius: 5px;
  border: 1px solid var(--gray-300);
  padding: 19px 27px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 310px;
  width: 100%;
  button {
    margin-top: 9px;
  }
  .title {
    color: var(--solid-gray);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .nftId {
    text-align: left;
    span {
      text-align: left;
      color: var(--gray-50);
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-decoration-line: underline;
    }
  }
  .disc {
    color: var(--solid-gray);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
  .imageWrapper {
    max-width: 256px;
    margin: 0 auto;
    border-radius: 5px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const NftDetailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
`;
export const NftCreationprocess = styled.div`
  text-align: center;
  .imageWrappe {
    max-width: 361px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  h6 {
    margin-top: 15px;
    color: var(--blue);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .alert {
    color: var(--gray-50);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;
const NftCreationUser = () => {
  return (
    <NftWrapper>
      {/* {NFTRedemptionData.map((elem, ind) => (
        <NftStyles key={ind}>
          <div className="Text">
            <strong>{elem.title}</strong>
            <span className="date">Awarded on {elem.date}</span>
          </div>
          <Link href={`/user/nft-redemption/${elem.slug}`}>
            <Button variant="outline">Mint</Button>
          </Link>
        </NftStyles>
      ))} */}
    </NftWrapper>
  );
};

export default NftCreationUser;
