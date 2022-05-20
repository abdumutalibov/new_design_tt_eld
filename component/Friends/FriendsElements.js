import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const FriendsContainer = styled.div`
  height: 1200px;
  /* margin-top: 200px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    height: 66rem;
    margin: 0;
  }
  @media screen and (max-width: 820px) {
    height: 60rem;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    height: 190rem;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    height: 160rem;
    padding: 0;
  }
  @media screen and (max-width: 280px) {
    height: 155rem;
  }
`;
export const FriendsH1 = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: #1a2944;
  margin-bottom: 16px;
  @media screen and (max-width: 1280px) {
    font-weight: 700;
font-size: 40px;
line-height: 56px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 960px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 39px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    text-align: center;
    color: #1a2944;
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
export const FriendsText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #8c98a4;
  max-width: 59rem;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
font-size: 18px;
line-height: 36px;
    text-align: center;
    color: #8c98a4;
    max-width: 48rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #8c98a4;
    max-width: 41rem;
  }
  @media screen and (max-width: 960px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    color: #8c98a4;
    max-width: 37rem;
    margin-bottom: 43px;
  }
  @media screen and (max-width: 820px) {
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8c98a4;
    margin-bottom: 30px;
    max-width: 31rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 28px;
    padding: 10px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
    line-height: 28px;
    padding: 10px;
  }
`;
export const FriendsWrapper = styled.div`
  max-width: 88rem;
  padding: 0 24px 0 18px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 13px;

  @media screen and (max-width: 1280px) {
    margin: 0;
    max-width: 74rem;
    grid-gap: 0px;
  }
  @media screen and (max-width: 1024px) {
    margin: 0;
    max-width: 57rem;
    width: 100%;
    grid-gap: 0px;
  }
  @media screen and (max-width: 960px) {
    max-width: 51rem;
    padding: 0;
    margin: 0;
  }
  @media screen and (max-width: 820px) {
    max-width: 47.2rem;
    padding: 0;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 100px;
    padding: 0;
  }
`;
export const FriendsCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  padding: 20px 10px;
  width: 100%;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  /* box-shadow: 2px 4px 24px rgba(151, 151, 151, 0.12); */
  transition: all 0.2s ease-in-out;
  max-width: 450px;
  max-height: 550px;
  /* &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  } */
  @media screen and (max-width: 1280px) {
    max-width: 400px;
    max-height: 274px;
    margin-bottom: 150px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 380px;
    max-height: 274px;
    margin-bottom: 127px;
  }
  @media screen and (max-width: 960px) {
    max-width: 380px;
    max-height: 274px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 480px) {
    padding: 15px;
    margin-top: 15px;
    padding: 0 10px;
  }
`;
export const ImgIcon = styled.img`
  margin: 0;
  width: 78px;
  height: 78px;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    /* margin-top: -10; */
    width: 78px;
    height: 78px;
  }
  @media screen and (max-width: 1024px) {
    /* margin-top: -10; */
    width: 78px;
    height: 78px;
  }
  @media screen and (max-width: 960px) {
    /* margin-top: -10; */
    width: 70px;
    height: 70px;
  margin-bottom: 25px;

  }
  @media screen and (max-width: 820px) {
    /* margin-top: -10; */
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    /* margin-top: -10; */
  }
`;
export const IconName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 10px;
  color: #3b485e;
  @media screen and (max-width: 1280px) {
    font-weight: 700;
font-size: 24px;
line-height: 36px;
    text-align: center;
    color: #3b485e;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #3b485e;
  }
  @media screen and (max-width: 960px) {
    font-size: 23px;
    line-height: 23px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 820px) {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 23px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 26px;
    line-height: 25px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;
export const IconInfo = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  color: #8c98a4;
  margin-bottom: 20px;
  max-width: 40rem;
  width: 100%;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
font-size: 14px;
line-height: 28px;
    text-align: center;
    color: #8c98a4;
    max-width:14rem ;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 13.4px;
    line-height: 28px;
    text-align: center;
    color: #8c98a4;
  }
  @media screen and (max-width: 960px) {
    font-size: 12.5px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 13px;

  }
  @media screen and (max-width: 820px) {
    font-size: 11px;
    line-height: 23px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 23px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 15px;

    /* line-height: 25px; */
  }
  @media screen and (max-width: 280px) {
    font-size: 11px;
  }
