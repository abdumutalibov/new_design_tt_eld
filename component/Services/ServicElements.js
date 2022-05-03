import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
/* background:#010606; */
  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
max-width: 90rem;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
grid-gap: 30px;
padding: 0 24px;

@media screen and (max-width:1000px){
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}

`;

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
border-radius: 10px;
/* max-height: 340px; */
/* padding: 30px; */
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
/* box-shadow: 2px 4px 24px rgba(151, 151, 151, 0.12); */
transition: all 0.2s ease-in-out;
max-width: 490px;
max-width: 450px;
&:hover{
    transform: scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}
`
export const ServicesIcon = styled.img`
height: 274px;
width: 355px;
margin-bottom: 10px;
`
export const ServicesIconShopping =styled.img`

`
export const ServicesTextRight =styled.div`
  width: 100%;
display: flex;
`
export const ServicesTextRightItem = styled.div`
display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
  background-color:red;
  /* width: 100%; */
`
export const ServicesH1 =styled.h1`
font-weight: 700;
font-size: 56px;
line-height: 80px;
text-align: center;
color: #1A2944;
/* margin-bottom:64px; */

@media screen and (max-width:480px){
    font-size: 2rem;
}
`
export const ServicesText = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 48px;
text-align: center;
color: #8C98A4;
@media screen and (max-width:480px){
  font-size: 20;
}
`
export const ServicesH2 = styled.h2`
font-weight: 600;
font-size: 24px;
line-height: 49px;
color: #1A2944;
text-align: right;

`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
margin-right: auto;
`