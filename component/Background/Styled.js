import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
  opacity: 0;
  
}
100%{
  opacity: 1;
}
`;
export const Black = styled.div`
  animation: 0.5s ${fadeIn} ease-in;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  transition: all 5.2s ease-in-out;
`;
