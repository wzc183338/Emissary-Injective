import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from "@/components/Button/Button";
import {
    FilterBar,
    TransferList,
    TransferListWrapper,
    TransferUserListStyle,
} from "./AdminSafeRequest.style";
import Link from "next/link";

const AdminSafeRequests = ({ safes, setAddSafe, setShowSafes }) => {

    const shorten = (address) => {
        if (address.length > 10) {
            return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
        }
        return address;
    };

    return (
        <TransferUserListStyle>
            <FilterBar>
                <div className="inputWrapper">
                    <span className="icon">
                        <IoSearch size="22" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search safe by name, recipient wallet address"
                        label=""
                    />
                </div>
                <Button onClick={() => { setShowSafes(false), setAddSafe(true) }} variant="primary">Filter</Button>
            </FilterBar>
            <TransferListWrapper>
                {safes?.map((data) => {
                    return (
                        <TransferList>
                            <div className="wrapper">
                                <div className="item">
                                    <span className="id">{data.safeId}</span>
                                    <Link href={`/admin/safes/${data.safeId}`}>
                                        <span className="link">Details</span>
                                    </Link>
                                </div>
                                <div className="item">
                                    <span className="projectName">{data.name} </span>
                                    <span className="program">Safes</span>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="item">
                                    <span className="userID">{shorten(data.ownerAddress)}</span>
                                    <span className="date">Created on {data?.createdDate}</span>
                                </div>
                                <div className="item">
                                    <span className="amount">{data.lumSumRelease ? data.lumSumReleaseAmount : data.mileStoneReleaseAmount} {data.asset}</span>
                                </div>
                            </div>
                        </TransferList>
                    )
                })}
            </TransferListWrapper>
        </TransferUserListStyle>
    );
};

export default AdminSafeRequests;
