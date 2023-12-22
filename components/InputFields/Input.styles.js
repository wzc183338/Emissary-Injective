import styled from "styled-components";

export const CombineInputStyle = styled.div`
  margin-bottom: 8px;
  width: 100%;
  font-family: var(--base-font-sans-serif);

  label {
    display: block;
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 0 10px;
  }

  input {
    font-family: var(--base-font-sans-serif);
    width: 100%;
    border: 1px solid var(--gray-300);
    outline: none;
    padding: 14px 18px;
    border-radius: 5px;
    color: var(--gray-50);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    background: var(--gray-250);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProgramDrop = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 14px; */
  position: relative;

  label {
    display: block;
    color: var(--solid-gray);
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0 0 10px;
  }
`;

export const DropDownListWrapper = styled.ul`
  position: relative;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  padding: 15px 18px;
  color: var(--gray-50);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: var(--gray-250);
  display: flex;
  align-items: center;
  gap: 4px;
  text-overflow: ellipsis;
  .dropDownIcon {
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
`;

export const DropDownItem = styled.div`
  position: absolute;
  padding: 19px 0;
  overflow: hidden;
  display: ${({ display }) => display};
  right: 0;
  left: 0;
  background: var(--gray-250);
  top: 49px;
  transition: 0.3s all ease;
  li {
    background: var(--gray-250);
    width: 100%;
    padding: 0 22px;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const DropDownAssetsItem = styled.div`
  position: absolute;
  padding: 19px 0;
  overflow: hidden;
  display: ${({ display }) => display};
  right: -2px;
  left: -2px;
  background: var(--gray-250);
  top: 49px;
  transition: 0.3s all ease;
  z-index: 10;
  li {
    background: var(--gray-250);
    width: 100%;
    padding: 0 22px;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const PaymentDropDownItem = styled.div`
  position: absolute;
  padding: 19px 0;
  overflow: hidden;
  display: ${({ display }) => display};
  right: 0;
  left: 0;
  background: var(--white);
  top: 49px;
  transition: 0.3s all ease;

  li {
    background: var(--white);
    width: 100%;
    padding: 0 22px;
    margin-bottom: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
