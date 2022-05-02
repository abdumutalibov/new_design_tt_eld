import React from "react";
import {
  HelpCard,
  HelpCon,
  HelpContainer,
  HelpH1,
  HelpH2,
  HelpIcon,
  HelpP,
  HelpSpan,
  HelpTitle,
  HelpWrapper,
} from "./HelpElements";

const HelpYou = () => {
  return (
    <HelpContainer>
      <HelpH1>How can <HelpSpan>TT ELD</HelpSpan> help you?</HelpH1>
      <HelpTitle>
        Working hard for something we don’t care about is called stressed,
        working hard for something we love is called passion.
      </HelpTitle>
      <HelpWrapper>
        <HelpCard>
          <HelpIcon src="icon.svg" />
          <HelpCon>
            <HelpH2>Efficiency</HelpH2>
            <HelpP>Reduce costs across your business</HelpP>
          </HelpCon>
        </HelpCard>
        <HelpCard>
          <HelpIcon src="icon.svg" />
          <HelpCon>
            <HelpH2>Safety</HelpH2>
            <HelpP>Ensure safety wherever you operate</HelpP>
          </HelpCon>
        </HelpCard>
        <HelpCard>
          <HelpIcon src="icon.svg" />
          <HelpCon>
            <HelpH2>Sustainability</HelpH2>
            <HelpP>Prepare for transition to renewables</HelpP>
          </HelpCon>
        </HelpCard>
        <HelpCard>
          <HelpIcon src="icon.svg" />
          <HelpCon>
            <HelpH2>Compliance</HelpH2>
            <HelpP>Automate regulatory compliance</HelpP>
          </HelpCon>
        </HelpCard>
        <HelpCard>
          <HelpIcon src="icon.svg" />
          <HelpCon>
            <HelpH2>Security</HelpH2>
            <HelpP>Identify and eliminate risks</HelpP>
          </HelpCon>
        </HelpCard>
        <HelpCard>
          <HelpIcon src="icon.svg" />
          <HelpCon>
            <HelpH2>Customer Experience</HelpH2>
            <HelpP>Build customer loyalty and retention</HelpP>
          </HelpCon>
        </HelpCard>
      </HelpWrapper>
    </HelpContainer>
  );
};

export default HelpYou;
