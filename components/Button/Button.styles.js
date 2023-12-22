import styled, { css, keyframes } from "styled-components";

export const StyledButton = styled.button`
  overflow: hidden;
  position: relative;
  min-width: ${({ width }) => (width ? width : "148px")};
  padding: 13px 15px;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${({ weight }) => (weight ? weight : "600")};
  font-family: var(--base-font-sans-serif);
  border-radius: 5px;

  ${({ variant }) =>
    variant === "outline" &&
    css`
      border: 1px solid var(--blue);
      color: var(--blue);
      box-sizing: border-box;

    &:hover {
      background: var(--blue);
      color: var(--white);
    }
  `}

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: var(--blue);
      color: var(--white);
    `}

    ${({ variant }) =>
    variant === "light" &&
    css`
      color: var(--blue);
      background: var(--blue-light);
    `}

  ${({ variant }) =>
    variant === "danger" &&
    css`
      background: var(--danger);
      color: var(--white);
    `}

        ${({ xl }) =>
    xl &&
    css`
      font-size: 20px;
      line-height: 24px;
      padding: 12px 15px;

      @media (min-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        padding: 12px 15px;
      }
    `}
        ${({ lg }) =>
    lg &&
    css`
      font-size: 18px;
      line-height: 23px;
    `}
        ${({ sm }) =>
    sm &&
    css`
      font-size: 14px;
      line-height: 19px;
    `}

    ${({ hasIcon }) =>
    hasIcon &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    `}
`;