`;
export const FollowUs = styled.a`
  font-weight: 700;
  font-size: 21.9894px;
  line-height: 30px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  color: #1470c6;
  @media screen and (max-width: 1280px) {
    /* margin-top: -10; */
    font-weight: 700;
font-size: 21.9894px;
line-height: 30px;
    /* identical to box height */

    text-align: center;

    color: #1470c6;
  }
  @media screen and (max-width: 960px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 650px;
    color: #1470c6;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;

    text-align: center;
    margin-bottom: 650px;
    color: #1470c6;
  }
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 26px;
  font-weight: 700px;
  margin-top: 3px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  margin-top: 3px;

  font-size: 26px;
  font-weight: 700;
`;
export const Arrow = styled.img`
  margin-left: 8px;
  font-size: 26px;
  font-weight: 700px;
  margin-top: 3px;
  @media screen and (max-width: 820px) {
    width: 13px;
  }
`;
export const FriendsFooter = styled.div`
  height: 310px;
  background-color: #fafafa;
  display: flex;
  width: 100%;
  max-width: 83rem;
  padding: 56px 56px;
  margin: 0 auto;
  align-items: center;
  /* margin-bottom: 200px; */
  @media screen and (max-width: 1280px) {
    margin: 0;
    max-width: 55rem;
    width: 100%;
    margin: 0;
    padding: 0 35px;
    max-height: 275px;
    position: relative;
  }
  @media screen and (max-width: 1024px) {
    margin: 0;
    max-width: 52.2rem;
    width: 100%;
    margin: 0;
    padding: 0 35px;
    max-height: 275px;
    position: relative;
  }
  @media screen and (max-width: 960px) {
    margin: 0;
    max-width: 49rem;
    width: 100%;
    margin: 0;
    padding: 0 35px;
    max-height: 275px;
    position: relative;
    margin-top: 60px;
  }
  @media screen and (max-width: 820px) {
    margin: 0;
    max-width: 44rem;
    width: 100%;
    margin: 0;
    padding: 0 35px;
    max-height: 220px;
    position: relative;
    margin: 40px 0 100px 0;

  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    max-height: 60rem;
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 20px;
    max-height: 40rem;
    margin: 0;
    padding: 0;
  }
