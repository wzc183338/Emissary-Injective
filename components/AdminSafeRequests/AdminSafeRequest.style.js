import styled from "styled-components";

export const TransferUserListStyle = styled.div`
  *::-webkit-scrollbar {
    width: 2px;
  }
`;
export const FilterBar = styled.div`
  position: relative;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 33px;
  }

  .inputWrapper {
    position: relative;
    border: 1px solid var(--gray-300);
    border-radius: 5px;
    max-width: 576px;
    width: 100%;
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 14px 14px 14px 46px;
    margin-bottom: 12px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    .icon {
      position: absolute;
      top: 12px;
      left: 14px;
      color: var(--gray-50);
    }

    input {
      background: transparent;
      width: 100%;
      border: none;
      outline: none;

      &::placeholder {
        color: var(--gray-50);
      }
    }
  }
`;

export const TransferListWrapper = styled.div`
  max-height: 650px;
  max-width: 891px;
  width: 100%;
  overflow-y: auto;
`;

export const TransferList = styled.div`
  width: 100%;
  padding: 15px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  margin-bottom: 23px;
  .link {
    display: block;
    border-radius: 5px;
    background: #d6ecff;
    color: var(--blue);
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    padding: 8px 10px;
    text-align: center;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }
  @media (min-width: 1200px) {
    padding: 20px;
    gap: 50px;
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin: 0 0 20px;

    @media (min-width: 768px) {
      justify-content: space-around;
      margin: 0;
    }
    @media (min-width: 1200px) {
      gap: 36px;
      justify-content: space-evenly;
    }

    &:last-child {
      margin: 0;
    }
  }

  .item {
    position: relative;
  }

  .id {
    margin-bottom: 8px;
  }

  .id,
  .amount {
    display: block;
    color: var(--blue);
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;

    @media (min-width: 1200px) {
      font-size: 16px;
    }
  }

  .userID,
  .date {
    display: block;
    color: var(--gray-50);
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .date {
    &:last-child {
      margin-bottom: 0px;
    }
  }

  .status {
    display: block;
    border-radius: 5px;
    background: #d6ecff;
    color: var(--blue);
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    padding: 8px 10px;
    text-align: center;
  }

  .projectName {
    display: block;
    color: var(--solid-gray);
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin-bottom: 8px;
  }

  .program {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
