import styled from "styled-components";

export const FluidContent = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    padding: 30px 0;
  }

  .container {
    width: 100%;
  }

  .holder {
    position: relative;

    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      gap: 20px;
    }
  }

  .logo {
    width: 200px;
    margin: 0 0 20px;

    @media (min-width: 992px) {
      width: 249px;
      margin: 0 0 30px;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .leftCol {
    max-width: 100%;
    margin: 0 0 20px;

    @media (min-width: 992px) {
      max-width: 552px;
    }
  }

  .rightCol {
    width: 100%;

    @media (min-width: 992px) {
      width: 508px;
    }
  }

  .text-box {
    width: 100%;
    padding: 0 15px 0 0;
    margin-bottom: 30px;

    @media (min-width: 992px) {
      margin-bottom: 35px;
      padding: 0;
    }
  }

  h1 {
    font-size: 25px;
    line-height: 34px;
    font-weight: 500;
    color: var(--dark-primary);
    span {
      border-bottom: 4px solid var(--blue);
    }

    @media (min-width: 768px) {
      font-size: 30px;
      line-height: 40px;
    }
    @media (min-width: 992px) {
      font-size: 48px;
      line-height: 75px;
    }
  }
`;
