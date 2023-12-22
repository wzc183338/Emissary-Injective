import styled from "styled-components";
export const BatchRequestUserStyles = styled.div`
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
