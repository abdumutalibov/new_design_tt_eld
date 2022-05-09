import styled from "styled-components";

export const FrequntlyContainer = styled.div`
  height: 2180px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    height: 165rem;
  }
  @media screen and (max-width: 768px) {
    height: 170rem;
  }

  @media screen and (max-width: 480px) {
    height: 160rem;
  }
  @media screen and (max-width: 280px) {
    height: 180rem;
  }
`;
export const FrequntlyH1 = styled.h1`
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
export const FrequntlyText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #8c98a4;
  max-width: 70rem;
  margin-bottom: 70px;
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
export const FrequentlyWrapper = styled.div`
  max-width: 90rem;
  padding: 0 24px;
  /* margin: 0 auto; */
  /* align-items: center;
  margin-bottom: 200px; */
  
`;
export const FrequntlyBox1 = styled.div`
  background: rgba(255, 255, 255, 0.97);
  border: 1.5px solid #ffb94a;
  box-sizing: border-box;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  max-width: 87rem;
  max-height: 1700px;
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Col = styled.div`
  display: flex;
  margin: 24px;
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    margin: 10px;
  }
`;
export const FrequntlyH2 = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #1470c6;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    /* padding: 10px; */
    margin-right: auto;
  }
`;
export const FrequentlyP = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  color: #5a7184;
  max-width: 74rem;
  margin-right: 210px;
  padding-left: 24px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
    margin-right: 0;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;
export const FrequentlyDecrement = styled.img`
  /* margin-left: 72rem; */
  cursor: pointer;
`;

export const FrequntlyBox2 = styled.div`
  background: #ffffff;
  border: 1.5px solid #e5eaf4;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
  }
`;

export const Col2 = styled.div`
  display: flex;
  margin: 24px;
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    margin: 10px;
  }
`;
export const FrequntlyT2 = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #183b56;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
    /* padding: 10px; */
    margin-right: auto;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 32px;
    margin-right: auto;
  }
  @media screen and (max-width: 280px) {
    font-size: 9px;
    margin-right: auto;
  }
`;
export const FrequentlyP2 = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  color: #5a7184;
  max-width: 74rem;
  margin-right: 210px;
  padding-left: 24px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
    margin-right: 0;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;
export const FrequentlyDecrement2 = styled.img`
  
  cursor: pointer;

  @media screen and (max-width: 280px) {
    width: 10px;
  }
`;
export const FrequentlyLogin = styled.div`
  background-color: #2b2d31;
  padding: 60px 90px;
margin-top: 128px;
  @media screen and (max-width: 1280px) {
    padding: 0 0 60px 0;
  }
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 768px) {
    padding: 0 0 20px 0;
  }
  @media screen and (max-width: 480px) {
    padding: 0 0 20px 0px;
  }
`;
export const Col3 = styled.div`
  display: flex;
  margin: 24px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    margin-top: 30px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    /* margin: 10px; */
    margin-top: 60px;
  }
`;

export const LoginText = styled.div`
  max-width: 36rem;
  margin-right: auto;
  @media screen and (max-width: 1280px) {
    padding: 60px 0 0px 0;
  }
`;
export const LoginTxt1 = styled.div`
  font-weight: 700;
  font-size: 43px;
  line-height: 68px;
  color: #ffffff;
  margin-bottom: 12px;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
`;
export const LoginTxt2 = styled.div`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  margin-bottom: 24px;
  color: #a7a8aa;
  @media screen and (max-width: 768px) {
    font-size: 19px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
`;
export const LoginTxt3 = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  color: #fafafb;
  /* max-width: 60px; */
  /* background-color: red; */
  max-width: 30rem;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    margin: 10px;
  }
`;
export const LoginTxt4 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #c7c7c7;
  @media screen and (max-width: 768px) {
    font-size: 19px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    text-align: center;
    margin: 10px;
  }
`;

export const LoginHr = styled.hr`
  border: 1.5px dashed #b3bac5;
  max-width: 28rem;
  margin-bottom: 24px;
`;

export const LoginContainer = styled.div`
  margin-left: 120px;
  max-height: 69rem;
  background-color: white;
  @media screen and (max-width: 1280px) {
    padding: 0;
    font-size: 13px;
    margin: 60px 0 0 0;
  }
  @media screen and (max-width: 960px) {
    padding: 0;
    font-size: 13px;
    margin: 60px 0 0 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    font-size: 13px;
    margin: 60px 0 0 0;
  }
  @media screen and (max-width: 480px) {
    margin-top: 60px;
    padding: 0;
    margin: 60px 0 0 0;
  }
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const FormContent = styled.div`
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0px;
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 0px;
  }
`;
export const Form = styled.form`
  padding: 30px;
  max-width: 600rem;
  height: auto;
  width: 100%;
  display: grid;
  /* margin: 0 auto; */
  /* padding: 80px 32px; */
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 768px) {
    padding: 30px;
    /* font-size: 13px; */
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 10px;
    margin: 0;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #5a7184;
  @media screen and (max-width: 960px) {
    padding: 1px 1px;
    font-size: 22px;
    margin-bottom:10px;
  }
  @media screen and (max-width: 768px) {
    padding: 1px 1px;
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 480px) {
    padding: 1px 1px;
    font-size: 13px;
    margin-bottom: 1px;
  }
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
  border: 1px solid #c3cad9;
  box-sizing: border-box;
  border-radius: 4px;
  @media screen and (max-width: 1280px) {
    padding: 10px 10px;
    font-size: 11px;
  }
  @media screen and (max-width: 960px) {
    max-width: 1300rem;
    padding: 25px 15px;
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 15px;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    padding: 7px 10px;
    font-size: 10px;
  }
`;

export const FormButton = styled.button`
  background: #ffbb00;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 960px) {
    font-size: 22px;

    padding: 25px 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    padding: 7px 10px;

    font-size: 15px;
  }
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
export const FormMainCol = styled.div`
  display: flex;
  max-width: 600rem;
  @media screen and (max-width: 960px) {
    max-width: 600rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    margin: 0px;
    max-width: 640rem;
    width: 100%;

  }
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;

export const FormCol1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  @media screen and (max-width: 960px) {
    /* margin-right:auto; */
    /* padding: 10px; */
    max-width: 540rem;
    margin-right: auto;
    width: 100%;
    margin-right: 12px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
    /* padding: 10px; */
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
    /* padding: 10px; */
  }
`;

