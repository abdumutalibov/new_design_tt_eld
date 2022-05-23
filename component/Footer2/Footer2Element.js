import styled from "styled-components";

export const FooterContainer = styled.div`
display: none;

@media screen and (max-width: 768px) {
     display: block;
     background-color: #19191b;
     display: flex;
     /* justify-content: center; */
     align-items: center;
     flex-direction: column;
     width: 100%;

     padding: 7px 20px 2px 20px;
     height: 100%;
     /* height: 383px; */
  }

 @media screen and (max-width: 480px) {
     display: block;
     background-color: #19191b;
     display: flex;
     /* justify-content: center; */
     align-items: center;
     flex-direction: column;
     width: 100%;
     padding: 7px 15px 2px 15px;
     height: 100%;
     /* height: 383px; */
  }

`;
export const Col = styled.div`

@media screen and (max-width: 768px) {
   display: flex;
justify-content: space-between;
align-items: center;
  max-width: 42rem;
  display: flex;
  margin: 0 50px;
border-top: ${({last})=>(last ? '1px solid #2F2F31': '')} ;
/* border-bottom: ${({second})=>(second ? '1px solid white': '')} ; */
  width: 100%;
  padding: ${({ last }) => (last ? "20px 10px 24px 0px " : "10px 0px 10px 0")};
  padding: ${({ second }) => (second ? "10px 10px 24px 0px " : "10px 0px 10px 0")};
}
 @media screen and (max-width: 480px) {
   display: flex;
justify-content: space-between;
align-items: center;
  max-width: 23.3rem;
  display: flex;
border-top: ${({last})=>(last ? '1px solid #2F2F31': '')} ;
/* border-bottom: ${({second})=>(second ? '1px solid white': '')} ; */
  width: 100%;
  padding: ${({ last }) => (last ? "20px 10px 24px 0px " : "10px 0px 10px 0")};
  padding: ${({ second }) => (second ? "10px 10px 24px 0px " : "10px 0px 10px 0")};
}

`;
export const Span = styled.span`
 @media screen and (max-width: 768px) {
   
   display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-left: ${({phone})=>(phone ? '26px':'0')};
    font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  /* border-bottom: ${({second})=>(second ? '1px solid white': '')} ; */
  
  }
 @media screen and (max-width: 480px) {
   
 display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-left: ${({phone})=>(phone ? '26px':'0')};
  font-weight: 400;
font-size: 15px;
line-height: 18px;
/* border-bottom: ${({second})=>(second ? '1px solid white': '')} ; */

}
@media screen and (max-width: 320px) {
    font-weight: 400;
font-size: 12px;
line-height: 18px;
}
`;
export const Icon = styled.img`
 @media screen and (max-width: 768px) {
     margin-right: 7px;
 }
 @media screen and (max-width: 480px) {
     margin-right: 7px;
 }
`;
export const Logo = styled.img`
 @media screen and (max-width: 768px) {
     max-width: 6.5rem;
margin-left: 0 auto;
padding: 10px 0;
 }
 @media screen and (max-width: 480px) {
     max-width: 5.5rem;
margin-left: 0 auto;
padding: 10px 0;
 }
  
`;

export const FaIcons = styled.div`

@media screen and (max-width: 768px) {
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-left: 30px;
font-size: 25px;

}
@media screen and (max-width: 480px) {
display: flex;
justify-content: flex-end;
align-items: flex-end;
margin-left: 30px;
font-size: 20px;

}


`
export const Test = styled.div`

@media screen and (max-width: 768px) {
     display: flex;
justify-content: flex-end;
align-items: flex-end;
max-width: 90rem;
width: 100%;
/* margin-right: 20px; */
margin: 0 auto;
 }
 @media screen and (max-width: 480px) {
     display: flex;
justify-content: flex-end;
align-items: flex-end;
max-width: 90rem;
width: 100%;
/* margin-right: 20px; */
margin: 0 auto;
 }

`
export const MaxmWhids = styled.div`
@media screen and (max-width: 768px) {

}
@media screen and (max-width: 480px) {
  
}
`