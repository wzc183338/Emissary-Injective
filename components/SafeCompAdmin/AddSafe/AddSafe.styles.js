import styled from "styled-components";
export const AddRequestUserStyles = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  gap: 33px;
  align-items: center;
  justify-content: center;
  color: var(--gray-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  .imageWrapper {
    max-width: 126px;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .addTransfer {
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid var(--blue);
    width: 180px;
    padding: 13.5px 0;
    color: var(--blue);
  }
`;
export const AddSafeStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  padding-bottom: 50px;
  .label {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .strog {
    display: block;
    color: var(--blue);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .textArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    textarea {
      margin-top: 10px;
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      width: 100%;
      resize: none;
      outline: none;
      border-radius: 5px;
      border: 1px solid var(--gray-300);
      background: transparent;
      padding: 15px;
    }
    .float {
      text-align: right;
      color: var(--gray-50);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .submission {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 576px) {
      flex-direction: column-reverse;
      gap: 20px;
    }
  }
  .totalAmount {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media screen and (max-width: 576px) {
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
    }
    .span {
      color: var(--blue);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  .buttonWrap {
    button {
      margin-left: 10px;
      &:first-child {
        margin: 0;
      }
    }
  }
`;
export const ApprovalDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: var(--gray-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  .approvalheading {
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
export const TransferMode = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: var(--solid-gray);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  .broderInputWrapper {
    padding: 27px;
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    .amountDrop {
      display: flex;

      input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .amount {
        max-width: 112px;
        width: 100%;
        margin-top: 17px;
        /* z-index: 2; */

        ul {
          padding: 14px 18px;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          color: var(--blue);
        }
      }
    }
  }
`;

export const ConfirmationStyle = styled.div`
  .count-wrapp {
    display: flex;
    align-items: center;
    gap: 20px;
    color: var(--solid-gray);
    .strong {
      color: var(--blue);
    }
  }
  .approval {
    color: var(--gray-50);
  }
  .total-number-approval {
    width: 72px;
  }
`;
