import styled from "styled-components";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#37353B" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8 all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* padding: 0 24px; */
  max-width: 1100px;
  color: #de3;
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const NavImg = styled.img`
  height: 40px;
  color: white;
  cursor: pointer;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    /* transition: 0.8 all ease; */
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
  
`;
export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #01bf71;
    color: #000;
  }

  /* border-bottom: ${({ active }) => active && "3px solid #01bf71"}; */
  color: ${({ active }) => active && "#01bf71"};
  :hover{
    /* color: #01bf71; */
  }
  `;
NavLinks.Item =styled.div`

`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-decoration: none;
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
