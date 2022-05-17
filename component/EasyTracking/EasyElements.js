import styled from "styled-components";

export const EasyContainer = styled.div`
  height: 980px;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1280px) {
    height: 90rem;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    height: 70rem;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    margin: 0;
  }
  @media screen and (max-width: 960px) {
    height: 78rem;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 820px) {
    height: 65rem;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    height: 100rem;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    height: 110rem;
  }
  @media screen and (max-width: 280px) {
    height: 110rem;
  }
`;
export const EasyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;

  padding: 0 24px 0 24px;
  max-width: 300rem;
  @media screen and (max-width: 1280px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
`;
export const EasyH1 = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  color: #1a2944;
  @media screen and (max-width: 1280px) {
    text-align: center;
    font-size: 49px;
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
    line-height: 60px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 56px;
    text-align: center;
    color: #1a2944;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 33px;
  }
  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 22px;
  line-height: 40px;

  }
`;
export const EasyP = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  color: #8c98a4;
  max-width: 65rem;
  margin-bottom: 70px;
  @media screen and (max-width: 1280px) {
    text-align: center;
    font-size: 22px;
    max-width: 60rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 18px;
line-height: 36px;
text-align: center;
color: #8C98A4;
max-width: 50rem;

  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    color: #8c98a4;
    max-width: 44rem;
    margin-bottom: 43px;

  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
    font-size: 14.5px;
    line-height: 30px;
    text-align: center;
    color: #8c98a4;
    max-width: 40rem;
    margin-bottom: 43px;
  }
  @media screen and (max-width: 768px) {
    font-size: 27px;
    padding: 0 10px;
    text-align: center;
  line-height: 38px;
/* margin-bottom:300px; */
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    padding: 0 10px;
    text-align: center;
  line-height: 38px;
/* margin-bottom:300px; */
  }
`;
export const EasyCard = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 20px 0 24px;
  max-width: 300rem;
  position: relative;
  @media screen and (max-width: 1280px) {
    display: flex;
  /* justify-content: space-evenly; */
  /* justify-content: center; */
  justify-content: center;
  align-items: center;
  max-width: 70rem;

  }
  @media screen and (max-width: 960px) {
    display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  align-items: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    font-size: 2rem;
    /* padding: 0 10px; */
    display: flex;
    flex-direction: column;
  }
`;
export const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1280px) {
    /* max-width: 100rem; */
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

  }

  @media screen and (max-width: 768px) {
    max-width: 40rem;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px; */


  }
  @media screen and (max-width: 480px) {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* padding: 0 30px; */
    max-width: 140rem;
    width: 100%;

  }
`;
export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1280px) {
    /* max-width: 100rem; */
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

  }
  @media screen and (max-width: 768px) {
    max-width: 40rem;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 0 30px; */


  }
  @media screen and (max-width: 480px) {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* padding: 0 30px; */
    max-width: 140rem;
    width: 100%;

  }
`;
export const TextCard1 = styled.div`
    max-width: 300px;
  max-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    max-width: 22rem;
    max-height: 290px;

margin-left: 30px;
  }
  @media screen and (max-width:960px) {
    
    display: flex;
  flex-direction: column;
    text-align: left;
  max-width: 370px;
width: 100%;
margin-right: 80px;
max-width: 22rem;

  }
  @media screen and (max-width:820px) {
    
    display: flex;
  flex-direction: column;
    text-align: left;
  max-width: 370px;
width: 100%;
margin-right: 120px;
max-width: 22rem;
  }
  @media screen and (max-width: 768px) {
    /* padding: 0 30px; */
    display: flex;
  flex-direction: column;
  align-items: flex-start;
    text-align: left;
  max-width: 370px;
width: 100%;
margin-left: 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 30px;
       display: flex;
  flex-direction: column;
  align-items: flex-start;
    text-align: left;
    max-width: 170rem;
    width: 100%;
margin-left: 60px;
  }
`;
export const TextCard2 = styled.div`
    max-width: 300px;
  max-height: 160px;
  /* margin-bottom: 40px; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    max-width: 22rem;
    max-height: 290px;

margin-right: 70px;
  }
  @media screen and (max-width:960px) {
    
    display: flex;
  flex-direction: column;
    text-align: left;
  max-width: 370px;
width: 100%;
margin-left: 100px;
max-width: 22rem;

  }
  @media screen and (max-width:820px) {
    
    display: flex;
  flex-direction: column;
    text-align: left;
  max-width: 370px;
width: 100%;
margin-left: 140px;
max-width: 22rem;
  }
  @media screen and (max-width: 768px) {
    /* padding: 0 30px; */
    display: flex;
  flex-direction: column;
  align-items: flex-start;
    text-align: left;
  max-width: 370px;
width: 100%;
margin-left: 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 30px;
       display: flex;
  flex-direction: column;
  align-items: flex-start;
    text-align: left;
    max-width: 170rem;
    width: 100%;
margin-left: 60px;
  }
`;

