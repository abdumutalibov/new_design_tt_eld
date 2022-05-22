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
    height: 80rem;
  }
  @media screen and (max-width: 768px) {
    height: 110rem;
  }

  @media screen and (max-width: 480px) {
    height: 100rem;
  }
  @media screen and (max-width: 280px) {
    height: 120rem;
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
    max-width: 55rem;
  grid-gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 835px;
    width: 100%;
  grid-gap: 20px;
  margin-bottom: 128px;

  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 49rem;


  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 44rem;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 20px;
    margin-bottom: 120px;
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 5px;
  }
  @media screen and (max-width: 280px) {
    grid-template-columns: 1fr ;
    padding: 0 5px;
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
  
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  box-shadow: 2px 4px 24px rgba(151, 151, 151, 0.12);
  transition: all 0.2s ease-in-out;
  max-width: 419px;
  max-height: 449px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 1280px) {
    padding: 25px;

  }
  @media screen and (max-width: 1024px) {
    padding: 25px;

  }
  @media screen and (max-width: 960px) {
    max-width: 380px;
    max-height: 274px;
    padding: 20px;

  }
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
  @media screen and (max-width: 280px) {
    padding: 10px;
  }
`;
export const ServicesIcon = styled.img`
  width: 355px;
  height: 274px;
  margin-bottom: 10px;
  @media screen and (max-width: 1280px) {
   
    width: 230px;
    height: 180px;
  }
  @media screen and (max-width: 1024px) {
    width: 185px;
    height: 184px;
  }
  @media screen and (max-width: 960px) {
    width: 195px;
    /* height: 424px; */
  }
  @media screen and (max-width: 820px) {
    width: 165px;
    height: 124px;
  }
  @media screen and (max-width: 480px) {
    width: 140px;
    height: 108px;
  }
  @media screen and (max-width: 320px) {
    width: 120px;
    /* height: 108px; */
  }
