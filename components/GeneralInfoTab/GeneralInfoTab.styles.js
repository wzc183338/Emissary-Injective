import styled from "styled-components";

export const GeneralTabHolder = styled.div`
  position: relative;
  color: var(--gray-50);

  @media (min-width: 992px) {}

  .content-holder {
    max-width: 650px;
    margin-bottom: 30px;
  }

  .box {
    max-width: 570px;
    margin: 0 0 33px;
  }

  .subtitle {
    display: block;
    font-size: 16px;
    line-height: 19px;
    margin: 0 0 10px;
    color: var(--solid-gray);
  }

  .code-input {
    width: 100%;
    position: relative;

    @media (min-width: 600px) {
      width: 350px;
    }

    .btn-copy {
      position: absolute;
      top: 13px;
      right: 15px;
      color: var(--blue);
    }

    input {
      width: 100%;
      height: 48px;
      font-size: 16px;
      line-height: 20px;
      font-weight: 600;
      padding: 8px 42px 8px 20px;
      border-radius: 20px;
      outline: none;
      box-shadow: none;
      border: 2px solid var(--gray-300);
      background: var(--gray-250);

      &::placeholder {
        color: var(--blue)
      }
    }
  }

  .recommend-img {
    max-width: 640px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      gap: 15px;
    }

    input {
      display: none;
    }

    .text-box {
      max-width: 244px;
      margin: 0 0 20px;

      @media (min-width: 768px) {
        margin: 0;
      }
    }

    .logo-holder {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 340px;
      min-height: 176px;
      border-radius: 10px;
      border: 1px solid #C8C8C8;
      cursor: pointer;

      @media (min-width: 768px) {
        width: 360px;
      }

      img {
        cursor: pointer;
      }
    }
  }

  .btn-holder {
    padding-top: 30px;
    border-top: 1px solid var(--gray-300)
  }
`;

