import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 86rem;
  grid-gap: 30px;
  /* height: 500px; */
display:none;
  @media screen and (max-width: 1280px) {
    /* max-width: 73rem; */
    display: block;
    margin: 0px;
    padding: 0px;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin: 0px;
    padding: 0;
    display: none;
  }
  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const ArrowNext = styled.div`
display: none;
`;
export const ArrowPrev = styled.div`
display: none;
`;

export const RatingWrappers = styled.div`
  /* max-width: 30rem; */
  padding: 0 24px 0 22px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  
  @media screen and (max-width: 1280px) {
    max-width: 55rem;
    /* margin: 0; */
    padding: 10px 10px 10px 10px;
    max-height: max-content;
height: 100%;
  }
  @media screen and (max-width: 1024px) {
    max-width: 55rem;
    /* margin: 0; */
    padding: 10px 0px 10px 0px;
    max-height: max-content;
height: 100%;
  }
  @media screen and (max-width: 960px) {
    max-width: 115rem;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RatingCards = styled.div`
background: #fafafa;
  border-radius: 8px;
  padding: 30px 34px;
  
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  /* box-shadow: 2px 4px 24px rgba(151, 151, 151, 0.12); */
  transition: all 0.2s ease-in-out;
  max-width: 450px;
  max-height: 550px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1280px) {
    max-width: 420px;
    max-height: 274px;
    max-height: max-content;
height: 100%;
cursor: grab;
padding: 29px 30px;
/* margin: 0 10px 0 10px; */
  }
  @media screen and (max-width: 1024px) {
    max-width: 420px;
    max-height: 274px;
    max-height: max-content;
height: 100%;
cursor: grab;
  }
  @media screen and (max-width: 960px) {
    max-width: 380px;
    max-height: 374px;
margin: 0 16.6px 0 16px;
padding: 30px 28px 20px 28px;

  }
  @media screen and (max-width: 820px) {
    max-width: 380px;
    max-height: 374px;
    margin: 0 14.6px;
padding: 30px 20px 20px 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-top: 40px;
  }
`;
export const ImgStars = styled.img`
  /* margin-right: auto; */
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    margin-top: -10;
  }
`;
export const RatingP = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #47464d;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
font-size: 16.5px;
line-height: 32px;
color: #47464D;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 18px;
line-height: 32px;
color: #47464D;
  }
  @media screen and (max-width: 960px) {
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (max-width: 820px) {
    font-size: 14px;
    line-height: 27px;
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
    padding: 30px 0 0px 0;
    margin: 0;
  }
  @media screen and (max-width: 820px) {
    padding: 20px 0 0px 0;
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
  @media screen and (max-width: 1280px) {
    font-weight: 500;
font-size: 21px;
line-height: 32px;
color: #19191B;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 500;
font-size: 21px;
line-height: 32px;
color: #19191B;
  }
  @media screen and (max-width: 960px) {
    font-weight: 700;
font-size: 19px;
line-height: 32px;
color: #19191B;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
font-size: 17px;
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
  @media screen and (max-width: 960px) {
    font-size: 12px;
    line-height: 23px;
  }
  @media screen and (max-width: 820px) {
    font-size: 11px;
    line-height: 23px;
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
