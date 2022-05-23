import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  max-width: 75%;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  display: grid;
  /* align-items: center; */
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
// export const Icon = styled.div`
//   position: absolute;
//   top: 1.2rem;
//   right: 1.5rem;
//   background: transparent;
//   font-size: 2rem;
//   cursor: pointer;
//   outline: none;
// `;


export const SidebarWrapper = styled.div`
  color: #fff;
  padding: 0 25px;
`;

export const Icon = styled.div`
padding: 40px 0 20px 0;
border-bottom: solid 1px #EAE9F2;
`
export const Logo = styled.img`

`

export const SidebarMenu = styled.ul`
  display: grid;
  margin-top: 18px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;
  @media screen and (max-width: 480px) {
    margin-top: 15px;
    grid-template-rows: repeat(6, 55px);
  }
  @media screen and (max-width: 320px) {
    grid-template-rows: repeat(6, 40px);
  }
`;
export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content:flex-start ;
  font-weight: 400;
font-size: 24px;
line-height: 24px;
color: #2C303D;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top:90px ;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  padding-top:50px ;

  }
`;

export const SidebarRoute = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
