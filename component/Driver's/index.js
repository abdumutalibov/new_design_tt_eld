import React from "react";
import {
  Column1,
  Column2,
  Column3,
  DriversContainer,
  DriversH1,
  DriversImg,
  DriversP,
  DriversWrapper,
  Heading,
  Heading1,
  HeroBg,
  Icons,
  ImgBg,
  ImgBgs,
  ImgBgs2,
  ImgPhone,
  ImgPhoneTop,
  ImgWrap,
  Line,
  PhoneIcons,
  PhoneIconsTop,
  TextWrapper,
  TextWrapper1,
  TopLine,
} from "./Driver'sElements";
import styled from "../../styles/Drivers.module.css";
const Drives = () => {
  return (
    <>
      <DriversContainer>
        <div className={styled.main}>
          <DriversImg>
            <ImgBg src="Drivers/Base (7).svg" />

          </DriversImg>
<HeroBg>
  <ImgBgs2 src="Drivers/Base480.svg" />
  <ImgBgs src="Drivers/Base (3).png" />

</HeroBg>

          <DriversH1 id="reviews">Your driver’s favorite app</DriversH1>
          <DriversP>
            TT ELD is an industry-leading electronic logging device. Our ELD
            compliance solution provides users with a wide variety of
            comprehensive features.
          </DriversP>
          <DriversWrapper>
            <ImgPhoneTop src="Drivers/ProMax.png" />

            <Column1>
              <TextWrapper1>
                <ImgWrap src="Drivers/icon.svg" />
                <Heading1>All in one mobile app</Heading1>
                <Line>
                  Give workers everything they need to be productive through
                  their day, in a single mobile app.
                </Line>
              </TextWrapper1>
              <TextWrapper1>
                <ImgWrap src="Drivers/icon.svg" />
                <Heading1>Real time Updates</Heading1>
                <Line>
                  Give drivers the right information at the right time. Notify
                  your team of new jobs, share updated schedules.
                </Line>
              </TextWrapper1>
              <TextWrapper1>
                <ImgWrap src="Drivers/icon.svg" />
                <Heading1>Inspection discretion</Heading1>
                <Line>Show only what’s legally required to be recorded</Line>
              </TextWrapper1>
            </Column1>

            <Column2>
             
              <ImgPhone src="Drivers/ProMax.png" />

              <PhoneIcons>
               
                <a  href="https://apps.apple.com/uz/app/tt-eld/id1596279099" alt=''>
                <Icons src="Drivers/button-app.png" />
                </a>
<a href="https://play.google.com/store/apps/details?id=com.tteld.app&hl=ru&gl=US" alt=''>

                <Icons src="Drivers/button-play.png" />
</a>
              </PhoneIcons>
            </Column2>

            <Column3>
              <TextWrapper>
                <ImgWrap src="Drivers/icon.svg" />
                <Heading>Mobile Workflows</Heading>
                <TopLine>
                  Automatically guide drivers through tasks to make sure they
                  complete the right tasks in the right sequence.
                </TopLine>
              </TextWrapper>
              <TextWrapper>
                <ImgWrap src="Drivers/icon.svg" />
                <Heading>Intuitive Design</Heading>
                <TopLine>
                  Minimize user error and training time with the most
                  driver-friendly app on the market.
                </TopLine>
              </TextWrapper>
              <TextWrapper>
                <ImgWrap src="Drivers/icon.svg" />
                <Heading>Telematics & Data</Heading>
                <TopLine>
                  Diagnostic tools allow you to review your truck’s key
                  parameters
                </TopLine>
                
              </TextWrapper>
            
            </Column3>
              <PhoneIconsTop>
              <Icons src="Drivers/button-app.png" />
              <Icons src="Drivers/button-play.png" />
            </PhoneIconsTop>
          </DriversWrapper>
        </div>
      </DriversContainer>
    </>
  );
};

export default Drives;
