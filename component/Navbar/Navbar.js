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
    height: 70px;

  }
  @media screen and (max-width:768px) {
    transition: 0.8 all ease;
    height: 90px;

  }

  @media screen and (max-width:480px){
height: 64px;
}
@media screen and (max-width:320px){
height: 60px;
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
    max-width: 55rem;  
}
@media screen and (max-width:1024px){
  max-width: 52.2rem;   
}
@media screen and (max-width:960px){
  max-width: 49rem;   
/* background-color:red; */

}
@media screen and (max-width:820px){
  max-width: 44rem;   
/* background-color:red; */

}
@media screen and (max-width:768px){
  max-width: 31rem;   
  background-color: #706e77;
display: flex;
align-items: center;
padding: 0;
margin: 0;
}

@media screen and (max-width:480px){
  max-width: 21.3rem;   
display: flex;
align-items: center;
padding: 0;
margin: 0;
}
@media screen and (max-width:320px){
  max-width: 18.2rem;   
  /* background-color: #706e77; */
display: flex;
align-items: center;
padding: 0;
margin: 0;
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
  @media screen and (max-width:960px){
    padding: 0;
   
  }
  @media screen and (max-width:768px){

   margin: 0 auto;
  }
`;
export const NavImg = styled.img`
  height: 55px;
  color: white;
  cursor: pointer;
  @media screen and (max-width:1280px){
   height: 39px;
width: 114px;
  }
@media screen and (max-width:1024px){
height: 39px;
width: 114px;
}
@media screen and (max-width:960px){

width: 110px;
margin: 0;
padding: 0;
}
@media screen and (max-width:820px){

width: 100px;
margin: 0;
padding: 0;
}
@media screen and (max-width:768px){
  width: 130px;
height: 110px;
}

  @media screen and (max-width:480px){
height: 30px;
}
@media screen and (max-width:320px){
height: 27px;
}
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    /* display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff; */

  }
  @media screen and (max-width: 768px) {

    display: flex;
  align-items: center;
    position:absolute;
    top: 0;
    left: 32;
    bottom: 0;
    margin: 0;
    padding: 0;
    /* transform: translate(150%, 0%); */
    cursor: pointer;
    color: #fff;
    font-size: 43px;
  }
  @media screen and (max-width: 540px) {

display: flex;
align-items: center;
position:absolute;
top: 0;
left: 32;
bottom: 0;
margin: 0;
padding: 0;
/* transform: translate(150%, 0%); */
cursor: pointer;
color: #fff;
font-size: 30px;
}
  @media screen and (max-width:480px){
    position: absolute;
    top: 0px;
    left: 18px;
    font-size: 24px;
}
@media screen and (max-width:320px){
    position: absolute;
    top: 0px;
    left: 15px;
    font-size: 20px;
}
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  @media screen and (max-width: 1280px) {
    margin-right: 15px;
  }
  @media screen and (max-width: 1024px) {
margin: 0;
  }
  @media screen and (max-width: 960px) {
   margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 93%;
  @media screen and (max-width:1280px){
  height: 91%;

  }
  @media screen and (max-width:1024px){
  height: 91%;

  }
  @media screen and (max-width:960px){
  height: 92%;

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
font-size: 14px;
line-height: 20px;
/* padding: 0 1.1rem; */
padding: 0 14px 0 14px;
margin: 0;
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
@media screen and (max-width:960px){
    font-weight: 400;
font-size: 12px;
line-height: 20px;
/* padding: 0 1.1rem; */
padding: 0 14px 0 14px;
text-align: center;

color: #FFFFFF;
}
@media screen and (max-width:820px){
    font-weight: 400;
font-size: 11px;
line-height: 20px;
/* padding: 0 1.1rem; */
padding: 0 13px 0 13px;
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
padding: 0;
  }
  /* @media screen and (max-width: 768px) {
 

    position:absolute;
    top: 0;
    right: 23px;
    bottom: 0;
    margin: 0;
    padding: 0;
  } */
  @media screen and (max-width: 768px) {
    /* display: block; */
    /* transform: translate(-50%, 0%); */

    display: flex;
align-items: center;
position:absolute;
top: 0;
right: 136px;
bottom: 0;
margin: 0;
padding: 0;
  }
  @media screen and (max-width: 480px) {
    /* display: block; */
    /* transform: translate(-50%, 0%); */

    display: flex;
align-items: center;
position:absolute;
top: 0;
right: 18px;
bottom: 0;
margin: 0;
padding: 0;
  }
  @media screen and (max-width: 320px) {
    /* display: block; */
    /* transform: translate(-50%, 0%); */

    display: flex;
align-items: center;
position:absolute;
top: 0;
right: 15px;
bottom: 0;
margin: 0;
padding: 0;
  }
`;

export const NavBtnLink = styled.a`
  border-radius: 6px;
  border: 3px solid #FFFFFF;
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
  border: solid 3px #706e77;
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
  width: 111px;
    height: 36px;
    font-weight: 600;
font-size: 12px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
padding: 0px 0px;

&:hover {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 111px;
    height: 36px;
    font-weight: 600;
font-size: 12px;
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
padding: 0px 0px;

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
 @media screen and (max-width: 960px) {
    display: flex;
  align-items: center;
    width: 111px;
    height: 36px;
    font-weight: 600;
font-size: 12px;
line-height: 20px;
text-align: center;
padding: 0px 0px;
margin: 0;
color: #FFFFFF;
padding: 0px 0px;

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
  @media screen and (max-width: 820px) {
    display: flex;
  align-items: center;
    width: 105px;
    height: 36px;
    font-weight: 600;
font-size: 11px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
padding: 0px 0px;
margin: 0;
border: 2px solid #FFFFFF;

&:hover {
  display: flex;
  align-items: center;
  width: 105px;
    height: 36px;
    font-weight: 600;
font-size: 11px;
line-height: 20px;
text-align: center;
}
  }
  /* @media screen and (max-width: 768px) {
    display: flex;
  align-items: center;
   width: 165px;
    height: 64px;
    font-size: 23px;
    font-weight: 600;
line-height: 20px;
text-align: center;
color: #FFFFFF;
padding: 0px 0px;
margin: 0;
border: 3px solid #FFFFFF;
margin: 0;
 padding: 0;
&:hover {

  display: flex;
  align-items: center;
  font-weight: 600;
  width: 165px;
    height: 64px;
    font-size: 23px;
line-height: 20px;
text-align: center;
}
  } */
  @media screen and (max-width: 768px) {
    display: flex;
  align-items: center;
   width: 120px;
    height: 48px;
    font-size: 17px;
    font-weight: 600;
line-height: 20px;
text-align: center;
color: #FFFFFF;
padding: 0px 0px;
margin: 0;
border: 3px solid #FFFFFF;
margin: 0;
 padding: 0;
&:hover {

  display: flex;
  align-items: center;
  font-weight: 600;
  width: 165px;
    height: 64px;
    font-size: 23px;
line-height: 20px;
text-align: center;
}
  }
  @media screen and (max-width: 480px) {
    display: flex;
  align-items: center;
   width: 83px;
    height: 32px;
    font-size: 12px;
    font-weight: 600;
    border: 1.5px solid #FFFFFF;
line-height: 20px;
text-align: center;
color: #FFFFFF;
padding: 0px 0px;
margin: 0;
margin: 0;
 padding: 0;
 border-radius: 4px;

&:hover {

  display: flex;
  align-items: center;
  width: 83px;
    height: 32px;
    font-size: 12px;
    font-weight: 600;
    border: 2px solid ;
line-height: 20px;
text-align: center;
border: 2px solid #706e77;
border-radius: 4px;

}
  }
  @media screen and (max-width: 320px) {
    display: flex;
  align-items: center;
   width: 55px;
    height: 25px;
    font-size: 8px;
    font-weight: 600;
    border: 2px solid #FFFFFF;
line-height: 20px;
text-align: center;
color: #FFFFFF;
padding: 0px 0px;
margin: 0;

 padding: 0;
 border-radius: 4px;

&:hover {

  display: flex;
  align-items: center;
  width: 55px;
    height: 25px;
    font-size: 8px;
    font-weight: 600;
    border: 2px solid #706e77;
line-height: 20px;
text-align: center;
border-radius: 4px;

}
  }
 
`;
