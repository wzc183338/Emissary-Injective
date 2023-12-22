import styled, { css } from "styled-components";

export const SafesContent = styled.div`
  position: relative;
`;

export const ContentSection = styled.div`
  position: relative;
  margin: 0 0 30px;

  .header {
    width: 100%;
    padding: 0 0 20px;
    margin: 0 0 30px;
    border-bottom: 1px solid var(--gray-300);

    .subtitle {
      display: block;
      font-size: 14px;
      line-height: 18px;
      font-weight: 500;
      color: var(--blue);
      margin: 0 0 20px;
    }

    h1 {
      font-weight: 500;
    }

    .date-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      color: var(--gray-50);
    }

    .number-text {
      min-width: 125px;
      display: inline-block;
      vertical-align: top;
      padding: 8px;
      text-align: center;
      border-radius: 5px;
      border: 1px solid var(--gray-300);
    }
  }

  .title {
    display: block;
    color: var(--solid-gray);
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
    margin: 0 0 10px;
  }

  .text-box {
    width: 100%;
    margin: 0 0 30px;

    @media (min-width: 768px) {
      /* display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-flow: row-reverse; */
    }

    .wrap {
      max-width: 800px;
    }

    button {
      margin: 0 0 20px;
    }
  }

  .info-holder {
    overflow: hidden;
    margin: 0 0 30px;
  }

  .info-box {
    flex-grow: 1;
    max-width: 570px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 8px;
    border-radius: 5px;
    color: var(--gray-50);
    border: 1px solid var(--gray-300);

    @media (min-width: 768px) {
      display: flex;
    }

    .label-text {
      display: block;
      color: var(--primary);
      text-transform: capitalize;
      padding: 8px 12px;
      border-width: 0 0 1px;
      border-style: solid;
      border-color: var(--gray-300);

      @media (min-width: 768px) {
        padding: 15px 20px;
        border-width: 0 1px 0 0;
      }
    }

    .text {
      display: block;
      padding: 15px 12px;
      max-width: 500px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      @media (min-width: 768px) {
        padding: 15px 17px;
      }
    }
  }

  .info-wrap {
    margin: 0 0 20px;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0;
    }

    ${({ heighLight }) =>
        heighLight &&
        css`
        .info-box {
          background: #000;
        }
      `}
  }

  .approves-memos {
    position: relative;

    .title {
      display: block;
    }
  }

  .memo-holder {
    overflow: hidden;

    .flex {
      margin: 0 0 18px;

      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 0;
      }
    }

    .date {
      display: block;
      font-weight: 500;
      color: var(--gray-50);
    }

    .memo-box {
      position: relative;
      padding: 15px 45px 15px 15px;
      border-radius: 5px;
      border: 1px solid var(--gray-300);
      margin: 0 0 5px;

      @media (min-width: 768px) {
        margin: 0 0 10px;
      }

      .text {
        display: block;
        max-width: 500px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .icon {
        position: absolute;
        top: 12px;
        right: 10px;
      }
    }
  }
`;
