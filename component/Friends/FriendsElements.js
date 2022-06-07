import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const FriendsContainer = styled.div`
  height: 1250px;
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
    height: 100rem;
    margin: 0;
    padding: 0;
    max-width: 56rem;
  }

  @media screen and (max-width: 480px) {
    height: 115rem;
    padding: 0;
  }
  @media screen and (max-width: 280px) {
    height: 125rem;
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
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
font-size: 24px;
line-height: 36px;
margin: 0;
padding: 0;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
font-size: 20px;
line-height: 36px;
margin: 0;
padding: 0;
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
  @media screen and (max-width: 768px) {
    font-weight: 400;
font-size: 13px;
line-height: 22px;
max-width: 22rem;
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
max-width: 20rem;
    padding: 5px 0 0 0;
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
max-width: 18rem;
    padding: 00px;
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
    margin-bottom: 0px;
    padding: 0;
    grid-template-columns: 1fr ;
    grid-gap: 0px;
display: flex;
flex-direction: column;
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
    margin-top: 0px;
    margin: 0;
    padding: 0;

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
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
    width: 56px;
    height: 56px;
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
    font-weight: 700;
font-size: 16px;
line-height: 24px;
margin: 10px 0;
padding: 0;
  }
  @media screen and (max-width: 480px) {
font-weight: 700;
font-size: 16px;
line-height: 24px;
margin: 10px 0;
padding: 0;
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
    font-weight: 400;
font-size: 13px;
line-height: 22px;
max-width: 13rem;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
max-width: 20rem;
    /* line-height: 25px; */
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
max-width: 13rem;
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
    font-size: 16px;
    line-height: 30px;

    text-align: center;
    margin-bottom: 650px;
    color: #1470c6;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
font-size: 16px;
line-height: 22px;

    text-align: center;
    color: #1470c6;
    margin: 0 0 50px 0;
    padding: 0;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
font-size: 16px;
line-height: 22px;

    text-align: center;
    color: #1470c6;
    margin: 0 0 50px 0;
    padding: 0;
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
  display: flex;
  width: 100%;
  max-width: 83rem;
  padding: 56px 56px;
  margin: 0 auto;
  align-items: center;
  /* margin-bottom: 200px; */
  margin-bottom: 200px;
  background-color: #fafafa;

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
    max-height: 40rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 60rem;
    width: 100%;
    margin: 0px 0px 0 0px;
padding: 0 20px;
background:none;

  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0px;
    max-height: 34.1rem;
    margin: 100px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 320px) {
    flex-direction: column;
    padding: 0px;
    max-height: 35rem;
    margin: 60px 0 0 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
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
        margin:105px 0px 0px 0;
    max-width: 22rem;
    width: 100%;

  }

  @media screen and (max-width: 480px) {
    margin: 90px 0 0 0;
    padding: 0;
    max-width: 21rem;
    max-height: 180px;

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
    margin: 0 0 18px 0;
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
    max-width: 18.6rem;
  }
  @media screen and (max-width: 768px) {
    font-weight: 600;
font-size: 20px;
line-height: 32px;
    text-align: center;
    margin: 10px;
    width: 100%;
    margin-bottom:20px;
    
  }
  @media screen and (max-width: 480px) {
    font-weight: 600;
font-size: 18px;
line-height: 32px;
    text-align: center;
    margin: 10px;
    margin-bottom: 30px;
  }
`;
export const Alink = styled.a`
position: relative;
`

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
  display: none;
  @media screen and (max-width: 1280px) {
    /* width: 233px; */
    margin: 47px 0px 0 0px;
    position: absolute;
    margin-left: 170px;
    display: block;
  }
  @media screen and (max-width: 1024px) {
    width: 203px;
    margin-top: 51px;
    padding: 0;
    position: absolute;
    margin-left: 180px;
  }
  @media screen and (max-width: 960px) {
    /* width: 203px;
    margin-top: 80px;
    margin-left: 200px;
    padding: 0;
    position: absolute;
    margin-top: 51px; */
    width: 203px;
    right:-60px;
    padding: 0;
    position: absolute;
    top:-138px;

  }
  @media screen and (max-width: 820px) {
    /* width: 173px;
    margin-top: 50px;
    margin-left: 140px;
    padding: 0;
    position: absolute;
    margin-top: 30px; */
    width: 173px;
    right:-40px;
    padding: 0;
    position: absolute;
    top:-132px;


  }
  @media screen and (max-width: 768px) {
    width: 250px;
    margin: 50px 0 60px 0;
    position: static;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 260px;

    padding: 10px 20px;
    margin-top:10px ;
    margin-bottom: 50px;
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
    font-size: 16px;
    padding: 10px;
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    display: none;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
  }
`;
export const FooterCard3 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #666666;
  max-width: 13rem;
  margin-left: 100px;
  display: none;
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
    font-size: 19px;
    line-height: 30px;

    padding: 30px 0 0px  0;
    display: block;
    width: 16rem;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    text-align: center;
    font-weight: 400;
font-size: 13px;
line-height: 22px;
    padding: 30px 0 0px  0;
    display: block;
    margin: 0;
    max-width: 13rem;
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
    margin-right: auto;
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
    margin: 0 0 0px 0;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    margin-right: 0;
    display: flex;
    margin: 0 auto;
    /* font-size: 10px; */
  }
  @media screen and (max-width: 320px) {
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
    margin: 0 10px;
    width: 8rem;
  }

  @media screen and (max-width: 480px) {
    margin: 0px 10px 0px 10px;
    display: flex;
    font-size: 10px;
    width: 9rem;
  }
  @media screen and (max-width: 320px) {
    margin: 0px 10px 0px 10px;
    display: flex;
    font-size: 10px;
    width: 8rem;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
    width: 7rem;
  }
`;



export const MaxmWhids= styled.div`
display: flex;
justify-content: center;
align-items: center;
    @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 41.5rem;
    max-width: 41.5rem;
    width: 100%;
    margin: 0px 1px 0 1px;
    background-color: #fafafa;

padding: 0;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 47rem;
    width: 90%;
    margin: 0px 0px 0 0px;
  }
  @media screen and (max-width: 320px) {
    flex-direction: column;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 47rem;
    width: 90%;
padding: 0;
    margin: 0px 0px 0 0px;
  }
`