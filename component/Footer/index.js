import React from "react";
import Link from 'next/link'
import {
  FooterContainer,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer id='products'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/siginin">How it works</FooterLink>
              <FooterLink to="/siginin">Testimonials</FooterLink>
              <FooterLink to="/siginin">Careers</FooterLink>
              <FooterLink to="/siginin">Investors</FooterLink>
              <FooterLink to="/siginin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videose</FooterLinkTitle>
              <FooterLink to="/siginin">How it works</FooterLink>
              <FooterLink to="/siginin">Testimonials</FooterLink>
              <FooterLink to="/siginin">Careers</FooterLink>
              <FooterLink to="/siginin">Investors</FooterLink>
              <FooterLink to="/siginin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/siginin">How it works</FooterLink>
              <FooterLink to="/siginin">Testimonials</FooterLink>
              <FooterLink to="/siginin">Careers</FooterLink>
              <FooterLink to="/siginin">Investors</FooterLink>
              <FooterLink to="/siginin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/siginin">How it works</FooterLink>
              <FooterLink to="/siginin">Testimonials</FooterLink>
              <FooterLink to="/siginin">Careers</FooterLink>
              <FooterLink to="/siginin">Investors</FooterLink>
              <FooterLink to="/siginin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <Link  href="/">
            
            <SocialLogo>dolla </SocialLogo>
            </Link>
            <WebsiteRights>dolla @ {new Date().getFullYear()} All rights reserved. </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
            
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
           
              <SocialIconLink href="/" target="_blank" aria-label="YouTube">
                <FaYoutube />
              </SocialIconLink>
           
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
            
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
