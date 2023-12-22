import styled from "styled-components";

export const NewLaunchColumn = styled.div`
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
`;
