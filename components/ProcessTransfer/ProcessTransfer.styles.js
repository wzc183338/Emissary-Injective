import styled from "styled-components";

export const ProcessLoading = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .img-holder {
    max-width: 318px;
    margin: 0 auto 20px;
  }

  .text-box {
    max-width: 360px;
    margin: 0 auto;
    font-size: 12px;
    line-height: 18px;
    color: var(--gray-50);
  }
  
  .title {
    display: block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: var(--blue);
    margin: 0 0 15px;
  }
`;