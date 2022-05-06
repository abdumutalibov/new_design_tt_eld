import React from "react";
import {
  Column1,
  Column2,
  Column3,
  EasyCard,
  EasyContainer,
  EasyH1,
  EasyP,
  EasyWrapper,
  Heading,
  Heading1,
  ImgMiniMac,
  ImgWrap,
  TextCard1,
  TextCard2,
  TextP,
  TextP2,
} from "./EasyElements";

const EasyTracking = () => {
  return (
    <EasyContainer >
      <EasyWrapper>
        <EasyH1>Easy tracking of trucks, counting times</EasyH1>
        <EasyP>
          Keep up with demand - dispatch and track your fleet with real-time
          GPS, leveraging weather and traffic data to exceed your customers
          expectations.
        </EasyP>
        <EasyCard>
          <Column1>
            <TextCard1>
              <ImgWrap src="icon.svg" />
              <Heading1>Time for the road</Heading1>
              <TextP>
                Ability to pre-calculate the time of arrival at the address
              </TextP>
            </TextCard1>
            <TextCard1>
              <ImgWrap src="icon.svg" />
              <Heading1>Trajectory of motion</Heading1>
              <TextP>
              Through the map, you can see where the driver is and track it
              </TextP>
            </TextCard1>
          </Column1>
          <Column2>
            <ImgMiniMac src="miniMac.svg" />
          </Column2>
          <Column3>
            <TextCard2>
              <ImgWrap src="icon.svg" />
              <Heading>Real-time GPS</Heading>
              <TextP2>Get more out of your equipment with real-time GPS</TextP2>
            </TextCard2>
            <TextCard2>
              <ImgWrap src="icon.svg" />
              <Heading>Remote access</Heading>
              <TextP2>Remote access to diagnostics, and insights from automated reports</TextP2>
            </TextCard2>
          </Column3>
        </EasyCard>
      </EasyWrapper>
    </EasyContainer>
  );
};

export default EasyTracking;
