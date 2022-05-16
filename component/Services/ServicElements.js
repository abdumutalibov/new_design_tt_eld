import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 1900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1280px) {
    height: 100rem;
  }
  @media screen and (max-width: 1024px) {
    height: 95rem;
  }
  @media screen and (max-width: 960px) {
    height: 135rem;
  }
  @media screen and (max-width: 768px) {
    height: 190rem;
  }

  @media screen and (max-width: 480px) {
    height: 190rem;
  }
`;

export const ServicesWrapper = styled.div`
       max-width: 186rem;

  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  margin-bottom: 200px;
  @media screen and (max-width: 1280px) {
    max-width: 1100px;
    width: 100%;
    margin-bottom: 150px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 835px;
    width: 100%;
  grid-gap: 20px;
  margin-bottom: 128px;

  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 35px;
  border-radius: 4px;
  
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  /* box-shadow: 2px 4px 24px rgba(151, 151, 151, 0.12); */
  transition: all 0.2s ease-in-out;
  max-width: 419px;
  max-height: 449px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1024px) {
    padding: 25px;

  }
  @media screen and (max-width: 960px) {
    max-width: 380px;
    max-height: 274px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const ServicesIcon = styled.img`
  width: 355px;
  height: 274px;
  margin-bottom: 10px;
  @media screen and (max-width: 1280px) {
   
    width: 234px;
    height: 180px;
  }
  @media screen and (max-width: 1024px) {
    width: 185px;
    height: 184px;
  }
  @media screen and (max-width: 960px) {
    width: 165px;
    height: 124px;
  }
  @media screen and (max-width: 480px) {
    width: 265px;
    height: 154px;
  }
  @media screen and (max-width: 480px) {
    width: 215px;
    height: 134px;
  }
`;
export const ServicesIconShopping = styled.img`
  height: 23px;
  @media screen and (max-width: 1280px) {
    height: 20px;


  }
  @media screen and (max-width: 1024px) {
    height: 18px;


  }
`;
export const ServicesTextRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
export const ServicesTextRightItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ServicesH1 = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: #1a2944;
  @media screen and (max-width: 1280px) {
    font-weight: 700;
font-size: 50px;
line-height: 56px;
text-align: center;
color: #1A2944;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
font-size: 40px;
line-height: 56px;
text-align: center;
color: #1A2944;
}

  @media screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 22px;
    line-height: 40px;
  }
`;
export const ServicesText = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #8c98a4;
  max-width: 60rem;
  margin-top: 10px;

  margin-bottom: 70px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
font-size: 22px;
line-height: 36px;
text-align: center;
color: #8C98A4;
max-width: 50rem;
margin-top: 20px;

  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 18px;
line-height: 36px;
text-align: center;
color: #8C98A4;
max-width: 40rem;
}
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
    padding: 0 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 30px;
    padding: 0 10px;
  }
`;
export const ServicesH2 = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 49px;
  color: #1a2944;
  margin-bottom: 15px;
  font-weight: 600;
font-size: 26px;
line-height: 49px;
/* identical to box height, or 188% */


color: #1A2944;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 22px;

line-height: 32px;
color: #1A2944;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
font-size: 17px;
line-height: 32px;
color: #1A2944;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
  @media screen and (max-width: 280px) {
    font-size: 15px;
  }
`;

export const ServicesP = styled.p`
  text-align: center;
  margin-right: auto;
  font-weight: 400;
font-size: 24px;
/* line-height: 36px; */
/* identical to box height, or 150% */