`;
export const ServicesIconShopping = styled.img`
  height: 23px;
  @media screen and (max-width: 1280px) {
    height: 16px;


  }
  @media screen and (max-width: 1024px) {
    height: 18px;
  }
  @media screen and (max-width: 960px) {
height:16px;
  }
  @media screen and (max-width: 820px) {
    height:14px;

  }
  @media screen and (max-width: 480px) {
    height:10px;

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
font-size: 40px;
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
@media screen and (max-width: 960px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 20px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
    font-size: 32px;
    line-height:20px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 0px;
    margin-bottom: 20px;
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
font-size: 24px;
line-height: 36px;
margin: 0;
padding: 0;
max-width: 20rem;
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
font-size: 18px;
line-height: 36px;
text-align: center;
color: #8C98A4;
max-width: 41rem;
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
@media screen and (max-width: 960px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    color: #8c98a4;
    max-width: 38rem;
    margin-bottom: 43px;

  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8c98a4;
    max-width: 40rem;
    margin-bottom: 43px;
    max-width: 33rem;

  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 13px;
    max-width: 30rem;
    line-height: 27px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 12px;
line-height: 22px;
    padding: 0 10px;
max-width: 20rem;

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
font-size: 17.1628px;
line-height: 32px;
color: #1A2944;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
font-size: 17px;
line-height: 32px;
color: #1A2944;
  }
  @media screen and (max-width: 960px) {
    font-weight: 700;
font-size: 15.5px;
line-height: 32px;
color: #1A2944;
margin: 0;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
font-size: 14px;
line-height: 32px;
color: #1A2944;
  }
  @media screen and (max-width: 480px) {
    font-weight: 600;
font-size: 11px;
line-height: 19px;
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
font-size: 15.8425px;
line-height: 24px;
color: #5A7184;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 15.8425px;
line-height: 24px;
color: #5A7184;
  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
font-size: 15.1px;
line-height: 24px;
color: #5A7184;
  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
font-size: 13.5px;
line-height: 24px;
color: #5A7184;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 9.48063px;
line-height: 14px;
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
  max-width: 55rem;
  padding: 0;
margin: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  max-width: 837px;
  padding: 0;
margin: 0;

  }
  @media screen and (max-width: 960px) {
    width: 100%;
  max-width: 49rem;
  padding: 0;
margin: 0;

  }
  @media screen and (max-width: 820px) {
    width: 100%;
  max-width: 44rem;
  padding: 0;
margin: 0;

  }
  @media screen and (max-width: 768px) {
    width: 100%;
  max-width: 47.5rem;
  padding: 0 0px;
margin: 0 0px 0 0px;
background: none;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    max-width: 30.3rem;   
    padding: 0;
margin: 0;
background: none;

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
  @media screen and (max-width: 1280px) {
  padding: 32px 0px 32px 44px;
    
  }
  @media screen and (max-width: 1024px) {
  padding: 32px 0px 32px 44px;
    
  }
  @media screen and (max-width: 960px) {
  padding: 30px 40px 32px 40px;
  }
  @media screen and (max-width: 820px) {
  padding: 32px 25px 32px 40px;
    
  }
  @media screen and (max-width: 760px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
  padding: 26px 10px 26px 10px;
  background: none;


  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  padding: 26px 10px 26px 10px;
  
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
  @media screen and (max-width: 960px) {
    flex-direction: column;
    display: flex;
    margin-right: 0;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
    padding: 30px 70px;
margin: 0 10px;
max-width: 60rem;
 background: #2B2D31;

  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-right: 0;
    padding: 30px 10px;
    margin: 0 7px;

max-width: 60rem;

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
    display: flex;
    width: 100%;
  max-width: 300rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
margin: 0;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0;
margin: 0;
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
    margin-right: 10px;
  }
  @media screen and (max-width: 820px) {
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    /* margin-left: 170px; */
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    /* text-align: end; */
    max-width: 130px;
    margin: 0;

  }
  @media screen and (max-width: 820px) {
    margin-right: 10px;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
margin: 0;
    width: 100%;
  }
  @media screen and (max-width: 480px) {
    padding: 0;
margin: 0;
    width: 100%;
    /* text-align: right; */
    max-width: 7rem;
  }
  @media screen and (max-width: 320px) {
    padding: 0;
margin: 0;
    width: 100%;
    /* text-align: right; */
    max-width: 7rem;
  }
  @media screen and (max-width: 280px) {
    padding: 0;
margin: 0;
    width: 100%;
    max-width: 6rem;
  }
`;
FooterLinkItems.Col = styled.div`
width: 100%;
max-width: 26rem;

@media screen and (max-width: 1280px) {
    max-width: 24rem;
width: 100%;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0 auto;
    max-width: 22rem;
width: 100%;
  }
  @media screen and (max-width: 960px) {
    margin-left: 0 auto;
    max-width: 20rem;
width: 100%;
  }
  @media screen and (max-width: 820px) {
    margin-left: 0 auto;
    padding: 0;
margin: 0;
width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
 margin-top: 30px;
 
  }
  @media screen and (max-width: 480px) {
 margin-top: 30px;
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
align-items: flex-start;
justify-content: start;
    margin-right: 0 auto;
  }
  @media screen and (max-width: 820px) {
    display: flex;
align-items: flex-start;
justify-content: start;
    width: 100%;
    display: flex;

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
    width: 169px;
  height: 44px;
  font-weight: 400;
font-size: 15px;
line-height: 24px;
color: #FFFFFF;
  }
  @media screen and (max-width: 1024px) {
    width: 169px;
  height: 44px;
  font-weight: 400;
font-size: 15px;
line-height: 24px;
color: #FFFFFF;
  }
  @media screen and (max-width: 960px) {
    width: 150px;
  height: 44px;
  font-weight: 400;
font-size: 15px;
line-height: 24px;
color: #FFFFFF;
  }
  @media screen and (max-width: 820px) {
    width: 130px;
  height: 44px;
  font-weight: 400;
font-size: 13px;
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
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    display: flex;
  justify-content: center;
  align-items: center;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    display: block;
    display: flex;
  justify-content: center;
  align-items: center;
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
  @media screen and (max-width: 768px) {
    padding: 0px;
    /* width: 50%; */
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    width: 148px;
    font-size: 15px;
  height: 44px;

  }
  @media screen and (max-width: 480px) {
    padding: 0px;
    /* width: 50%; */
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    width: 148px;
    font-size: 15px;
  height: 44px;

  }
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
  @media screen and (max-width: 960px) {

  }
  @media screen and (max-width: 820px) {
margin-bottom: 1px;
}
@media screen and (max-width: 768px) {
    font-size: 2px;
    background-color: red;
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
@media screen and (max-width: 768px) {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
}
@media screen and (max-width: 480px) {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
}
`;
export const FooterLinks2 = styled.a`
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
  font-weight: 400;
font-size: 13px;
line-height: 10px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 820px)  {
  font-weight: 400;
font-size: 13px;
line-height: 10px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
@media screen and (max-width: 768px) {
  font-size: 14px;
display: flex;
justify-content: center;
color: #CCCECE;
  width: 100%;
 
}
@media screen and (max-width: 480px) {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
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
font-size: 20px;
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
@media screen and (max-width: 960px) {
  display: block;
  font-weight: 600;

font-size: 17px;
line-height: 32px;
color: #FFFFFF;
max-width: 20rem;
width: 100%;
  margin: 0px 0;
  padding: 0;
}
@media screen and (max-width: 820px) {
  display: block;
  font-weight: 600;

font-size: 16px;
line-height: 30px;
color: #FFFFFF;
max-width: 20rem;
width: 100%;
  margin: 0px 0;
  padding: 0;
}
@media screen and (max-width: 768px) {
  display: none;
font-weight: 600;
font-size: 20px;
line-height: 36px;
margin: 0;
padding: 0;
}
@media screen and (max-width: 480px) {
  display: none;
font-weight: 600;
font-size: 20px;
line-height: 36px;
margin: 0;
padding: 0;
}
@media screen and (max-width: 280px) {
  font-weight: 600;
font-size: 20px;
line-height: 36px;
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
  font-weight: 400;
font-size: 13px;
line-height: 10px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 820px)  {
  font-weight: 400;
font-size: 13px;
line-height: 10px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
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
color: #CCCECE;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
    display: flex;
   
  }
`
export const T2 =styled.div`
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
  font-weight: 400;
font-size: 13px;
line-height: 10px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 820px)  {
  font-weight: 400;
font-size: 13px;
line-height: 10px;
text-align: center;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #CCCECE;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
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
  @media screen and (max-width: 768px) {
    font-size: 23px;
    background-color: red;
  }
  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
  @media screen and (max-width: 280px) {
    font-size: 18px;
  }
`;
export const Text2 = styled.div`
  cursor: pointer;
  color: #ffffff;
  display: none;
  @media screen and (max-width: 768px) {
    font-weight: 600;
font-size: 20px;
line-height: 36px;
margin: 0;
padding: 0;
text-align: center;
display: block;
}
@media screen and (max-width: 480px) {
font-weight: 600;
font-size: 20px;
line-height: 36px;
margin: 0;
padding: 0;
text-align: center;
display: block;
}
@media screen and (max-width: 320px) {
font-weight: 600;
font-size: 18px;
line-height: 36px;
margin: 0;
padding: 0;
text-align: center;
display: block;
}
@media screen and (max-width: 280px) {
  font-weight: 600;
font-size: 16px;
line-height: 27px;
}
` 

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
  @media screen and (max-width: 820px)  {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
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
    font-weight: 400;
font-size: 16px;
line-height: 42px;
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
    font-weight: 400;
font-size: 16px;
line-height: 42px;
width: 100%;
color: #FFFFFF;

  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
font-size: 13px;
line-height: 37px;
width: 100%;
color: #FFFFFF;
margin-bottom: 0px;
margin: 0;
padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
font-size: 14px;
line-height: 36px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
font-size: 14px;
line-height: 36px;
margin-right: 5px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
font-size: 11px;
line-height: 36px;
margin-right: 0px;

  }
  @media screen and (max-width: 280px) {
    flex-direction: column;
    font-size: 11px;
  }
`;
export const FooterIcon = styled.img`
  width: 20px;
  height: 17px;
  margin-right: 12px;
  @media screen and (max-width: 820px) {
    width: 18px;
  height: 17px;
  margin-right: 12px;
  }
  @media screen and (max-width: 480px) {
    width: 15px;
  }
`;
