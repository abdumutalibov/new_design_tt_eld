import styled from "styled-components";

export const DriversContainer = styled.div`
  height: 2000px;
  display: flex;
  flex-direction: column;
  background-color: red;
/* height: 100%; */
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
/* background: url('https://master--sparkly-nougat-c0f5ea.netlify.app/Drivers/Base.svg');
object-fit: cover;
  background-repeat: no-repeat; 
    background-size:cover; */
  @media screen and (max-width: 768px) {
    height: 248rem;
  }
  @media screen and (max-width: 480px) {
    height: 215rem;
  }
  @media screen and (max-width: 280px) {
    height: 230rem;
  }
`;
export const DriversImg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
`;
export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const DriversWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 20px 0 24px;
  max-width: 90rem;
  /* background: url('https://master--sparkly-nougat-c0f5ea.netlify.app/Drivers/Base.svg');
object-fit: cover;
  background-repeat: no-repeat; 
    background-size:cover; */
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
export const DriversH1 = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: #ffffff;
  z-index: 1;
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
  }
`;
export const DriversP = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 48px;
  z-index: 1;
  text-align: center;
  max-width: 70rem;
padding: 0 10px 0 10px;
  color: #ffffff;
  margin-bottom: 95px;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 0 10px;
    text-align: center;
  }
`;
export const Column1 = styled.div`
  /* grid-area: col1; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const TextWrapper1 = styled.div`
  max-width: 373px;
  max-height: 205px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 80px;
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
  font-size: 32px;
  line-height: 48px;
  text-align: right;
  color: #fafafb;
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
export const Line = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  text-align: right;
  color: #a9a6ac;
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
export const Column2 = styled.div`
  /* grid-area: col2; */
  margin-left: 10px;
 
`;
export const ImgPhone = styled.img`
  width: 100%;
  padding: 0 30px 0 30px;
   /* display: flex;
  justify-content: center;
  align-items: center; */
  @media screen and (max-width: 1024px) {
    width: 300px;
   
  }
  @media screen and (max-width: 768px) {
    width: 260px;
    margin-bottom: 80px;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
  }

`;

export const ImgIcons = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`
export const Column3 = styled.div`
  /* grid-area: col2; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 480px) {
    margin-top: 60px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 385px;
  max-height: 205px;
  margin-bottom: 80px;
  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;

export const Heading = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  color: #fafafb;
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
export const TopLine = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  color: #a9a6ac;
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
