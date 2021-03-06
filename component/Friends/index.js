import React, { useState } from "react";

import {
  Alink,
  Arrow,
  FollowUs,
  FooterCard,
  FooterCard2,
  FooterCard3,
  FooterCardImg,
  FooterCardImg2,
  FooterImg,
  FooterImgRight,
  FooterTxt,
  FriendsCard,
  FriendsContainer,
  FriendsFooter,
  FriendsH1,
  FriendsText,
  FriendsWrapper,
  IconInfo,
  IconName,
  ImgIcon,
  MaxmWhids,
  MaxWidth,
} from "./FriendsElements";

const Friends = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const onHover1 = () => {
    setHover1(!hover1);
  };
  const onHover2 = () => {
    setHover2(!hover2);
  };
  const onHover3 = () => {
    setHover3(!hover3);
  };
  const onHover4 = () => {
    setHover4(!hover4);
  };
  return (
    <FriendsContainer>
      <FriendsH1>Let’s be Friends</FriendsH1>
      <FriendsText>
        We are here to help you. You can follow us on social networks to stay up
        to date with deliveries, shippers, carriers and more.
      </FriendsText>
      <FriendsWrapper>
        <FriendsCard>
          <ImgIcon src="Friends/Icon1.svg" />
          <IconName>Instagram</IconName>
          <IconInfo>
            For our logistics life and Daily activities in office
          </IconInfo>
          <FollowUs
            to="signup"
            onMouseEnter={onHover1}
            onMouseLeave={onHover1}
            primary="true"
            dark="true"
          >
            Follow Us <Arrow src="Friends/Arrow.svg"/> 
          </FollowUs>
        </FriendsCard>
        <FriendsCard>
          <ImgIcon src="Friends/Icon2.svg" />
          <IconName>Facebook</IconName>
          <IconInfo>
            Random ideas, interesting news and forums for logistics
          </IconInfo>
          <FollowUs
            to="signup"
            onMouseEnter={onHover2}
            onMouseLeave={onHover2}
            primary="true"
            dark="true"
          >
              Follow Us <Arrow src="Friends/Arrow.svg"/>  
          </FollowUs>
        </FriendsCard>
        <FriendsCard>
          <ImgIcon src="Friends/Icon3.svg" />
          <IconName>Telegram</IconName>
          <IconInfo>News , updates and information about our program</IconInfo>
          <FollowUs
            to="signup"
            onMouseEnter={onHover3}
            onMouseLeave={onHover3}
            primary="true"
            dark="true"
          >
             {/* <a href="https://t.me/tteldsupport"></a> */}

               Follow Us <Arrow src="Friends/Arrow.svg"/> 
          </FollowUs>
        </FriendsCard>
        <FriendsCard>
          <ImgIcon src="Friends/Icon4.svg" />
          <IconName>Youtube</IconName>
          <IconInfo>
            For our video about tutorial and tips on logistics industry
          </IconInfo>
          <FollowUs
            to="signup"
            onMouseEnter={onHover4}
            onMouseLeave={onHover4}
            primary="true"
            dark="true"
          >
            Subscribe <Arrow src="Friends/Arrow.svg"/> 
          </FollowUs>
        </FriendsCard>
      </FriendsWrapper>
      <FriendsFooter>
         <MaxmWhids>
        <FooterCard>

          
          <FooterTxt>
            Manage your fleet with ease using the most comprehensive ELD
            solution on the market.
          </FooterTxt>
          <FooterImgRight>
        <a href="https://play.google.com/store/apps/details?id=com.tteld.app&hl=ru&gl=US" alt=''>
            <FooterImg src="Friends/Play.svg" />
            </a>
            <a  href="https://apps.apple.com/uz/app/tt-eld/id1596279099" alt=''>

            <FooterImg src="Friends/App.svg" />
            </a>
          </FooterImgRight>
        </FooterCard>
        <FooterCard3>Point your camera to the QR code to download</FooterCard3>
        <Alink href="https://us.tteld.com/update/tteld.apk" alt=''>
        {/* <FooterCardImg src="Friends/Phone.svg" /> */}
        <FooterCardImg src="Friends/PhoneNew.png" />
        {/* <FooterCardImg2 src="Friends/PhoneNew.png" /> */}
        </Alink>
        <FooterCard2>Point your camera to the QR code to download</FooterCard2>
</MaxmWhids>
      </FriendsFooter>
    </FriendsContainer>
  );
};

export default Friends;
