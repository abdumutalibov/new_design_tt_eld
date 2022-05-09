import styled from "styled-components";
export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#37353B" : "transparent")};
  height: 104px;
  margin-top: -240px;
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
  @media screen and (max-width:480px){
height: 74px;
}
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  /* padding: 0 24px; */
  max-width: 90rem;
  color: #de3;
  /* background:red; */
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
  margin-right: auto;
`;
export const NavImg = styled.img`
  height: 50px;
  color: white;
  cursor: pointer;
  @media screen and (max-width:480px){
height: 34px;
}
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    /* transition: 0.8 all ease; */
  }
  @media screen and (max-width:480px){
    position: absolute;
    top: 0px;
    right: 0;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  /* background:red; */

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
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
    border-bottom: 3px solid #01bf71;
    color: #000;
  }

  /* color: ${({ active }) => active && "#01bf71"}; */
  :hover{
    color: #01bf71;
  }
  `;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;


  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled.a`
  border-radius: 8px;
  /* background: #01bf71; */
  border: 2px solid #FFFFFF;
  /* white-space: nowrap; */
  padding: 10px 22px;
  color: white;
  font-size: 18px;
  /* outline: none; */
  /* border: none; */
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-decoration: none;
  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    /* background: #fff; */
  background: #01bf71;

    color: #010606;
  font-weight:500;

  }
`;
