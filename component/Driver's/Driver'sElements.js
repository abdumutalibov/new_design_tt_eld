import styled from "styled-components";

export const DriversContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  @media screen and (max-width: 1280px) {
    background: url("Drivers/Base1180.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    background-position: center;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 86.4rem;
  }
  @media screen and (max-width: 1180px) {
    background: url("Drivers/Base1180.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100%;
    background-position: center;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 86.4rem;
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
    margin-bottom: 100px;
  }
  @media screen and (max-width: 820px) {
    background: url("Drivers/Base (3).png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    height: 73.7rem;
    margin-bottom: 70px;
  }
  @media screen and (max-width: 768px) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    display: flex;
    justify-content: center;
    background: none;
    height: 62.5rem;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    height: 125rem;
    background: none;
  }
  @media screen and (max-width: 280px) {
    /* background: url("Drivers/Base480.svg"); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    object-fit: contain;
    height: 125rem;
    margin-bottom: 70px;
    background: #2B2D31;
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
  position: relative;
  @media screen and (max-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50rem;
  }
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
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
    font-size: 40px;
    line-height: 56px;
    margin-top: 0rem;

    padding-top: 15rem;
  }
  @media screen and (max-width: 1180px) {
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    margin-top: 0rem;
    padding-top: 15rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
    font-size: 40px;
    line-height: 0px;
    margin-top: 0rem;
    padding-top: 20rem;
    padding-left: 0;
    padding-bottom: 0;
    margin: 0;
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
    margin-top: 0rem;
    padding-top: 15rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 26px;
    margin-top: 0rem;

    margin: 0;
    padding-top: 11rem;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    margin-top: 0rem;
    padding-top: 6rem;
    margin: 0;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    margin-top: 0rem;
    padding-top: 6rem;
    max-width: 18rem;
    margin: 0 auto;
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
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    text-align: center;

    max-width: 46rem;
    margin: 0 auto;
    padding: 7px 0px 100px 0;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #ffffff;
    max-width: 50rem;
    margin-top: 40px;
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
    padding: 25px 0px 45px 0;
    color: #d7d5d7;

  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 13px;
    max-width: 34rem;
    line-height: 27px;
    text-align: center;
    color: #d7d5d7;
    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    margin: 0;
    padding: 5px 0 42px 0;
    max-width: 20rem;
  }
  @media screen and (max-width: 320px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    margin: 0 auto;
    padding: 5px 0 42px 0;
    max-width: 18rem;
  }
`;
export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 150px;
  @media screen and (max-width: 1280px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
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
    margin-bottom: 50px;
    max-width: 230px;
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
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    max-width: 185px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 0px;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    align-items: center;
    max-width: 20rem;
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
    font-size: 22px;
    line-height: 36px;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
    text-align: right;
    color: #fafafb;
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
  @media screen and (max-width: 768px) {
    font-size: 14px;
    text-align: left;
    line-height: 25px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    padding: 0;
    margin: 0 auto;
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
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0;
    padding: 0;
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
    font-weight: 400;

    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    text-align: right;
    line-height: 18px;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    padding: 0;
    margin: 0;
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
    padding: 0;
  }
  @media screen and (max-width: 960px) {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 0;
  }
`;
export const ImgPhone = styled.img`
  width: 100%;
  @media screen and (max-width: 1280px) {
    width: 317.27px;
    margin: 0 26px 130px;
  }
  @media screen and (max-width: 1024px) {
    width: 360px;
  }

  @media screen and (max-width: 960px) {
    width: 290px;
    margin: 0 26px 90px;
  }
  @media screen and (max-width: 820px) {
    width: 260px;
    margin: 0 26px 130px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 20px 130px;
    width: 160px;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
    margin-bottom: 40px;
    display: none;
  }
`;
export const ImgPhoneTop = styled.img`
  width: 100%;
  display: none;

  @media screen and (max-width: 1280px) {
    width: 317.27px;

    margin: 0 26px 130px;
  }
  @media screen and (max-width: 1024px) {
    width: 360px;
  }

  @media screen and (max-width: 960px) {
    width: 290px;
    margin: 0 26px 90px;
  }
  @media screen and (max-width: 820px) {
    width: 260px;
    margin: 0 26px 130px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
    display: none;
    width: 100px;
  }
  @media screen and (max-width: 480px) {
    width: 260px;
    margin-bottom: 54px;
    display: block;
  }
`;
export const PhoneIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0 106px 0;

  @media screen and (max-width: 1280px) {
    position: absolute;
    bottom: 0px;
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
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 8rem;
    padding: 0px;
  }
  @media screen and (max-width: 480px) {
    display: none;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 8rem;
    padding: 0px;
  }
  @media screen and (max-width: 280px) {
    display: none;

    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 7rem;
    padding: 0px;
    margin-top: 20px;
  }
`;
export const PhoneIconsTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 56px 0 106px 0;
  display: none;
  @media screen and (max-width: 1280px) {
    position: absolute;
    bottom: 0px;
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
    position: absolute;
    top: 560px;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 8rem;
    padding: 0px;
    top: 1630px;
    position: absolute;
  }
  @media screen and (max-width: 280px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 7rem;
    padding: 0px;
    margin-top: 50px;
  }
`;
export const Icons = styled.img`
  margin: 0 20px 0px 20px;
  @media screen and (max-width: 1280px) {
    width: 8.5rem;
    height: 43px;
    margin: 0px 14px 0 14px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 10px 0px 10px;

    width: 174px;
    height: 54px;
  }
  @media screen and (max-width: 960px) {
    width: 9.5rem;
    height: 47px;

    margin: 0px 14px 0 14px;
  }
  @media screen and (max-width: 820px) {
    width: 8.5rem;
    height: 43px;
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
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;
export const TextWrapper = styled.div`
  max-width: 385px;
  max-height: 205px;
  margin-bottom: 95px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1280px) {
    margin-bottom: 50px;
    max-width: 230px;
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
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    max-width: 230px;
    max-width: 185px;
    /* background-color: red; */
  }
  @media screen and (max-width: 480px) {
    /* padding: 0;
margin-top: 0px; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 20rem;
  }
`;
export const Heading = styled.h1`
  font-weight: 600;
  line-height: 48px;
  color: #fafafb;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 36px;
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
  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 25px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 0;
    margin: 0;
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
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    margin: 0;
    padding: 0;
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
    font-weight: 400;

    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 18px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
  }
  @media screen and (max-width: 280px) {
    font-size: 13px;
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
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const ImgBgs = styled.img`
  width: 100%;
  /* height: 1600px; */
  -o-object-fit: cover;
  object-fit: cover;
  display: none;
  display: ${({ mobile }) => (mobile ? "none" : "block")};
  @media screen and (max-width: 1280px) {
    height: 1380px;
  }
  @media screen and (max-width: 960px) {
    height: 1150px;
  }
  @media screen and (max-width: 820px) {
    height: 1105px;
  }
  @media screen and (max-width: 768px) {
    height: 1000px;
    background: black;
  }
  @media screen and (max-width: 480px) {
    height: 470px;
    background: none;
    display: ${({ mobile }) => (mobile ? "block" : "none")};
  }
  @media screen and (max-width: 380px) {
    height: 895px;
    background: none;
  }
`;
export const ImgBgs2 = styled.img`
  width: 100%;
  /* height: 1600px; */
  -o-object-fit: cover;
  object-fit: cover;
  display: none;
  display: ${({ mobile }) => (mobile ? "none" : "block")};
  @media screen and (max-width: 1280px) {
    height: 1380px;
  }
  @media screen and (max-width: 960px) {
    height: 1150px;
  }
  @media screen and (max-width: 820px) {
    height: 1105px;
  }
  @media screen and (max-width: 768px) {
    height: 1000px;
    background: none;
  }
  @media screen and (max-width: 480px) {
    /* height: 470px; */
    height: 100%;
    width: 100%;
    background: none;
    display:"block";
  }
  @media screen and (max-width: 280px) {
    background: #2B2D31;
    display: none;
  }
  /* @media screen and (max-width: 380px) {
    height: 895px;
    background: none;
  } */
`;