import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 86rem;
  grid-gap: 30px;
  height: 500px;

  @media screen and (max-width: 1280px) {
    max-width: 73rem;
    background-color: red;
    grid-gap: 30px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 55rem;
    grid-gap: 30px;
  }
  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ArrowNext = styled.div``;
export const ArrowPrev = styled.div``;

export const RatingWrappers = styled.div`
  max-width: 30rem;
  padding: 0 20px ;
  margin: 0 auto;
  /* grid-template-columns: 1fr 1fr 1fr; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  height: 100%;
  grid-gap: 10px;
  /* margin-bottom: 200px; */
  @media screen and (max-width: 1280px) {
    max-width: 73rem;
    grid-gap: 30px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 55rem;
    grid-gap: 30px;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
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
    max-width: 380px;
    max-height: 274px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 380px;
    max-height: 274px;
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
