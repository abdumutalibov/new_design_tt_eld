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
  @media screen and (max-width: 1280px) {
     height: 84px;
     
  }
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
  height: 100%;
  z-index: 1;
  width: 100%;
  
  max-width: 83rem;
  color: #de3;
  @media screen and (max-width:1280px){
    max-width: 68.5rem;  
    
}
@media screen and (max-width:1024px){
  max-width: 52.2rem;   


}
`;

export const NavLogo = styled.a`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-right: auto;
  @media screen and (max-width:1280px){
    padding: 0;
  }
  @media screen and (max-width:1024px){
  }
`;
export const NavImg = styled.img`
  height: 55px;
  color: white;
  cursor: pointer;
  @media screen and (max-width:1280px){
    height: 50px;
  }
  @media screen and (max-width:1024px){
height: 39px;
width: 114px;
}
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
  @media screen and (max-width: 1024px) {
margin: 0;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 92%;
  @media screen and (max-width:1280px){
  height: 91%;

  }
  @media screen and (max-width:1024px){
  height: 91%;

  }
`;
export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;
  font-weight: 400;
font-size: 18px;
line-height: 24px;
text-align: center;
color: #FFFFFF;


  &.active {
    color: #000;
  }
 
  @media screen and (max-width:1280px){
    font-weight: 400;
font-size: 15px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
  }
  @media screen and (max-width:1024px){
    font-weight: 400;
font-size: 12.4px;
line-height: 20px;
/* padding: 0 1.1rem; */
padding: 0 17px 0 17px;
text-align: center;

color: #FFFFFF;
}
  `;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 7px;

  @media screen and (max-width:1280px){
margin: 0;
  }
  @media screen and (max-width:1024px){

  padding: 0;
  margin-left: 5px;

}
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled.a`
  border-radius: 8px;
  border: 2px solid #FFFFFF;
  padding: 10px 22px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-decoration: none;
  font-weight: 600;
line-height: 26px;
text-align: center;
color: #FFFFFF; 
&:hover {
  
    transition: all 0.2s ease-in-out;
  background: #fff;
  border: solid 2px #706e77;
    color: #010606;
  font-weight: 600;
font-size: 18px;
line-height: 26px;
text-align: center;
  }
@media screen and (max-width: 1280px) {
  display: flex;
  justify-content: center;
  align-items: center;
    width: 130px;
    height: 40px;
    font-weight: 600;
font-size: 15px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
&:hover {
  display: flex;
  justify-content: center;
  align-items: center;
    width: 130px;
    height: 40px;
    font-weight: 600;
font-size: 15px;
line-height: 20px;
text-align: center;
}
  }
  @media screen and (max-width: 1024px) {
    display: flex;
  align-items: center;
    width: 111px;
    height: 36px;
    font-weight: 600;
font-size: 12px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
&:hover {
  display: flex;
  align-items: center;
    width: 111px;
    height: 36px;
    font-weight: 600;
font-size: 12px;
line-height: 20px;
text-align: center;
}
  }
  @media screen and (max-width: 320px) {
    font-size: 18px;
  }
 
`;
