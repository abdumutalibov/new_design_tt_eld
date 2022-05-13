import styled from "styled-components";
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

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
    height:1375px;
    background: #2B2D31;
  }
  @media screen and (max-width:768px) {
    height:1200px;
    background: #2B2D31;
  }
  @media screen and (max-width:480px) {
    height:1100px;
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
  @media screen and (max-width:1280px) {
    height:1460px;
    background: none;
  }
  @media screen and (max-width:960px) {
    
  }
  @media screen and (max-width:768px) {
    /* height:1000px; */
    display: none;
  }
  @media screen and (max-width:480px) {
    height:1000px;
  }
  /* background:#232a34;  */
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1600px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color:red; */
  
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
font-size: 50px;
line-height: 56px;
text-align: center;
color: #FFFFFF;
  }
  @media screen and (max-width:1024px) {
    font-weight: 700;
font-size: 40px;
line-height: 56px;
text-align: center;
color: #FFFFFF;
  }
  @media screen and (max-width:768px) {
    font-size: 40px;
  }

  @media screen and (max-width:480px) {
    font-size: 28px;
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
font-size: 22px;
line-height: 48px;
text-align: center;
color: #FFFFFF;
max-width: 60rem;
/* background-color: red; */

  }
  @media screen and (max-width:1024px) {
  font-weight: 400;
font-size: 18px;
line-height: 36px;
text-align: center;
color: #FFFFFF;
max-width: 48rem;

  }
@media screen and (max-width:768px) {
    font-size: 24px;
  }

  @media screen and (max-width:480px) {
    font-size: 15px;
  }

  @media screen and (max-width: 320px) {
    font-size: 10px;
  }
`

export const HeroBgWrapper =styled.div`
margin: 48px 0 72px 0;
display: flex;
flex-direction: row;
align-items: center;
max-width: 1500px;
@media screen and (max-width: 1280px){
margin: 71px 0 151px 0;
}
@media screen and (max-width: 960px){

}
@media screen and (max-width: 480px){
  display: flex;
flex-direction: column;
    
}
`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 10px;
font-size: 25px;
`
export const ArrowForwards = styled(MdArrowForward)`
margin-left: 10px;
font-size: 65px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 10px;
font-size: 25px;
`
 export const ImgMac = styled.img`
 width: 100%;
margin: 0 0 10px 0;
padding-right:0 ;
@media screen and (max-width:1280px) {
    width: 850px;
  }
@media screen and (max-width:960px) {
  width: 700px;
    
  }
@media screen and (max-width:768px) {
  width: 490px;

  }
  @media screen and (max-width:480px) {
    width: 230px;

  }
// @media screen and (max-width:960px) {
//     width: 700px;
//   }

// @media screen and (max-width:768px) {
//     width: 440px;
//   }

//   @media screen and (max-width:480px) {
//       width: 310px;

//   }
 
//   @media screen and (max-width: 320px) {
//     width: 270px;
//   }
//   @media screen and (max-width: 280px) {
//     width: 230px;
//   }
// `
// export const ImgMac = styled.div`
//   display: grid;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   grid-template-areas: 'col2';

//   @media screen and (max-width: 768px) {
//     grid-template-areas: 'col1' 'col1' 'col2' 'col2';
//   }
// `;