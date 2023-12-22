import styled from "styled-components";

export const FormHolder = styled.div`
  position: relative;
  max-width: 800px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 20px;
  background: var(--gray-250);

  @media (min-width: 768px) {
    padding-left: 150px;
  }

  .title {
    display: block;
    font-size: 20px;
    line-height: 25px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 20px;

    @media (min-width: 768px) {
      font-size: 32px;
      line-height: 36px;
      margin: 0 0 20px;
    }
  }

  .btn-back {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    color: var(--primary);
    margin-bottom: 20px;

    @media (min-width: 768px) {
      margin-bottom: 70px;
    }
  }

  .inner-wrap {
    display: flex;
    gap: 10px;

    > div {
      width: 100%;
    }

    .btn-add {
      width: 30px;
      flex-shrink: 0;
    }
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 160px;
    padding: 10px 14px;
    margin: 0 0 30px;
    border-radius: 40px;
    border: 1px solid var(--gray-200);
    background: var(--gray-250);

    .text {
      display: block;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .input-content {
    label {
      display: block;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      margin: 0 0 5px;

      @media (min-width: 768px) {
        font-size: 24px;
        line-height: 30px;
        margin: 0 0 10px;
      }
      @media (min-width: 1200px) {
        font-size: 32px;
        line-height: 36px;
      }
    }

    input {
      border-radius: 10px;
      border: 2px solid var(--gray-200);
    }
  }

  .btn-holder {
    display: flex;
    align-items: center;
    gap: 16px;
    padding-top: 20px;

    button.back {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 50px;
      height: 45px;
      padding: 5px;
    }
  }

  .upload-file {
    padding-top: 30px;

    .labelButton {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--gray-200);
      width: 293px;
      min-height: 145px;
      cursor: pointer;
      border-radius: 10px;
      border: 2px solid var(--gray-200);
      background: var(--gray-250);
    }

    input {
      display: none;
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
  }
`;
