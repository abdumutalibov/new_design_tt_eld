import styled from "styled-components";

export const Img = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 38% 36% 48% 52% / 15% 10% 13% 12%; */


`;
export const Container = styled.div`
background: url('https://6273dea103dc9150cb2642ed--sparkly-nougat-c0f5ea.netlify.app/Base.svg');
/* background: no-repeat; */
width: 100%;
  height: 100%;
  object-fit: cover;
  background-repeat: no-repeat; 
    background-size:cover;
  min-height: 692px;
  /* position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0; */
  /* overflow: hidden; */
  /* background: linear-gradient( 108deg,rgba(1, 147, 86, 1) 0%, rgba(10, 201, 122, 1) 100%); */
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
export const Icon = styled.a`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
z-index: 1;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
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
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px ;
`
export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`
export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`

// export const Test = styled.div`
//  background: #074b7e;
//   width: 300px;
//   height: 150px;
//   overflow: hidden;
//   position: relative;


// :before{
//    content: '';
//    width: 150px;
//    height: 150px;
//    background: #fff;
//    position: absolute;
//    top: 0;
//    right: -75px;
//    border-radius: 100%;
// }
// `
 
export const Header = styled.div`
  height: 500px;
    background: rgb(84, 83, 83);
    z-index: 1;
`
export const Header1 = styled.div`
   height: 500px;
    background: #000;
    border-bottom-left-radius: 85%;
    border-bottom-right-radius: 85%;
    z-index: 1;
`
export const Third = styled.div`
 height: 500px;
    background: rgb(46, 41, 41);
    z-index: 1;
` 
export const Section = styled.div`
/* position: absolute; */

    background: rgb(84, 83, 83);
    height: 500px;
    border-bottom-left-radius: 85%;
    border-bottom-right-radius: 85%;
    z-index: 1;
`
export const Section2 = styled.div`
 height: 300px;
    background: rgb(46, 41, 41);
    z-index: 1;
`