import styled from "styled-components";

export const HelpContainer = styled.div`
  /* margin-top: 190px; */
  padding: 10rem 0 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1280px) {
    /* height: 540px; */
    margin: 0;
    padding-top: 75px;
  }
  @media screen and (max-width: 960px) {
    height: 770px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 820px) {
    height: 610px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    height: 600px;
    margin: 0;
    padding: 0;
  padding: 5rem 0 5px 0;

  }

  @media screen and (max-width: 480px) {
    height: 900px;
    padding: 0;
  }
`;
export const HelpWrapper = styled.div`
  max-width: 86rem;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 26px;
  padding: 0 24px;
  @media screen and (max-width: 1280px) {
    max-width: 55rem;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    /* padding: 0 94px; */
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    max-width: 52.2rem;
    padding: 0px;
  }
  @media screen and (max-width: 960px) {
    max-width: 49rem;
  }
  @media screen and (max-width: 820px) {
    max-width: 44rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0;
  max-width: 21.3rem;   
  grid-gap: 20px;

  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`;
export const HelpCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  max-width: 419px;
  max-height: 104px;
  padding: 20px;
  /* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
  border: 2px solid #eae9f2;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  border: 2px solid #eae9f2;
  border-radius: 8px;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1280px) {
    max-width: 40rem;
    padding: 10px 18px;
  }
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 960px) {
    padding: 12px 18px;
  }
  @media screen and (max-width: 820px) {
    padding: 10px 18px;
  }
  @media screen and (max-width: 768px) {
    padding: 6px 17px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 18px;
    margin: 0;
  }
`;
export const HelpIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-bottom: 10px;
  @media screen and (max-width: 1280px) {
    width: 25px;
    height: 25px;
    margin-right: 0px;
    padding: 0;
  }
  @media screen and (max-width: 820px) {
    width: 25px;
    height: 25px;
    margin-right: 0px;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    width: 30px;
    height: 30px;
    margin-right: 0px;
    padding: 0;
  }
`;
export const HelpCon = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color:red; */
  margin-left: 10px;
  padding-left: 10px;
  @media screen and (max-width: 820px) {
    margin-left: 6px;
  }
`;
export const HelpH1 = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 56px;
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
    line-height: 30px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 26px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 768px) {
    /* font-size: 2rem; */
    text-align: center;
    font-size: 26px;
    padding: 0 24px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
font-size: 24px;
line-height: 6px;
    padding: 0 10px;
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
font-size: 20px;
line-height: 6px;
    padding: 0 10px;
    text-align: center;
  }
`;
export const HelpSpan = styled.span`
  color: #faad13;
`;
export const HelpTitle = styled.p`
  /* font-size: 1rem; */
  text-align: center;
  max-width: 880px;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  color: #8c98a4;
  margin-bottom: 60px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
font-size: 18px;
line-height: 36px;
    text-align: center;
    color: #8c98a4;
    max-width: 40rem;
    /* margin-bottom: 43px; */
    /* max-width: 40rem; */
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #8c98a4;
    max-width: 40rem;
  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    color: #8c98a4;
    max-width: 40rem;
  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8c98a4;
    max-width: 32rem;
    margin-bottom: 43px;
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
margin-bottom: 34px;
max-width: 28rem;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
margin-bottom: 34px;
  }
`;
export const HelpH2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #1f1911;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
font-size: 20px;
line-height: 32px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 960px) {
    font-size: 19px;
    font-weight: 700;
  }
  @media screen and (max-width: 820px) {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
font-size: 16px;
line-height: 24px;
  }
  @media screen and (max-width: 320px) {
    font-size: 15px;
  }
`;

export const HelpP = styled.p`
    font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #47464D;
  margin-bottom: 10px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
font-size: 16px;
line-height: 24px;
  }
  @media screen and (max-width: 820px) {
    font-size: 13.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
  }
  @media screen and (max-width: 320px) {
    font-size: 13px;
  }
`;
