import styled from "styled-components";

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 15px;
  border-bottom: 2px solid var(--gray-300);
  background: var(--gray-250);
  z-index: 10;

  @media (min-width: 992px) {
    left: 255px;
  }
  @media (min-width: 1200px) {
    padding: 20px 48px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    color: var(--solid-gray);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const NavOpener = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 45px;
  height: 44px;
  border: 0;
  border-radius: 50px;
  background: none;
  z-index: 9;

  @media (min-width: 992px) {
    display: none;
  }

  .nav-active & {
    width: 35px;
    height: 35px;
  }

  &:before,
  &:after,
  span {
    background: var(--primary);
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 18%;
    right: 18%;
    height: 3px;
    margin-top: -2px;
    transition: all 0.2s linear;

    .dark-bg & {
      background: var(--white);
    }
  }

  &:before,
  &:after {
    content: "";
    top: 30%;
  }

  &:after {
    top: 70%;
  }

  .nav-active & {
    &:before,
    &:after,
    span {
      background: var(--primary);
    }
    span {
      opacity: 0;
    }

    &:after,
    &:before {
      transform: rotate(45deg);
      top: 50%;
      left: 15%;
      right: 15%;
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;