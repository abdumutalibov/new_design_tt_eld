import styled from "styled-components";

export const RatingContainer = styled.div`
  height: 800px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height:60rem;
  width: 100%;
  @media screen and (max-width: 1280px) {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0;
    padding: 0;
    
  }
  @media screen and (max-width: 960px) {
    height: 35rem;
  }
  @media screen and (max-width: 768px) {
    height: 90rem;
  }

  @media screen and (max-width: 480px) {
    height: 85rem;
  }
  @media screen and (max-width: 280px) {
    height: 95rem;
  }
`;
export const ArrowNext = styled.div`
display: none;
`;
export const ArrowPrev = styled.div`
display: none;
`;
export const Cont = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 86rem;
  grid-gap: 30px;
  height: 100%;
  max-height:60rem;
padding: 0;
    margin: 0;
  @media screen and (max-width: 1280px) {
    /* max-width: 1230px; */
    width: 100%;
    padding: 0;
    margin: 0;
    display: none;

  }
  @media screen and (max-width: 1024px) {
    /* max-width: 55rem; */
    width: 100%;
    margin: 0px;
    padding: 0;
  }
  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RatingH1 = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: #1a2944;
  @media screen and (max-width: 1280px) {
    font-weight: 700;
font-size: 50px;
line-height: 56px;
text-align: center;

color: #1A2944;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
font-size: 40px;
line-height: 56px;
text-align: center;

color: #1A2944;
  }
  @media screen and (max-width: 912px) {
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 26px;
    line-height: 40px;
  }
`;
export const RatingText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #8c98a4;
  max-width: 70rem;
  margin: 20px 0 50px 0;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
font-size: 22px;
line-height: 36px;
text-align: center;
color: #8C98A4;
max-width: 48rem;

  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 18px;
line-height: 36px;
text-align: center;
color: #8C98A4;
max-width: 41rem;

  }
  @media screen and (max-width: 912px) {
    padding: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;

export const RatingWrapper = styled.div`
  max-width: 85rem;
  padding: 10px 24px 0 22px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  height:25rem;
  position: relative;
  @media screen and (max-width: 1280px) {
    /* max-width: 73rem; */
    height: 100%;
  height:25rem;
    margin: 0 ;
padding:10px 15px 0 16px;
  }
  @media screen and (max-width: 1024px) {
    height: 100%;
    margin: 0 350px;
  padding:10px 0px 10px 0px;
  /* margin: 0 20px; */
  background-color: red;
  width: 160rem;
width: 100%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RatingCard = styled.div`
  background: #fafafa;
  border-radius: 8px;
  padding: 30px 34px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  /* box-shadow: 2px 4px 24px rgba(151, 151, 151, 0.12); */
  transition: all 0.2s ease-in-out;
  max-width: 450px;
  max-height: 1550px;
  cursor: grab;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: grab;
  }
  @media screen and (max-width: 1280px) {
    max-width: 680px;
    /* max-height: 388px; */
    padding: 30px 24px 30px 22px;

   
  }
  @media screen and (max-width: 1024px) {
    max-width: 416px;
    max-height: 388px;
    max-height: max-content;
    width: 500rem;
    margin: 0 ;
    padding: 30px 24px 30px 22px;


    /* padding: 30px 24px 60px 22px; */
  
    /* margin: 0 40px; */
/* max-height: min-content; */
/* max-height: fit-content; */
/* max-height: fill-available; */
  }
  @media screen and (max-width: 960px) {
    max-width: 380px;
    max-height: 274px;
  }
  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-top: 40px;
  }
`;

export const ImgStar = styled.img`
  /* margin-right: auto; */
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    width: 96px;
    height: 16px;
  }
  @media screen and (max-width: 768px) {
    margin-top: -10;
  }
`;
export const RatingP = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #47464d;
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 18px;
line-height: 32px;
color: #47464D;
  }
  @media screen and (max-width: 912px) {
    font-size: 14px;
    line-height: 23px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 25px;
  }
  @media screen and (max-width: 320px) {
    font-size: 12px;
    line-height: 25px;
  }
  @media screen and (max-width: 280px) {
    font-size: 10px;
  }
`;
export const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 38px 0 0px 0;
  @media screen and (max-width: 960px) {
    padding: 12px 0 20px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 12px 0 20px 0;
  }
`;
export const Col = styled.div`
  flex-direction: column;
`;
export const UserImg = styled.img`
  margin-right: 12px;
  width: 48px;
  height: 48px;
`;
export const UserName = styled.div`
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;
  color: #19191b;
  @media screen and (max-width: 1024px) {
    font-weight: 500;
font-size: 21px;
line-height: 32px;
color: #19191B;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 25px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;
export const UserInfo = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696871;
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696871;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    /* line-height: 25px; */
  }
  @media screen and (max-width: 280px) {
    font-size: 11px;
  }
`;