color: #5A7184;
@media screen and (max-width: 1280px) {
  font-weight: 400;
font-size: 24px;
line-height: 36px;
color: #5A7184;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 15.8425px;
line-height: 24px;
color: #5A7184;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;

export const ServicesFooterContainer = styled.div`
 background: #2B2D31;
width: 100%;
max-width: 82.7rem;
border-radius: 4px;
  margin-right: 5px;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  @media screen and (max-width: 1280px) {
    width: 100%;
  max-width: 1099px;
  padding: 0;
margin: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  max-width: 837px;
  padding: 0;
margin: 0;

  }
  @media screen and (min-width: 820px) and (max-width:960px) {
    /* margin: 0; */
    padding: 10px;
    width: 100%;
  max-width: 42rem;

    display: flex;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  max-width: 42rem;
  padding: 0 10px;

  }
`;
export const FooterWrap = styled.div`
  padding: 30px 74px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 85rem;
width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
  padding: 32px 0px 32px 44px;
    
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

width: 100%;
  @media screen and (max-width: 820px) {
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
width: 100%;
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    display: flex;
    margin-right: 0;
  }
  @media screen and (max-width: 912px) {
    flex-direction: column;
    margin-right: 0;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-right: 0;
  }
`;
export const FooterMainColumn = styled.div`
  display: flex;
  margin-right: 0;
  max-width: 300rem;
width: 100%;
  @media screen and (max-width: 1280px) {
    display: flex;
    width: 100%;
  max-width: 300rem;

  }
  @media screen and (max-width: 1024px) {
    display: flex;
    width: 100%;
  max-width: 300rem;
  }
  @media screen and (max-width: 912px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  max-width: 500rem;
  margin-right: 30px;
  @media screen and (max-width: 1280px) {
    width: 100%;

  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  /* max-width: 500rem; */
/* width: 300px; */
    margin-right: 10px;

  }
  @media screen and (max-width: 960px) {
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    padding-left:18px;
  }
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
  @media screen and (min-width: 540px) and (max-width: 960px) {
    margin: 0;
  }
`;
export const FooterLinkItems2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  max-width: 500rem;
  @media screen and (max-width: 1280px) {
    margin-left: 70px;

  }
  @media screen and (max-width: 1024px) {
    margin-left: 70px;
    
  }
  @media screen and (max-width: 960px) {
    margin-right: 0;
  }
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
  @media screen and (min-width: 540px) and (max-width: 960px) {
    margin: 0;
  }
`;
FooterLinkItems.Col = styled.div`
width: 100%;
@media screen and (max-width: 1280px) {
    max-width: 28rem;
width: 100%;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0 auto;
    max-width: 22rem;
width: 100%;
  }
  @media screen and (max-width: 912px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  max-width: 300rem;
width: 100%;

@media screen and (max-width: 1280px) {
  display: flex;
    margin-right: 0;
    width: 100%;
    max-width: 300rem;
  }
  @media screen and (max-width: 1024px) {
  display: flex;
    margin-right: 0;
    width: 100%;
    max-width: 300rem;
    justify-content: space-between;
    align-items: center;

  }
  @media screen and (max-width: 960px) {
  display: flex;
    margin-right: 0;
    width: 100%;
    max-width: 300rem;
  }
 

  @media screen and (min-width: 540px) and (max-width: 960px) {
    display: flex;
    margin-right: 0;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

export const FooterLinkBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  display:none;
  @media screen and (max-width: 1280px) {
    display:block;
  }
  @media screen and (max-width: 960px) {
    margin: 0;
    /* padding: 10px; */
    width: 100%;
    display: flex;
  display:none;

  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  display:none;

  }
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  display:none;

  }
`;
export const Btns = styled.button`
  background: #ffbb00;
  box-shadow: 0px 6px 24px rgba(255, 185, 74, 0.12);
  border-radius: 4px;
  margin-top: 20px;
  border: none;
  width: 196px;
  height: 56px;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  transition: all 0.2s ease-in-out;
  color: #ffffff;
  :hover {
    background: #fff;
  border: solid 3px #706e77;
    color: #010606;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 1280px) {
    display:block;
  }
  @media screen and (max-width: 1024px) {
    width: 169px;
  height: 44px;
  font-weight: 400;
font-size: 15px;
line-height: 24px;
color: #FFFFFF;
  }
`;

export const FooterLinkBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1280px) {
    display:none;
  }
  @media screen and (max-width: 960px) {
    margin: 0;
    /* padding: 10px; */
    width: 100%;
    display: flex;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
    padding: 0px;
    font-size: 10px;
    width: 100%;
  }
`;
export const Btn = styled.button`
  background: #ffbb00;
  box-shadow: 0px 6px 24px rgba(255, 185, 74, 0.12);
  border-radius: 4px;
  margin-top: 20px;
  border: none;
  width: 196px;
  height: 56px;
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  transition: all 0.2s ease-in-out;
  color: #ffffff;
  @media screen and (max-width: 280px) {
    font-size: 13px;
    width:160px;
    height: 40px;
  }
  :hover {
    background: #fff;
  border: solid 3px #706e77;
    color: #010606;
    transition: 0.3s ease-out;
  }
`;
export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  width: 100%;
  max-width: 196rem;
  height: 56px;
  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1280px) {
   display: none;
  }
  @media screen and (max-width: 960px) 

   {

  }
  @media screen and (max-width: 480px) {
    font-size: 2px;
  }
`;
export const FooterLinks = styled.a`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
width: 196px;
height: 56px;
display: none;
text-align: left;
&:hover {
  color: #d2cdcc;
  transition: 0.3s ease-out;
}

@media screen and (max-width: 1280px) {
  display: block;
}
@media screen and (max-width: 1024px) {
  display: block;
}
@media screen and (max-width: 960px) 

 {

}
@media screen and (max-width: 480px) {
  font-size: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
FooterLinks.H1 = styled.div`
font-weight: 600;
font-size: 20px;
line-height: 36px;
display: none;

color: #FFFFFF;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 1280px) {
  display: block;
  font-weight: 600;
font-size: 23px;
line-height: 36px;
color: #FFFFFF;
margin: 5px 0;

}
@media screen and (max-width: 1024px) {
  display: block;
  font-weight: 600;

font-size: 20px;
line-height: 36px;
color: #FFFFFF;
max-width: 20rem;
width: 100%;
  margin: 0px 0;
  padding: 0;
}
@media screen and (max-width: 480px) {

font-size: 16px;
}
@media screen and (max-width: 280px) {
font-size: 12px;
}
`
FooterLinks.T=styled.div`
font-weight: 400;
font-size: 15px;
line-height: 30px;
text-align: left;
font-feature-settings: 'pnum' on, 'lnum' on;
display: none;
color: #CCCECE;
@media screen and (max-width: 1280px)  {
  font-weight: 400;
  margin-top: 10px;
font-size: 18px;
line-height: 20px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 1024px)  {
    font-weight: 400;
font-size: 15px;
line-height: 20px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
@media screen and (max-width: 960px)  {
    font-size: 17px;
    display: flex;
  }
  @media screen and (max-width: 762px)  {
    font-size: 14px;
display: flex;
justify-content: center;
align-items: center;
display: flex;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
display: flex;
justify-content: center;
display: flex;

  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
    display: flex;
   
  }
`
FooterLink.H1 = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  max-width: 20rem;
width: 100%;
transition: 0.3s ease-out;

  cursor: pointer;
  color: #ffffff;
  &:hover {
    color:#d2cdcc;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 1280px) {
   display: none;
  }
  @media screen and (max-width: 960px)  {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
  @media screen and (max-width: 280px) {
    font-size: 18px;
  }
`;
export const T = styled.div`
  color: #ffbb00;
`;
export const Span = styled.span`
  color: #ffbb00;
`

FooterLink.T1 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 48px;
  color: #cccece;
  transition: 0.3s ease-out;

  cursor: pointer;
  &:hover {
    color:#ffff;

    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 1280px)  {
    display: none;
  }
  @media screen and (max-width: 960px)  {
    font-size: 17px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 280px) {
    font-size: 12px;
  }
`;
FooterLink.P = styled.div`
  max-width: 50rem;
  cursor: pointer;
  font-weight: 400;
font-size: 20px;
line-height: 48px;
font-feature-settings: 'pnum' on, 'lnum' on;

color: #FFFFFF;
  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }
  @media screen and (max-width: 1280px) {
    font-size: 18px;
width: 100%;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 16px;
line-height: 42px;
width: 100%;
color: #FFFFFF;
  }
  @media screen and (max-width: 960px) {
    margin: 0 20px 0 20px;
  }
  @media screen and (max-width: 768px) {
    margin: 0 0px 0 0px;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 280px) {
    flex-direction: column;
    font-size: 13px;
  }
`;
export const FooterIcon = styled.img`
  width: 20px;
  height: 17px;
  margin-right: 12px;
`;
