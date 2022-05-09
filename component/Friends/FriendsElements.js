import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const FriendsContainer = styled.div`
  height: 1700px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: red; */
  @media screen and (max-width: 960px) {
    height: 100rem;
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
export const FriendsText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #8c98a4;
  max-width: 63rem;
  margin-bottom: 64px;
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
  max-width: 90rem;
  padding: 0 24px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  margin-bottom: 200px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
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
  @media screen and (max-width: 912px) {
    /* margin-top: -10; */
    width: 105px;
    height: 105px;
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
  font-size: 19px;
  line-height: 36px;
  text-align: center;
  color: #8c98a4;
  margin-bottom: 20px;

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
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 26px;
  margin-top: 3px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  margin-top: 3px;

  font-size: 26px;
  font-weight: 700;
`;
export const FriendsFooter = styled.div`
  height: 310px;
  background-color: #fafafa;
  display: flex;
  max-width: 93rem;
  padding: 56px 56px;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 200px;
  @media screen and (max-width: 960px) {
    max-height: 14rem;
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
  padding: 30px 0px 0 0;
  margin-right: 45px;
  transition: all 0.2s ease-in-out;
  max-width: 34rem;
  max-height: 550rem;
  @media screen and (max-width: 960px) {
    margin: 0 0 0px 0;
    display: flex;
    font-size: 10px;
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

  max-width: 34rem;
  margin-bottom: 12px;
  @media screen and (max-width: 1024px) {
    margin: 0 0 0px 0;
    display: flex;
    font-size: 24px;
    line-height: 32px;
  }
  @media screen and (max-width: 960px) {
    margin: 0 0 0px 0;
    display: flex;
    font-size: 24px;
    line-height: 32px;
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
  margin-left: 100px;
  margin-bottom: -33px;
  @media screen and (max-width: 960px) {
    width: 200px;
    margin: 30px 0px 0 0;
    /* padding-right: 20px; */
  }
  @media screen and (max-width: 768px) {
    width: 370px;
    margin: 0 0 60px 0;
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
  @media screen and (max-width: 960px) {
    margin: 0 0 0;
    padding-left: 24px;
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
  @media screen and (max-width: 1024px) {
    margin-right: auto;

    display: flex;
  }
  @media screen and (max-width: 960px) {
    margin-right: auto;

    display: flex;
  }
  @media screen and (max-width: 768px) {
    margin: 0 0 60px 0;
  }

  @media screen and (max-width: 480px) {
    margin-right: 0;
    display: flex;
    /* font-size: 10px; */
  }
  @media screen and (max-width: 280px) {
    margin: 0;
  }
`;
export const FooterImg = styled.img`
  margin-right: 20px;
  @media screen and (max-width: 1024px) {
    margin: 0 0 0px 0;
  }
  @media screen and (max-width: 960px) {
    margin: 0px 10px 0px 0;
    width: 7rem;
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