export const ImgWrap = styled.img`
  width: 26px;
  height: 26px;
  margin-bottom: 20px;
  @media screen and (max-width: 1280px) {
   margin-bottom: 14px;
  }
`;
export const ImgWraps = styled.img`
  width: 26px;
  height: 26px;
  margin-bottom: px;
  /* @media screen and (max-width: 1280px) {
   margin-bottom: 10px;
  } */
`;
export const Heading1 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  text-align: right;
  color: #1a2944;
  @media screen and (max-width: 1280px) {
    font-size: 24px;
    max-width: 40rem;
  width: 100%;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #1A2944;

  }  
  @media screen and (max-width: 960px) {
    font-weight: 600;
font-size: 22px;
line-height: 36px;
color: #1A2944;
  }  
  @media screen and (max-width: 820px) {
    font-weight: 600;
font-size: 19px;
line-height: 36px;
color: #1A2944;
  }  
  @media screen and (max-width: 768px) {
    font-size: 30px;
  padding-bottom:10px ;
  text-align: left;

  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: left;
  }
  @media screen and (max-width: 280px) {
    font-size: 16px;
  }
`;
export const Heading2 = styled.h1`
  font-weight: 600;
  font-size: 28px;
  line-height: 40px;
  color: #1a2944;
  @media screen and (max-width: 1280px) {
    font-size: 24px;
    max-width: 40rem;
  width: 100%;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #1A2944;

  }  
  @media screen and (max-width: 768px) {
    font-size: 30px;
  padding-bottom:10px ;
  text-align: left;

  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: left;
  }
  @media screen and (max-width: 280px) {
    font-size: 16px;
  }
`;
export const TextP = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: right;
  color: #8c98a4;
  width: 100%;
  @media screen and (max-width: 1280px) {
    font-size: 20px;
    width: 100%;
    max-width: 150rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 16px;
line-height: 32px;
text-align: right;
color: #8C98A4;
max-width: 18rem;
  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
font-size: 15px;
line-height: 32px;
color: #8C98A4;
mix-blend-mode: normal;
max-width: 17rem;
  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
font-size: 14px;
line-height: 32px;
color: #8C98A4;
mix-blend-mode: normal;
max-width: 16rem;

  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  text-align: left;
max-width: 30rem;
width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  text-align: left;

  }
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;
export const TextP2 = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #8c98a4;
  width: 100%;
  @media screen and (max-width: 1280px) {
    font-size: 20px;
    width: 100%;
    max-width: 150rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
font-size: 16px;
line-height: 32px;
color: #8C98A4;
mix-blend-mode: normal;
max-width: 16rem;

  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
font-size: 15px;
line-height: 32px;
color: #8C98A4;
mix-blend-mode: normal;
max-width: 16rem;

  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
font-size: 14px;
line-height: 32px;
color: #8C98A4;
mix-blend-mode: normal;
max-width: 15rem;

  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  text-align: left;
max-width: 30rem;
width: 100%;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  text-align: left;

  }
  @media screen and (max-width: 280px) {
    font-size: 13px;
  }
`;

export const ImgMiniMac = styled.img`
  /* width: 100%; */
  /* padding: 0 30px 0 30px; */
  display:block;
  /* position: absolute; */
  z-index: -1;
/* width:55rem; */
  @media screen and (max-width: 1280px) {
    display: none;
  }

  /* @media screen and (max-width: 1024px) {
    width: 100px;
    display:none;
  } */
  @media screen and (max-width: 960px) {
    width: 300px;
    display:none;
  }
  @media screen and (max-width: 768px) {
    width: 260px;
    margin: 40px 0 60px 0;

  }
  @media screen and (max-width: 480px) {
    width: 260px;
    padding-top: 30px;
    /* margin-top: 30px; */
  }
`;
export const ImgMiniMacTop = styled.img`
  width: 100%;
  padding: 0 30px 0 30px;
  display: none;
  @media screen and (max-width: 1280px) {
    /* display: none; */
    display: block;
    width: 900px;
margin-bottom: 32px;
  }
  @media screen and (max-width: 1024px) {
    /* display: none; */
    display: block;
    width: 760px;
margin-bottom: 32px;
  }
  @media screen and (max-width: 960px) {
    width: 660px;
  }
  @media screen and (max-width: 820px) {
    width: 610px;
  }
  @media screen and (max-width: 768px) {
    width: 460px;
    margin: 40px 0 60px 0;
    display:block;

  }
  @media screen and (max-width: 480px) {
    width: 360px;
    padding-top: 30px;
    /* margin-top: 30px; */
    display:block;

  }
  @media screen and (max-width: 320px) {
    width: 320px;
    padding-top: 30px;
    /* margin-top: 30px; */
    display:block;

  }
  @media screen and (max-width: 280px) {
    width: 280px;
    padding-top: 30px;
    /* margin-top: 30px; */
    display:block;

  }
`

