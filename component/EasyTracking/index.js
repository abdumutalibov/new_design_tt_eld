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
  Heading2,
  ImgMiniMac,
  ImgMiniMacTop,
  ImgWrap,
  ImgWraps,
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
        {/* <ImgMiniMacTop src="miniMac.svg" /> */}
        <ImgMiniMacTop src="Easy/miniMac.png" />

        <EasyCard>
          <Column1>
            <TextCard1>
              <ImgWrap src="Easy/icon.svg" />
              <Heading1>Time for the road</Heading1>
              <TextP>
                Ability to pre-calculate the time of arrival at the address
              </TextP>
            </TextCard1>
            <TextCard1>
            <ImgWrap src="Easy/icon.svg" />

              <Heading1>Trajectory of motion</Heading1>
              <TextP>
              Through the map, you can see where the driver is and track it
              </TextP>
            </TextCard1>
          </Column1>
         
            <ImgMiniMac src="miniMac.svg" />
         
          <Column2>
            <TextCard2>
              <ImgWrap src="Easy/icon.svg" />
              <Heading2>Real-time GPS</Heading2>
              <TextP2>
              Get more out of your equipment with real-time GPS
              </TextP2>
            </TextCard2>
            <TextCard2>
            <ImgWrap src="Easy/icon.svg" />

              <Heading2>Remote access</Heading2>
              <TextP2>
              Remote access to diagnostics, and insights from automated reports
              </TextP2>
            </TextCard2>
          </Column2>
        </EasyCard>
      </EasyWrapper>
    </EasyContainer>
  );
};

export default EasyTracking;
