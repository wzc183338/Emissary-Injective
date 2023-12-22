import styled from "styled-components";

export const Closer = styled.div``;

export const StyledModal = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ layer }) => (layer ? " rgba(255, 255, 255, 0.80);" : "")};
  /* backdrop-filter: blur(4px); */
  z-index: 99999;
  padding: 20px;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: 0.3s all ease-in-out;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentHolder = styled.div`
  /* max-width: ${({ width }) => (width ? width : "1000px ")}; //must prop */
  /* width: 100%; */
  max-height: 90%;
  padding: ${({ padding }) => (padding ? padding : "")}; //must prop
  background: ${({ bg }) => (bg ? bg : "")}; //must props
  border-radius: ${({ radius }) => (radius ? radius : "15px")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: myAnim 0.3s ease;
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
