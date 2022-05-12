import styled from "styled-components";

export const RatingContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    height: 70rem;
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
export const RatingH1 = styled.h1`
 font-weight: 700;
font-size: 56px;
line-height: 80px;
/* identical to box height, or 143% */

text-align: center;

color: #1A2944;
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
  margin: 20px 0  50px 0;
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
  padding: 0 24px 0 22px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  /* margin-bottom: 200px; */
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const RatingCard = styled.div`
  background: #FAFAFA;
  border-radius:8px;
  padding:30px 34px;
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
  @media screen and (max-width: 768px) {
   margin-top:-10;
  }
`;
export const RatingP = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #47464d;
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
