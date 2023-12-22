import styled from "styled-components";

export const LoginColumn = styled.div`
  position: relative;
  max-width: 100%;
  height: 309px;
  padding: 20px 2px 20px 15px;
  border-radius: 20px;
  border: 2px solid #c8c8c8;
  background: var(--gray-250);

  @media (min-width: 768px) {
    height: 334px;
    padding: 36px 2px 36px 15px;
    border-radius: 20px;
  }
  @media (min-width: 992px) {
    max-width: 510px;
  }

  .login-list {
    list-style: none;
    margin: 0;
    padding: 0 15px 0 0;
    overflow: auto;
    height: 100%;

    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }

    li {
      padding: 8px 12px;
      margin: 0 0 10px;
      border-radius: 10px;
      border: 2px solid #c8c8c8;
      background: var(--gray-250);
      &:last-child {
        margin: 0;
      }

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
        padding: 10px 12px;
        margin: 0 0 20px;
      }
    }

    .img-box {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 6px;

      @media (min-width: 768px) {
        gap: 20px;
        margin: 0;
      }

      img {
        display: block;
        max-width: 36px;
        height: auto;

        @media (min-width: 768px) {
          max-width: 48px;
        }
      }

      .name {
        display: block;
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;

        @media (min-width: 768px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }

    .text {
      display: block;
      font-size: 12px;
      line-height: 15px;
      font-weight: 500;
      color: #838383;
    }
  }
`;
