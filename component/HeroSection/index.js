import React, { useState } from "react";
import { Button, Button2 } from "../ButtonElements";
import {
  HeroBg,
  HeroContainer,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBgWrapper,
  ArrowForward,
  ArrowRight,
  ImgMac,
} from "./HeroElements";


function HeroSection() {
  const [hover, setHover] = useState(false);
  const [hovers, setHovers] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const onHovers = () => {
    setHovers(!hovers);
  };
  return (
    <HeroContainer id="products">
      <HeroBg>
        <ImgBg src="Background.svg" />
      </HeroBg>
      <div className="">

      </div>
      <HeroContent>
        <HeroH1>Advanced Fleet Management Solution</HeroH1>
        <HeroP>
          Everything you need to manage your fleet. All in one place. Driver
          Safety, GPS Tracking, and ELD Compliance. The most easy-to-use ELD
          device and application
        </HeroP>
        <HeroBgWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark='true'
          >
            Get started <ArrowForward /> 
          </Button>
          <Button2
            to="signup"
            onMouseEnter={onHovers}
            onMouseLeave={onHovers}
            primary="true"
            dark='true'
          >
            Free trial <ArrowForward />  
          </Button2>
        </HeroBgWrapper>
        <ImgMac src="mac.svg"/>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
