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
  margin-right: 48px;
  max-width: 230px;
  max-height: 67px;
  font-weight: 500;
  font-weight: 600;
font-size: 22px;
line-height: 32px;
/* identical to box height, or 145% */


color: #2D2B31;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#37353B" : "#01BF71")};
    color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  }
  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-right: 20px;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
    /* margin-top:20px; */
    padding: ${({ big }) => (big ? "14px 48px" : "10px 20px")};
    font-size: ${({ fontBig }) => (fontBig ? "20px" : "12px")};
  }
`;
export const Button2 = styled.a`
  border-radius: 6px;
  background: ${({ primary }) => (primary ? "#4b494f" : "#010606")};
  font-weight: 500;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "15px 40px")};
  color: ${({ dark }) => (dark ? "#fff" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};

  outline: none;
  border: solid 4px white;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  max-width: 240px;
  max-height: 67px;
  margin-right: 20px;
  font-weight: 600;
font-size: 22px;
line-height: 32px;
/* identical to box height, or 145% */


  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
    color: ${({ dark }) => (dark ? "#000" : "#fff")};
    border: solid 4px #706e77;
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
