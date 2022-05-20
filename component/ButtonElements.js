import styled from "styled-components";

export const Button = styled.a`
  border-radius: 6px;
  background: ${({ primary }) => (primary ? "#fff" : "#010606")};

  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "15px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};

  outline: none;
  border: solid 4px white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-right: 38px;
  max-width: 230px;
  max-height: 67px;
  font-weight: 600;
font-size: 22px;
line-height: 32px;
color: #2D2B31;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#37353B" : "#01BF71")};
    color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  }
@media screen and (max-width:1280px) {
  margin: 0;
    margin:35px 18px 70px 18px;
    width: 215px;
  max-height: 67px;
  font-weight: 600;
font-size: 22px;
  border-radius: 4px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  padding: 10px 24px;
  
}
@media screen and (max-width: 960px) {
  margin: 0;
    margin:35px 18px 70px 18px;
    max-width: 190px;
  max-height: 54px;
  font-size: 20px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  }
  @media screen and (max-width: 820px) {
    margin: 0;
    margin:25px 18px 75px 18px;
    max-width: 150px;
  max-height: 48px;
  font-size: 16px;
  padding: 10px 20px;
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-right: 20px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
    padding: ${({ big }) => (big ? "14px 48px" : "10px 20px")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "12px")};
  }
`;
export const Button2 = styled.a`
  border-radius: 6px;
  background: ${({ primary }) => (primary ? "#FFFFFF" : "#010606")};
  font-weight: 500;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "15px 40px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};

  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};

  outline: none;
  border: solid 4px white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-right: 38px;
  max-width: 230px;
  max-height: 67px;
  font-weight: 600;
font-size: 22px;
line-height: 32px;
color: #2D2B31;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#37353B" : "#01BF71")};
    color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  }
  @media screen and (max-width:1280px) {
  max-width: 217px;
  max-height: 64px;
}
  @media screen and (max-width: 768px) {
    margin-right: 0;
    /* margin-top:20px; */
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-top: 20px;
    padding: ${({ big }) => (big ? "14px 48px" : "10px 28px")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "12px")};
  }
`;
