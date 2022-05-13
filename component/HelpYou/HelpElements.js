import styled from "styled-components";

export const HelpContainer = styled.div`
  /* margin-top: 190px; */
  padding:10rem 0 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1280px) {
  padding:5rem 0 5px 0;
  }
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 768px) {
    height: 900px;
    margin: 0;
    padding: 0;
  }

  @media screen and (max-width: 480px) {
    height: 1400px;
    padding: 0;
  }
`;

export const HelpWrapper = styled.div`
   max-width: 86rem;
width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
align-items: center;
grid-gap: 26px;
padding: 0 24px;
@media screen and (max-width:1280px){
    max-width: 80rem;   
    margin: 0 auto;
    grid-template-columns: 1fr 1fr ;
padding: 0 94px;

}
@media screen and (max-width:1024px){
    grid-template-columns: 1fr 1fr;
  max-width: 52.2rem;   
  padding: 0px;

}

@media screen and (max-width:768px){
    grid-template-columns:1fr 1fr;
    padding: 0 20px;
}
@media screen and (max-width:480px){
    grid-template-columns:1fr ;
    
}
@media screen and (max-width:320px){
    font-size:15px
}
`;

export const HelpCard = styled.div`
background: #fff;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
max-width: 419px;
max-height: 104px;
padding: 20px;
/* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
border: 2px solid #EAE9F2;
border-radius: 8px;
transition: all 0.2s ease-in-out;
border: 2px solid #EAE9F2;
border-radius: 8px;

&:hover{
    transform: scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}
@media screen and (max-width:1280px){
    max-width: 40rem;   
    
}
@media screen and (max-width:1024px){
    /* max-width: 40rem;    */
    
    
}
`
export const HelpIcon = styled.img`
height: 30px;
width: 30px;
margin-bottom: 10px;
@media screen and (max-width:1280px){
 width: 30px;
 height: 30px;
}
`
export const HelpCon = styled.div`
display: flex;
flex-direction:column;
/* background-color:red; */
margin-left: 10px;
padding-left:10px ;
`
export const HelpH1 =styled.h1`
margin-bottom:20px;
font-weight: 700;
font-size: 56px;
@media screen and (max-width:1280px){
    font-weight: 700;
font-size: 50px;
line-height: 56px;
text-align: center;
color: #1A2944;
}
@media screen and (max-width:1024px){
    font-weight: 700;
font-size: 40px;
line-height: 56px;
text-align: center;
color: #1A2944;
}
@media screen and (max-width:960px){

}
@media screen and (max-width:768px){
    /* font-size: 2rem; */
    text-align:center;
    padding:0 24px;
}
@media screen and (max-width:480px){
    font-size: 2rem;
    padding:0 10px;
    text-align:center;

}
`
export const HelpSpan =styled.span`
color: #FAAD13;
`
export const HelpTitle = styled.p`
/* font-size: 1rem; */
text-align: center;
max-width: 880px;
font-weight: 400;
font-size: 24px;
line-height: 48px;
color: #8C98A4;
margin-bottom: 60px;
@media screen and (max-width:1280px){
    font-weight: 400;
font-size: 22px;
line-height: 46px;
text-align: center;
color: #8C98A4;
/* max-width: 40rem; */
}
@media screen and (max-width:1024px){
    font-weight: 400;
font-size: 18px;
line-height: 36px;
text-align: center;
color: #8C98A4;
max-width: 40rem;
}
@media screen and (max-width:960){
}
@media screen and (max-width:768px){
    /* font-size: 2rem; */
    text-align:center;
    padding:0 24px;
}
`
export const HelpH2 = styled.h2`
font-weight: 600;
font-size: 20px;
line-height: 32px;
color: #1F1911;
@media screen and (max-width:1280px){
    font-weight: 600;
font-size: 20px;
line-height: 32px;
color: #1F1911;
}
@media screen and (max-width:960px){
    /* font-size:15px */
}
@media screen and (max-width:320px){
    font-size:15px
}
`

export const HelpP = styled.p`
font-size: 1rem;
/* font-weight: 700; */
margin-bottom: 10px;
@media screen and (max-width:768px){
    font-size:13px
}
@media screen and (max-width:320px){
    font-size:13px
}
`