`;
export const FooterCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 10px;
  padding: 10px 0px 20px 0;
  margin-right: 46px;
  max-width: 34rem;
  max-height: 550rem;
  margin-right: 120px;
  @media screen and (max-width: 1280px) {
    margin: 0 0 0px 0;
    display: flex;
    font-size: 10px;
    padding: 0px 0px 0 0px;
    width: 100%;
    max-width: 22rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 0 0px 0;
    display: flex;
    font-size: 10px;
    padding: 0px 0px 0 0px;
    width: 100%;
    max-width: 22rem;
    /* margin-right:230px */
  }
  @media screen and (max-width: 960px) {
    margin: 0 150px 0px 0;
    display: flex;
    font-size: 10px;
    padding: 0px 0px 0 0px;
    width: 100%;
    max-width: 21rem;
  }
  @media screen and (max-width: 820px) {
    margin: 0 150px 0px 0;
    display: flex;
    font-size: 10px;
    padding: 10px 0px 10px 0px;
    width: 100%;
    max-width: 18rem;
    max-height: 180px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
  }
`;
export const FooterTxt = styled.div`
  font-weight: 600;
  font-size: 26px;
  line-height: 42px;
  color: #333333;

  max-width: 477px;
  margin-bottom: 12px;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
font-size: 20px;
line-height: 36px;
    color: #333333;
   
    /* margin: 31px 0px; */
    margin: 0;
    padding: 0;
    max-width: 24rem;
    text-align: left;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    color: #333333;
    margin: 31px 0px;
    max-width: 24rem;
  }
  @media screen and (max-width: 960px) {
    margin: 0 0 0px 0;
    display: flex;
    font-size: 19px;
    line-height: 32px;
    font-weight: 700;

  }
  @media screen and (max-width: 820px) {
    margin: 0 0 0px 0;
    display: flex;
    font-size: 16px;
    line-height: 28px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    margin: 10px;
    text-align: center;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 26px;
    text-align: center;
    margin: 10px;
    margin-bottom: 30px;
  }
`;
export const FooterCardImg = styled.img`
  /* margin-left: 90px; */
  margin-bottom: -33px;
  @media screen and (max-width: 1280px) {
    width: 233px;
    margin: 50px 0px 0 0px;
    display: none;
  }
  @media screen and (max-width: 1024px) {
    width: 203px;
    margin-top: 80px;
    margin-left: 370px;
    padding: 0;
    position: absolute;
  }
  @media screen and (max-width: 960px) {
    width: 203px;
    margin-top: 80px;
    margin-left: 350px;
    padding: 0;
    position: absolute;
  }
  @media screen and (max-width: 820px) {
    width: 173px;
    margin-top: 50px;
    margin-left: 300px;
    padding: 0;
    position: absolute;
  }
  @media screen and (max-width: 768px) {
    width: 370px;
    margin: 0 0 60px 0;
    position: static;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 260px;

    padding: 0 20px;
  }
  @media screen and (max-width: 280px) {
    margin: 60px 0;
    width: 15rem;
  }
`;
export const FooterCardImg2 = styled.img`
  /* margin-left: 90px; */
  margin-bottom: -33px;
  @media screen and (max-width: 1280px) {
    /* width: 233px; */
    margin: 47px 0px 0 0px;
    position: absolute;
    margin-left: 390px;
  }
  @media screen and (max-width: 1024px) {
    width: 203px;
    margin-top: 51px;
    padding: 0;
    position: absolute;
    margin-left: 370px;
  }
  @media screen and (max-width: 960px) {
    width: 203px;
    margin-top: 80px;
    margin-left: 350px;
    padding: 0;
    position: absolute;
    margin-top: 51px;

  }
  @media screen and (max-width: 820px) {
    width: 173px;
    margin-top: 50px;
    margin-left: 300px;
    padding: 0;
    position: absolute;
    margin-top: 30px;

  }
  @media screen and (max-width: 768px) {
    width: 370px;
    margin: 0 0 60px 0;
    position: static;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 260px;

    padding: 0 20px;
  }
  @media screen and (max-width: 280px) {
    margin: 60px 0;
    width: 15rem;
  }
`;
export const FooterCard2 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #666666;
  max-width: 13rem;
  margin-left: 100px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #666666;
    margin-left: 280px;
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #666666;
    margin-left: 250px;
    padding: 0;
  }
  @media screen and (max-width: 960px) {
    margin: 0 0 0;
    padding-left: 90px;
    font-size: 15px;
    max-width: 14rem;
    line-height: 30px;

  }
  @media screen and (max-width: 820px) {
    margin: 0 0 0;
    padding-left: 64px;
    line-height: 25px;

    font-size: 12px;
    max-width: 14rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    text-align: center;
    font-size: 30px;
    max-width: 23rem;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    text-align: center;
    font-size: 16px;
    padding: 10px;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
  }
`;
export const FooterImgRight = styled.div`
  margin-right: auto;
  padding: 10px 0 0px 0;
  @media screen and (max-width: 1280px) {
    margin-right: auto;
    /* margin-top: 20px; */
    display: flex;
  }
  @media screen and (max-width: 1024px) {
    /* margin-right: auto; */
    margin: 0px;
    padding: 0;
    display: flex;
  }
  @media screen and (max-width: 960px) {
    margin-right: auto;
margin-top: 27px;
    display: flex;
  }
  @media screen and (max-width: 820px) {
    margin-right: auto;
margin-top: 20px;
    display: flex;
  }
  @media screen and (max-width: 768px) {
    margin: 0 0 60px 0;
  }

  @media screen and (max-width: 480px) {
    margin-right: 0;
    display: flex;
    margin: 0 auto;
    /* font-size: 10px; */
  }
  @media screen and (max-width: 280px) {
    margin: 0 auto;
  }
`;
export const FooterImg = styled.img`
  margin-right: 20px;
  @media screen and (max-width: 1024px) {
    margin: 0 13px 0px 0;
  }
  @media screen and (max-width: 960px) {
    margin: 0px 10px 0px 0;
    width: 8rem;
  }
  @media screen and (max-width: 820px) {
    margin: 0px 10px 0px 0;
    width: 6.5rem;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    width: 13rem;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 30px;
    display: flex;
    font-size: 10px;
    width: 8rem;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
    width: 7rem;
  }
`;
