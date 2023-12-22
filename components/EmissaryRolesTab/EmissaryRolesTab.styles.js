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

  .roles-holder {
    position: relative;

    .flex {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 10px;
    }

    .col-wrap {
      width: 85%;

      @media (min-width: 768px) {
        width: 100%;
        display: flex;
        align-items: center;
      }
    }

    .text {
      width: 100%;
      height: 49px;
      padding: 13px 10px;
      margin: 0 0 -2px;
      font-weight: 500;
      color: var(--solid-gray);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      border-radius: 5px;
      border: 1px solid #E1E1E1;
      background: var(--gray-250);
      position: relative;
      z-index: 1;

      @media (min-width: 768px) {
        width: 353px;
        margin: 0 -2px 0 0;
        border-radius: 5px 0 0 5px;
      }
    }

    .dropdown-wrap {
      @media (min-width: 768px) {
        width: 220px;
      }
    }
  }

  .action-btn {
    flex-shrink: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 5px;

    button {
      color: var(--blue);
    }
  }

  .btn-holder {
    padding-top: 30px;
    border-top: 1px solid var(--gray-300)
  }
`;

