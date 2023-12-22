import styled from "styled-components";

export const AutoSubmitstyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  p {
    color: var(--gray-50);
    margin: 0;
  }
  .inputWrapper {
    max-width: 576px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e1e1e1;
    padding: 14px 14px 14px 48px;
    position: relative;
    .icon {
      position: absolute;
      left: 13px;
      top: 12px;
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      color: var(--solid-gray);
      background: transparent;
      &::placeholder {
        color: var(--gray-50);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`;
export const ProgramCreated = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 32px;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    span {
      display: block;
      color: var(--solid-gray);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    .Created {
      color: var(--gray-50);
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const NftImage = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  img {
    max-width: 100%;
    height: auto;
  }
`;
