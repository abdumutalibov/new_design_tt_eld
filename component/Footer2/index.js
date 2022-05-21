import React from "react";
import {
  Col,
  FaIcons,
  FooterContainer,
  Icon,
  Logo,
  Span,
  Test,
} from "./Footer2Element";
import { FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { SP } from "next/dist/shared/lib/utils";

const Footer2 = () => {
  return (
    <FooterContainer>
      <Col>
        
        <Span>
          <Icon src="FooterIcons/email-icon.svg" />
          Info@tteld.com
        </Span>
        <Span phone>
        
          <Icon  src="FooterIcons/phone-icon.svg" />
          +1 (833) 888 83 53
        </Span>
      </Col>
      <Col second>
        <Span second>
          <Icon src="FooterIcons/location-icon.svg" />
          799 N Court Street , Medina OH 44256
        </Span>
      </Col>
      <Col last>
        <Span >

     
        <Logo src="FooterIcons/tt_eld2.svg" />
         </Span>
         <Span>
               <Test>

        <FaIcons>
        <FaTelegramPlane />
        </FaIcons>
        <FaIcons>
          <FaYoutube />
        </FaIcons>
        <FaIcons>
        <FaInstagram />
        </FaIcons>
        </Test>
         </Span>
      
  

      </Col>
    </FooterContainer>
  );
};

export default Footer2;
