import styled from "styled-components";

export const DriversContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  @media screen and (max-width: 1280px) {
    background: url("Drivers/Base1024.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    background-position: center;
    object-fit: cover;
  }
  @media screen and (max-width: 1024px) {
    background: url("Drivers/Base1024.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    height: 105rem;
  }
  @media screen and (max-width: 960px) {
    background: url("Drivers/Base (3).png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    height: 73.7rem;
  }

  @media screen and (max-width: 768px) {
    height: 170rem;
    background: #2b2d31;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    height: 150rem;
    background: #2b2d31;
  }
  @media screen and (max-width: 280px) {
    height: 160rem;
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

  position: relative;
  display: grid;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom-left-radius: 200% 50%;
  border-bottom-right-radius: 200% 50%;
  transform: scaleX(1.1);
  /* border-bottom-left-radius: 50% 15%;
    border-bottom-right-radius: 85%; */
  ::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    border-bottom-left-radius: 100% 50%;
    border-bottom-right-radius: 100% 50%;
    transform: scaleX(1.2);
  }
  @media screen and (max-width: 1280px) {
    display: none;
  }

  @media screen and (max-width: 960px) {
    display: none;
    border-bottom-left-radius: 100% 10%;
    border-bottom-right-radius: 100% 10%;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    background: none;
    border-radius: 0;
    display: none;
    background-color: #2b2d31;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    background: none;
    border-radius: 0;
    display: none;
    background-color: #2b2d31;
  }
`;
export const DriversWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 20px 0 24px;
  max-width: 90rem;
  @media screen and (max-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10rem;
  }
  @media screen and (max-width: 960px) {
  }
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
  margin-top: 25rem;
  padding-top: 10rem;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: #ffffff;
  z-index: 1;
  @media screen and (max-width: 1280px) {
    font-weight: 700;
    font-size: 49px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
    margin-top: 10.8rem;
    padding-top: 80px;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
    margin-top: 19.8rem;
    padding: 0;
    margin-bottom: -40px;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    font-size: 36px;
    margin-top: 3rem;
    padding-top: 6rem;
  }
  @media screen and (max-width: 820px) {
    text-align: center;
    font-size: 32px;
    margin-top: 10rem;
    padding-top: 10.8rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 33px;
    margin-top: 0rem;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 26px;
    margin-top: 4rem;
    padding: 6px;
  }
`;
export const DriversP = styled.p`
  font-size: 24px;
  color: #d7d5d7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  line-height: 48px;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
  z-index: 1;
  padding: 0 0px 0 20px;
  margin-bottom: 95px;
  margin-top: 16px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 22px;
    line-height: 46px;
    text-align: center;
    color: #ffffff;
    max-width: 60rem;
    opacity: 0.8;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    max-width: 50rem;
  }
  @media screen and (max-width: 960px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 33px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
    padding: 45px 0px 65px 0;
    max-width: 44rem;

  }
  @media screen and (max-width: 820px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;

    max-width: 37rem;
    margin: 0 auto;
    padding: 45px 0px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 0 10px;
    text-align: center;
  }
`;
export const Column1 = styled.div`
  /* grid-area: col1; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 150px;
  @media screen and (max-width: 1280px) {
    margin-bottom: 50px;
  }
`;
export const TextWrapper1 = styled.div`
  max-width: 385px;
  max-height: 205px;
  margin-bottom: 95px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1280px) {
    max-width: 300px;
    max-height: 205px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 58px;
    /* margin-bottom: 5; */
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 50px;
    max-width: 250px;

  }
  @media screen and (max-width: 820px) {
    margin-bottom: 50px;
    max-width: 230px;

  }
  @media screen and (max-width: 768px) {
    padding: 0 30px;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 480px) {
    padding: 0 30px;
    text-align: start;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const ImgWrap = styled.img`
  width: 26px;
  height: 26px;
  margin-bottom: 20px;
  @media screen and (max-width: 1280px) {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;
export const Heading1 = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-align: right;
  color: #fafafb;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 26px;
    line-height: 36px;
    text-align: right;
    color: #fafafb;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    text-align: right;
    color: #fafafb;
  }
  /* @media screen and (max-width: 1024px) {
    font-size: 24px;
  } */
  @media screen and (max-width: 960px) {
    font-size: 19px;
    text-align: left;
    line-height: 25px;

  }
  @media screen and (max-width: 820px) {
    font-size: 18px;
    text-align: left;
    line-height: 15px;

  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: left;
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
  max-width: 23rem;
  color: #a9a6ac;

  @media screen and (max-width: 1280px) {
    font-weight: 200;
    line-height: 27px;
    font-size: 17px;
    color: #fafafb;
    mix-blend-mode: normal;
    opacity: 0.6;
    text-align: right;
    max-width: 18rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #fafafb;
    mix-blend-mode: normal;
    opacity: 0.6;
    text-align: right;
  }
  @media screen and (max-width: 960px) {
    font-size: 13.5px;
    font-weight: 600;

  }
  @media screen and (max-width: 820px) {
    font-size: 12px;
    font-weight: 200;

    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    text-align: left;
  }
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;
export const Column2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 100px 0 100px;
position: relative;
  @media screen and (max-width: 1280px) {
    margin: 0;
    padding: 0 32px 0 32px;
  }
  @media screen and (max-width: 960px) {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;
export const ImgPhone = styled.img`
  width: 100%;
  /* padding: 0 56px 0 56px; */
  @media screen and (max-width: 1280px) {
    width: 420px;
    /* padding: 0 40px 0 40px; */
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 360px;
  }

  @media screen and (max-width: 960px) {
    width: 290px;
    /* margin-bottom: 40px; */
    margin: 0 26px 90px ;
  }
  @media screen and (max-width: 820px) {
    width: 260px;
    /* margin-bottom: 25px; */
    margin: 0 26px 130px ;

  }
  @media screen and (max-width: 768px) {
    /* width: 260px; */
    margin: 0px;
    display: flex;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
    margin-bottom: 40px;
  }
`;
export const PhoneIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0 106px 0;

  @media screen and (max-width: 1280px) {
    margin-top: 70px;
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 0;
    padding: 70px 0 0px 0;
  }
  @media screen and (max-width: 960px) {
    position: absolute;
    bottom: -40px;
    padding: 0;
  }
  @media screen and (max-width: 820px) {
    position: absolute;
    bottom: 0px;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 8rem;
    padding: 0px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 8rem;
    padding: 0px;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 7rem;
    padding: 0px;
  }
`;
export const Icons = styled.img`
  margin: 0 20px 0px 20px;
  @media screen and (max-width: 1280px) {
    /* width: 174px;
  height: 74px; */
    width: 13rem;
    /* margin-right: 20px; */
  }
  @media screen and (max-width: 1024px) {
    margin: 0 10px 0px 10px;

    width: 174px;
    height: 54px;
  }
  @media screen and (max-width: 960px) {
    width: 9.5rem;
    margin: 0px 14px 0 14px;
  }
  @media screen and (max-width: 820px) {
    width: 9rem;
    margin: 0px 14px 0 14px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8rem;
    margin: 30px 10px 50px 10px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 8rem;
    margin: 0px 10px 0 0;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 7rem;
    margin: 0px 10px 0 10px;
  }
`;
export const Column3 = styled.div`
  /* grid-area: col2; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 150px;
  @media screen and (max-width: 1280px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
 
  @media screen and (max-width: 480px) {
    margin-top: 60px;
  }
`;

export const TextWrapper = styled.div`
  max-width: 385px;
  max-height: 205px;
  margin-bottom: 95px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1280px) {
    max-width: 300px;
    max-height: 205px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 58px;
  }
  @media screen and (max-width: 960px) {
    margin-bottom: 50px;
    max-width: 250px;

  }
  @media screen and (max-width: 820px) {
    margin-bottom: 50px;
    max-width: 230px;

  }

  @media screen and (max-width: 480px) {
    padding: 0 30px;
  }
`;

export const Heading = styled.h1`
  font-weight: 600;
  line-height: 48px;
  color: #fafafb;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 26px;
    line-height: 36px;
    color: #fafafb;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 960px) {
    font-size: 19px;
    text-align: left;
    line-height: 25px;

  }
  @media screen and (max-width: 820px) {
    font-size: 18px;
    text-align: left;
    line-height: 15px;

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
  max-width: 23rem;
  @media screen and (max-width: 1280px) {
    font-weight: 200;
    line-height: 27px;
    font-size: 17px;
    color: #fafafb;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #fafafb;
    mix-blend-mode: normal;
    opacity: 0.6;
  }
  @media screen and (max-width: 960px) {
    font-size: 13.5px;
    font-weight: 600;


  }
  @media screen and (max-width: 820px) {
    font-size: 12px;
    font-weight: 200;

    margin: 0;
    padding: 0;
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
