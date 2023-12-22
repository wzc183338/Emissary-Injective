import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from "@/components/Button/Button";
import {
  FilterBar,
  TransferList,
  TransferListWrapper,
  TransferUserListStyle,
} from "./AdminTransferRequests.styles";
import Link from "next/link";

const AdminTransferRequests = () => {
  return (
    <TransferUserListStyle>
      <FilterBar>
        <div className="inputWrapper">
          <span className="icon">
            <IoSearch size="22" />
          </span>
          <input
            type="text"
            placeholder="Search request number, program, project name"
            label=""
          />
        </div>
        <Button variant="primary">Filter</Button>
      </FilterBar>
      {/* <TransferListWrapper>
        <TransferList>
          <div className="wrapper">
            <div className="item">
              <span className="id">#915942594164</span>
              <Link href="/admin/transfer-request/example-1">
                <span className="link">Details</span>
              </Link>
            </div>
            <div className="item">
              <span className="projectName">Chameleon </span>
              <span className="program">Transfer Request</span>
            </div>
          </div>
          <div className="wrapper">
            <div className="item">
              <span className="userID">5D25...oePo</span>
              <span className="date">Created on 16 August 2023</span>
            </div>
            <div className="item">
              <span className="amount">732 KLAY</span>
            </div>
          </div>
        </TransferList>
        <TransferList>
          <div className="wrapper">
            <div className="item">
              <span className="id">#915942594164</span>
              <Link href="/admin/transfer-request/example-2">
                <span className="link">Details</span>
              </Link>
            </div>
            <div className="item">
              <span className="projectName">Chameleon </span>
              <span className="program">Transfer Request</span>
            </div>
          </div>
          <div className="wrapper">
            <div className="item">
              <span className="userID">5D25...oePo</span>
              <span className="date">Created on 16 August 2023</span>
            </div>
            <div className="item">
              <span className="amount">732 KLAY</span>
            </div>
          </div>
        </TransferList>
      </TransferListWrapper> */}
    </TransferUserListStyle>
  );
};

export default AdminTransferRequests;
