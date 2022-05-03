import styled from "styled-components";

export const EasyContainer = styled.div`
  height: 900px;
  display: flex;
  width: 100%;
  margin-top: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 100rem;
  }
  @media screen and (max-width: 480px) {
    height: 100rem;
  }
  @media screen and (max-width: 280px) {
    height: 110rem;
  }
`;

export const EasyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;

  padding: 0 24px 0 24px;
  max-width: 100rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
`;
export const EasyH1 = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: #1a2944;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 22px;
  line-height: 40px;

  }
`;
export const EasyP = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #8c98a4;
  max-width: 1235px;
  margin-bottom: 70px;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 0 10px;
    text-align: center;
  line-height: 38px;
/* margin-bottom:300px; */
  }
`;
export const EasyCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 20px 0 24px;
  max-width: 100rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
`;
export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TextCard1 = styled.div`
  max-width: 340px;
  max-height: 205px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;
export const TextCard2 = styled.div`
  max-width: 340px;
  max-height: 205px;
  margin-bottom: 50px;
  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;
export const ImgWrap = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 20px;
`;

export const Heading1 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  text-align: right;
  color: #1a2944;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 280px) {
    font-size: 16px;
  }
`;
export const TextP = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: right;
  color: #8c98a4;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;
export const Column2 = styled.div``;
export const ImgMiniMac = styled.img`
  width: 100%;
  padding: 0 30px 0 30px;
  @media screen and (max-width: 1024px) {
    width: 300px;
  }
  @media screen and (max-width: 768px) {
    width: 260px;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
    padding-top: 30px;
    /* margin-top: 30px; */
  }
`;
export const Column3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 480px) {
    margin-top: 60px;
  }
`;

export const TextCard = styled.div`
  max-width: 385px;
  max-height: 205px;
  margin-bottom: 80px;
  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;
export const Heading = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  color: #1a2944;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 280px) {
    font-size: 16px;
  }
`;
export const TextP2 = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #8c98a4;
  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;
