import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from "@/components/Button/Button";
import {
  FilterBar,
  TransferList,
  TransferListWrapper,
  TransferUserListStyle,
} from "./BatchTransferUser.styles";

const BatchTransferUser = () => {
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
              <span className="status">Submitted</span>
            </div>
            <div className="item">
              <span className="projectName">Chameleon (batch)</span>
              <span className="program">Batch Transfer Salary</span>
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
              <span className="status">Submitted</span>
            </div>
            <div className="item">
              <span className="projectName">Chameleon (batch)</span>
              <span className="program">Batch Transfer Salary</span>
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

export default BatchTransferUser;
