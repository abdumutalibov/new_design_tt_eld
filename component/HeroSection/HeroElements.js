import styled from "styled-components";
import {FaArrowRight} from 'react-icons/fa'
export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1450px;
  position: relative;
  z-index: 1;
  /* :before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
      linear-gradient(180deg, rgba(0,0,0.2) 0%, transparent 100%);
      z-index: 2;
      
  } */
  @media screen and (max-width:1280px) {
    height: 1340px;
    background: none;
  }
  @media screen and (max-width:960px) {
    height:1150px;
    background: none;
  }
  @media screen and (max-width:820px) {
    height:1070px;
    background: none;
  }
  @media screen and (max-width:768px) {
    height:900px;
    background: #2B2D31;
  }
  @media screen and (max-width:480px) {
    height:780px;
    background: none;
  /* background: red; */

  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%; 
   height: 100%;
  /* overflow: hidden; */
`;
export const ImgBg = styled.img`
  width: 100%;
  height: 1500px;
  -o-object-fit: cover;
  object-fit: cover;
  display: ${({mobile})=> (mobile ? 'none':'block')};
  @media screen and (max-width:1280px) {
    height:1380px;
  }
  @media screen and (max-width:960px) {
    height:1150px;
    
  }
  @media screen and (max-width:820px) {
    height:1105px;
    
  }
  @media screen and (max-width:768px) {
    height:965px;
    background:none; 

  }
  @media screen and (max-width:480px) {
    height:470px;
    /* background:none;  */
    display: none;
  /* display: ${({mobile})=> (mobile ? 'block':'none')}; */
  }
  @media screen and (max-width:380px) {
    height:895px;
    background:none; 
  }
  @media screen and (max-width:280px) {
    height:895px;
    background:none; 
  }
`;
export const ImgBg2 = styled.img`
  width: 100%;
  height: 1500px;
  -o-object-fit: cover;
  object-fit: cover;
  /* display: ${({mobile})=> (mobile ? 'none':'block')}; */
  display: none;
  @media screen and (max-width:1280px) {
    height:1380px;
  }
  @media screen and (max-width:960px) {
    height:1150px;
    
  }
  @media screen and (max-width:820px) {
    height:1105px;
    
  }
  @media screen and (max-width:768px) {
    height:965px;
    background:none; 

  }
  @media screen and (max-width:480px) {
    height:790px;
    /* background:none;  */
    display: block;
  /* display: ${({mobile})=> (mobile ? 'block':'none')}; */
  }

  @media screen and (max-width:320px) {
    height:785px;
    background:none; 
  }
  @media screen and (max-width:280px) {
    height:778px;
    background:none; 
    display: block;
  }
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:480px) {
  padding: 0;
}
@media screen and (max-width:320px) {
  padding: 0;
}
`;
export const HeroH1 = styled.h1`
padding-top: 40px;
margin-top: 180px;
font-weight: 700;
font-size: 56px;
line-height: 80px;
/* identical to box height, or 143% */
text-align: center;
color: #FFFFFF;
  /* max-width:120rem; */
  @media screen and (max-width:1280px) {
    font-weight: 700;
font-size: 40px;
line-height: 76px;
  }
  @media screen and (max-width:1024px) {
    font-weight: 700;
font-size: 40px;
line-height: 56px;
text-align: center;
color: #FFFFFF;
  }
  @media screen and (max-width:960px) {
    font-size: 36px;
  }
  @media screen and (max-width:820px) {
    font-size: 32px;
  }
  @media screen and (max-width:768px) {
    font-size: 26px;
   
  }
  @media screen and (max-width:480px) {
    font-weight: 700;
font-size: 24px;
line-height: 36px;
margin-bottom: 7px;
max-width: 20rem;
padding-top: 5rem;
  }
  /* @media screen and (max-width: 320px) {
    font-size: 28px;
  } */
`;
export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
text-align: center;
max-width: 1050px;
font-weight: 400;
font-size: 24px;
line-height: 48px;
@media screen and (max-width:1280px) {
  font-weight: 400;
font-size: 18px;
line-height: 36px;
padding: 0;
margin: 0;
max-width: 48rem;
  }
  @media screen and (max-width:1024px) {
  font-weight: 400;
font-size: 18px;
line-height: 36px;
text-align: center;
color: #FFFFFF;
max-width: 48rem;
  }
  @media screen and (max-width:960px) {
    font-size: 16px;
max-width: 44rem;
line-height: 32px;
padding: 0;
margin: 0;
  }
  @media screen and (max-width:820px) {
    font-size: 14px;
max-width: 38rem;
line-height: 30px;
padding: 0;
margin: 0;
  }
@media screen and (max-width:768px) {
  font-weight: 400;
    font-size: 13px;
    max-width: 35rem;
    line-height: 27px;
  }
  @media screen and (max-width:480px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
max-width: 22rem;

  }
  @media screen and (max-width: 320px) {
    font-size: 10px;
    max-width: 18rem;

  }
`
export const HeroBgWrapper =styled.div`
margin: 48px 0 72px 0;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
max-width: 520px; 
@media screen and (max-width: 1280px){
  margin: 48px 0 72px 0;
max-width: 1600px;
padding: 0;
display: flex;
justify-content: center;
}
@media screen and (max-width: 960px){
  margin: 20px ;
  display: flex;
justify-content: center;
}
@media screen and (max-width: 820px){
margin: 20px ;
display: flex;
justify-content: center;
}
@media screen and (max-width: 480px){
  display: flex;
    padding: 0;
    margin:0;
}
`
export const ArrowForward = styled(FaArrowRight)`
margin-left: 10px;
font-size: 22px;
@media screen and (max-width: 1280px){
font-size: 20px;
}
@media screen and (max-width: 820px){
font-size: 10px;
width: 300px;
height: 300px;
}
@media screen and (max-width: 768px){
font-size: 80px;
width: 300px;
height: 300px;
}
@media screen and (max-width: 480px){
font-size: 10px;
width: 300px;
height: 300px;
}
`
export const ArrowForwards = styled(FaArrowRight)`
margin-left: 10px;
font-size: 22px;
@media screen and (max-width: 1280px){
font-size: 20px;
}
@media screen and (max-width: 820px){
font-size: 15px;
}
@media screen and (max-width: 480px){
font-size: 14px;
}
`


 export const ImgMac = styled.img`
 width: 100%;
margin: 0 0 10px 0;
padding-right:0 ;
@media screen and (max-width:1280px) {
  width:809.31px;
  }
@media screen and (max-width:960px) {
  width: 700px;
    
  }
  @media screen and (max-width:820px) {
  width: 660px;
    
  }
@media screen and (max-width:768px) {
  width: 490px;
  }
  @media screen and (max-width:480px) {
    width: 330px;
  }
  @media screen and (max-width:320px) {
    width: 270px;
  }

`