import styled from "styled-components";
export const FooterContainer = styled.div`
  background-color: #19191B;
  width: 100%;
  height: 100px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1280px) {
    font-size: 24px;
    
  }
  @media screen and (max-width: 1024px) {
    font-size: 2px;
    height: 88px;

  }
  @media screen and (max-width: 960px) {
   height:29rem;

  }
  @media screen and (max-width: 480px) {
   height:26rem;

  }
  @media screen and (max-width: 280px) {
    font-size: 16px;
  }
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 83rem;

  width: 100%;
  /* margin: 0 auto; */
  @media screen and (max-width: 1280px) {
    flex-direction:column;

  max-width: 71rem;
  }
  @media screen and (max-width: 1024px) {
    flex-direction:column;
    max-width: 55rem;

  }
  @media screen and (max-width: 960px) {
    /* display: flex; */
  
height:28rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  
height:28rem;
  }
  @media screen and (max-width: 480px) {
    display: flex;
  
height:25rem;
  }
  @media screen and (max-width: 280px) {
    display: flex;
  height:25rem;

  }
`;



export const SocialMedia = styled.section`
max-width: 90rem;
width: 100%;

 
@media screen and (max-width: 1024px) {
    flex-direction:column;

  }
  @media screen and (max-width: 960px) {
    /* display: flex;
    justify-content: space-between;
    flex-direction:column; */
  /* align-items: center; */
  }
  @media screen and (max-width: 768px) {
   
  }
  @media screen and (max-width: 480px) {
    display: flex;

  }
  @media screen and (max-width: 280px) {
    flex-direction:column;

  }
`
export const SocialMediaWrap =styled.div`
display: flex;
  align-items: center;
  justify-content: center;
max-width: 90rem;
/* padding-top: 40px; */

@media screen and (max-width: 1024px) {
   

  }
  @media screen and (max-width: 960px) {
  flex-direction:column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:30px ;
  }
  @media screen and (max-width: 768px) {
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  @media screen and (max-width: 480px) {
    display: flex;
  flex-direction:column;
  }
  @media screen and (max-width: 280px) {
    flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;

  }
`
export const SocialLogo = styled.img`
color: #fff;
justify-self: start;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
margin-right: 30px;
@media screen and (max-width: 1024px) {
width: 100px;
  }
@media screen and (max-width: 960px) {
width: 200px;
  }
@media screen and (max-width: 768px) {
width: 200px;
  }
  @media screen and (max-width: 480px) {
width: 170px;
 
 
 }
`
export const Logo = styled.div`
display: flex;
color: red;
display: flex;
align-items: center;
justify-content: center;
  margin-right:auto;
/* padding: 00px 0 40px 0; */
@media screen and (max-width: 1280px) {
padding-left:20px ;
}
@media screen and (max-width: 1024px) {
padding-right: 20px;
}
@media screen and (max-width: 960px) {
padding:0 0 20px 0;
}
`
export const WebsiteRights = styled.div`
color: #fff;
max-width: 50rem;
background-color:red;
width: 100%;
display: flex;
justify-content: space-between;
display: flex;
  align-items: center;
  justify-content: center;
@media screen and (max-width: 1024px) {

  }
  @media screen and (max-width: 960px) {
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  @media screen and (max-width: 768px) {
  flex-direction:column;
  display: flex;
  justify-content: center;
  align-items: center;
  }
  @media screen and (max-width: 480px) {
  flex-direction:column;

  }
  @media screen and (max-width: 280px) {
    flex-direction:column;

  }
`
export const SocialIcons = styled.div`
max-width: 170px;
width: 100%;

display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 20px;
@media screen and (max-width: 1024px) {
padding: 0;
margin: 0;
}
@media screen and (max-width: 960px) {

  margin-right: auto;
  padding: 20px 0 0 0;
max-width: 35rem;


  }
@media screen and (max-width: 768px) {
 margin-right: auto;
 margin-right: auto;
  padding: 20px 0 0 0;
max-width: 35rem;
display: flex;
justify-content: flex-start;
  }
@media screen and (max-width: 480px) {
 margin-right: auto;
  padding: 20px 0 0 0;
max-width: 20rem;
display: flex;
justify-content: flex-start;
  }
  @media screen and (max-width: 280px) {
    margin-right: auto;
  padding: 20px 0 0 0;
max-width: 35rem;


  }
`
export const Icon = styled.img`
width: 30px;
height: 28px;
margin-right:5px;
display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    width: 24px;
  }
@media screen and (max-width: 960px) {
width: 40px;
height: 40px;
  }
@media screen and (max-width: 768px) {
width: 40px;
height: 40px;
  }
  @media screen and (max-width: 480px) {
width: 20px;
height: 20px;

  }
  @media screen and (max-width: 280px) {
width: 20px;
height: 20px;

  }
`
export const SocialIconName = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
font-size: 12px;
}
@media screen and (max-width: 960px) {
 margin-left: 10px;
 font-size: 20px;
 }
@media screen and (max-width: 768px) {
 margin-left: 10px;
 font-size: 20px;
 }
@media screen and (max-width: 480px) {
 
  font-size: 15px;
  }
  @media screen and (max-width: 320px) {
 
 font-size: 13px;
 }
  @media screen and (max-width: 280px) {
 margin: 0;
 font-size: 11px;
 }
`
export const SocialIconLinks = styled.a`
color: #fff;
font-size: 24px;
margin-right:auto;
display: flex;
  align-items: center;
  justify-content: center;
@media screen and (max-width: 960px) {
display: flex;
align-items: center;
font-size:40px;
margin-right:auto;
padding: 20px 0 20px 0;
 }
@media screen and (max-width: 768px) {
display: flex;
align-items: center;
font-size:40px;
 }
 @media screen and (max-width: 480px) {
font-size:40px;
 }
`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 26px;
/* margin-right:auto; */
display: flex;
/* margin-bottom: 40px; */
display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-left:0px;
    margin-right: 20px;
  }
@media screen and (max-width: 960px) {
  display: flex;
align-items: center;
font-size:40px;
margin-right:auto;

 }
@media screen and (max-width: 768px) {
display: flex;
align-items: center;
font-size:40px;
margin-right: 130px;
/* margin:0; */
 }
 @media screen and (max-width: 480px) {
display: flex;
align-items: center;
font-size:26px;
margin-right: 90px;

 }
 @media screen and (max-width: 320px) {
display: flex;
align-items: center;
font-size:24px;
margin-right: 70px;

 }
 @media screen and (max-width: 280px) {
display: flex;
align-items: center;
font-size:24px;
margin-right: 50px;

 }
`