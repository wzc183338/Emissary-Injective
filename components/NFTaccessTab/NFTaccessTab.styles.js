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

  .checkBoxWrapper {
    margin-bottom: 29px;
    width: 100%;
  }
  .formWrapper {
    width: 100%;
    padding-top: 8px;

    @media (min-width: 768px) {
      margin-left: 30px;
      padding: 0;
    }
  }
  .borderform {
    border-radius: 5px;
    border: 1px solid var(--gray-300);
    padding: 16px 15px;
    width: 100%;
    margin-top: 8px;

    @media (min-width: 768px) {
      padding: 20px 29px;
    }
  }

  .btn-holder {
    padding-top: 30px;
    border-top: 1px solid var(--gray-300)
  }
`;

