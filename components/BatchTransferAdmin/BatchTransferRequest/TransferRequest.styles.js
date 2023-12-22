import styled from "styled-components";

export const TransferStyles = styled.div`
  button {
    margin: 33px 8px 20px 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 891px;
  width: 100%;
  display: flex;
  padding-bottom: 26px;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid var(--gray-300);
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-top: 50px;
  }

  .heading {
    color: var(--blue);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .autosubmit {
    max-width: 255px;
    padding: 8px 20px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--solid-gary);

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }

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

  .DocumentUpload {
    color: var(--gray-50);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;

    .label {
      color: var(--blue);
    }

    span {
      font-weight: 500;
      color: var(--solid-gray);
      margin-bottom: 14px;
      display: block;
    }

    .labelButton {
      cursor: pointer;
      display: block;
      margin-top: 22px;
      border-radius: 5px;
      background: #3788ce;
      color: var(--white);
      max-width: 148px;
      width: 100%;
      padding: 15px 50px;
    }

    input {
      display: none;
    }

    .uploadedDocument {
      position: relative;
      margin-top: 20px;
      max-width: 209px;
      width: 100%;
      height: 60px;
      border: 1px solid var(--gray-300);
      border-radius: 5px;
      position: relative;
      padding: 10px 20px;
      color: var(--blue);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 15px;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;

      a {
        color: var(--blue);
      }

      .icon {
        position: absolute;
        right: 10px;
        top: 18px;
        margin-bottom: 0;
      }
    }
  }
`;

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .heading {
    color: var(--blue);
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .autosubmit {
    max-width: 255px;
    padding: 8px 20px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--solid-gary);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
  }
`;
