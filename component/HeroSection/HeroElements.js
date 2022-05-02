import styled from "styled-components";
import {MdArrowForward,MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 1499px;
  /* margin-top: 70px; */
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
  @media screen and (max-width:768px) {
    /* height:1000px; */
  }
  @media screen and (max-width:480px) {
    height:1200px;
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
  @media screen and (max-width:768px) {
    /* height:1000px; */
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
  color: #fff;
  font-weight: 700;
font-size: 56px;
  text-align: center;
  /* max-width:120rem; */

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
max-width: 1200px;
font-weight: 400;
font-size: 24px;
line-height: 48px;
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
margin-top: 32px;
margin-bottom:80px;
display: flex;
flex-direction: row;
align-items: center;
max-width: 1500px;
/* background-color:red; */
@media screen and (max-width: 480px){
  display: flex;
flex-direction: column;
    
}
`
export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`
 export const ImgMac = styled.img`
 width: 100%;
 /* height:100%; */
margin: 0 0 10px 0;
padding-right:0 ;
@media screen and (max-width:768px) {
    /* height:1000px; */
  }
  @media screen and (max-width:480px) {
    /* height:1000px; */
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