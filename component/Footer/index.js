import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  Logo,
  SocialIconName,
  Icon,
  SocialIconLinks,
} from "./FooterElements";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Logo>
              <SocialLogo src="FooterIcons/tt_eld2.svg" />
            </Logo>
            <SocialIconLinks href="/" target="_blank" aria-label="Facebook">
              <Icon src="FooterIcons/email-icon.svg" />
              <SocialIconName>Info@tteld.com</SocialIconName>
            </SocialIconLinks>

            <SocialIconLinks href="/" target="_blank" aria-label="Instagram">
              <Icon src="FooterIcons/phone-icon.svg" />
              <SocialIconName>+1 (833) 888 83 53</SocialIconName>
            </SocialIconLinks>
            <SocialIconLinks href="/" target="_blank" aria-label="YouTube">
              <Icon src="FooterIcons/location-icon.svg" />
              <SocialIconName>
                799 N Court Street , Medina OH 44256
              </SocialIconName>
            </SocialIconLinks>

             <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaTelegramPlane />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons> 
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
