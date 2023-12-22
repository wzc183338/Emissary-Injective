import styled from "styled-components";

export const LaunchColumn = styled.div`
  position: relative;
  max-width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 2px solid #c8c8c8;
  background: var(--gray-250);

  @media (min-width: 768px) {
    padding: 45px 40px;
  }
  @media (min-width: 992px) {
    max-width: 510px;
  }

  .wrap {
    max-width: 356px;
  }

  .icon-box {
    width: 50px;
    margin: 0 0 20px;
  }

  .title {
    display: block;
    font-size: 22px;
    line-height: 25px;
    font-weight: 600;
    margin: 0 0 15px;
  }

  p {
    margin: 0 0 20px;
  }

  .form {
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
    position: relative;

    button {
      position: absolute;
      top: 0;
      right: 0;
      width: 64px;
      height: 57px;
      color: var(--white);
      background: var(--blue);
    }

    input {
      width: 100%;
      height: 57px;
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      font-family: var(--base-font-family);
      padding: 10px 70px 10px 15px;
      border-radius: 10px;
      outline: none;
      box-shadow: none;
      border: 1px solid #d8d8d8;
      background: var(--gray-250);
    }
  }
`;
