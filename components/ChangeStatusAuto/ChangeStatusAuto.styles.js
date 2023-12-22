import styled from "styled-components";

export const AutoStatusModal = styled.div`
  width: 480px;
  text-align: center;
  position: relative;
  font-size: 12px;
  line-height: 18px;
  border-radius: 10px;
  padding: 70px 40px 40px;
  color: var(--gray-50);
  border: 1px solid var(--gray-300);
  background: var(--white);

  .icon {
    position: absolute;
    right: 10px;
    top: 17px;
    cursor: pointer;
  }

  .holder {
    overflow: hidden;
    margin: 0;
  }

  .title {
    display: block;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    margin: 0 0 15px;
    color: var(--solid-gray);
  }

  .btn-holder {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    gap: 8px;
    padding-top: 15px;

    button {
      width: 130px;
    }
  }
`;
