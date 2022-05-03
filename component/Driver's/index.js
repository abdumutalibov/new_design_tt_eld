import React from "react";
import {
  Border,
  Border2,
  BtnWrap,
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
  ImgBg,
  ImgPhone,
  ImgWrap,
  Line,
  Subtitle,
  TextWrapper,
  TextWrapper1,
  TopLine,
} from "./Driver'sElements";

const Drives = () => {
  return (
    <>
      <DriversContainer>
        <DriversImg>
          <ImgBg src="Base.svg" />
        </DriversImg>
        <DriversH1>Your driver’s favorite app</DriversH1>
        <DriversP>
          TTELD is an industry-leading electronic logging device. Our ELD
          compliance solution provides users with a wide variety of
          comprehensive features.
        </DriversP>
        <DriversWrapper>
          <Column1>
            <TextWrapper1>
              <ImgWrap src="icon.svg" />
              <Heading1>All in one mobile app</Heading1>
              <Line>
                Give workers everything they need to be productive through their
                day, in a single mobile app.
              </Line>
            </TextWrapper1>
            <TextWrapper1>
              <ImgWrap src="icon.svg" />
              <Heading1>Real time Updates</Heading1>
              <Line>
                Give drivers the right information at the right time. Notify
                your team of new jobs, share updated schedules.
              </Line>
            </TextWrapper1>
            <TextWrapper1>
              <ImgWrap src="icon.svg" />
              <Heading1>Inspection discretion</Heading1>
              <Line>
              Show only what’s legally required to be recorded
              </Line>
            </TextWrapper1>
          </Column1>

          <Column2>
            <ImgPhone src="phone.svg" />
          </Column2>

          <Column3>
            <TextWrapper>
              <ImgWrap src="icon.svg" />
              <Heading>Mobile Workflows</Heading>
              <TopLine>
                Automatically guide drivers through tasks to make sure they
                complete the right tasks in the right sequence.
              </TopLine>
            </TextWrapper>
            <TextWrapper>
              <ImgWrap src="icon.svg" />
              <Heading>Intuitive Design</Heading>
              <TopLine>
                Minimize user error and training time with the most
                driver-friendly app on the market.
              </TopLine>
            </TextWrapper>
            <TextWrapper>
              <ImgWrap src="icon.svg" />
              <Heading>Telematics & Data</Heading>
              <TopLine>
                Diagnostic tools allow you to review your truck’s key parameters
              </TopLine>
            </TextWrapper>
          </Column3>
        </DriversWrapper>
      </DriversContainer>
    </>
  );
};

export default Drives;
