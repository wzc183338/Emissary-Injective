import styled from "styled-components";

export const ProcessBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 90px);
  text-align: center;
  position: relative;
  font-size: 12px;
  line-height: 18px;
  border-radius: 10px;
  padding: 20px 0;
  color: var(--gray-50);

  .holder {
    overflow: hidden;
    max-width: 360px;
    width: 100%;
  }

  .img-box {
    max-width: 360px;
    margin: 0 auto 20px;
  }

  .title {
    display: block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin: 0 0 20px;
    color: var(--blue);
  }
`;
