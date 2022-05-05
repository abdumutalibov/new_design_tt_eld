import styled from "styled-components";
export const FooterContainer = styled.div`
  background-color: #101522;
  width: 100%;
  height: 130px;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
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
  max-width: 90rem;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    flex-direction:column;

  }
  @media screen and (max-width: 960px) {
    display: flex;
  
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
justify-content: center;
align-items: center;
max-width: 90rem;
padding-top: 40px;

@media screen and (max-width: 1024px) {
   

  }
  @media screen and (max-width: 960px) {
  flex-direction:column;
  display: flex;
  justify-content: center;
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
align-content: center;
justify-content: center;
  margin-right:auto;
padding: 00px 0 40px 0;
`
export const WebsiteRights = styled.div`
color: #fff;
max-width: 50rem;
background-color:red;
width: 100%;
display: flex;
justify-content: space-between;
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
display: flex;
justify-content: space-between;
align-items: center;
max-width: 200px;
width: 100%;
@media screen and (max-width: 960px) {
 margin-right: auto;
  }
@media screen and (max-width: 768px) {
 margin-right: auto;
  }
@media screen and (max-width: 480px) {
 margin-right: auto;
  }
  @media screen and (max-width: 280px) {
    margin-right: auto;


  }
`
export const Icon = styled.img`
width: 30px;
height: 28px;
margin-right:5px;
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
`
export const SocialIconName = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #FFFFFF;
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
`
export const SocialIconLinks = styled.a`
color: #fff;
font-size: 24px;
margin-right:auto;
display: flex;
margin-bottom: 40px;
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
 }
 @media screen and (max-width: 480px) {
font-size:40px;
 }
`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
margin-right:auto;
display: flex;
margin-bottom: 40px;
@media screen and (max-width: 960px) {
display: flex;
align-items: center;
font-size:40px;
margin-right:auto;
margin-right: 120px;

 }
@media screen and (max-width: 768px) {
display: flex;
align-items: center;
font-size:40px;
margin-right: 80px;

 }
 @media screen and (max-width: 480px) {
display: flex;
align-items: center;
font-size:24px;
margin-right: 80px;

 }
`