import React from "react";
import {
  Btn,
  FooterColumn,
  FooterIcon,
  FooterLink,
  FooterLinkBtn,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterMainColumn,
  FooterWrap,
  ServicesCard,
  ServicesContainer,
  ServicesFooterContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesIconShopping,
  ServicesP,
  ServicesText,
  ServicesTextRight,
  ServicesTextRightItem,
  ServicesWrapper,
  T,
} from "./ServicElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Products suited to your needs</ServicesH1>
      <ServicesText>
        Our company provides customer service around the clock, now you can
        easily buy the equipment you need in our store
      </ServicesText>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img1.svg" />
          <ServicesTextRight>
            <ServicesH2>IOSX ELD Device</ServicesH2>
            <ServicesTextRightItem>
              <ServicesP>$120.00 USD</ServicesP>
              <ServicesIconShopping src="ProductsImgs/shopping.svg" />
            </ServicesTextRightItem>
          </ServicesTextRight>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img2.svg" />
          <ServicesTextRight>
            <ServicesH2>PT30 ELD Device</ServicesH2>
            <ServicesTextRightItem>
              <ServicesP>$120.00 USD</ServicesP>
              <ServicesIconShopping src="ProductsImgs/shopping.svg" />
            </ServicesTextRightItem>
          </ServicesTextRight>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img3.svg" />
          <ServicesTextRight>
            <ServicesH2>PT30 - 9 Pin cable</ServicesH2>
            <ServicesTextRightItem>
              <ServicesP>$25.00 USD</ServicesP>
              <ServicesIconShopping src="ProductsImgs/shopping.svg" />
            </ServicesTextRightItem>
          </ServicesTextRight>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img4.svg" />
          <ServicesTextRight>
            <ServicesH2>Instructions and sticker</ServicesH2>
            <ServicesTextRightItem>
              <ServicesP>$25.00 USD</ServicesP>
              <ServicesIconShopping src="ProductsImgs/shopping.svg" />
            </ServicesTextRightItem>
          </ServicesTextRight>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img5.svg" />
          <ServicesTextRight>
            <ServicesH2>PT30 - OBD II 16 Pin cable</ServicesH2>
            <ServicesTextRightItem>
              <ServicesP>$120.00 USD</ServicesP>
              <ServicesIconShopping src="ProductsImgs/shopping.svg" />
            </ServicesTextRightItem>
          </ServicesTextRight>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img6.svg" />
          <ServicesTextRight>
            <ServicesH2>Instructions and sticker</ServicesH2>
            <ServicesTextRightItem>
              <ServicesP>$00.00 USD</ServicesP>
              <ServicesIconShopping src="ProductsImgs/shopping.svg" />
            </ServicesTextRightItem>
          </ServicesTextRight>
        </ServicesCard>
      </ServicesWrapper>
      <ServicesFooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterMainColumn>

              <FooterLinkItems.Col >
                <FooterLink.T1 to="/siginin">
                  ELD device sold separately.
                </FooterLink.T1>
                <FooterLink.H1 to="/siginin">
                  ELD is easy to operate.
                </FooterLink.H1>
                <FooterLink.H1 to="/siginin">
                  and feel comfortable
                </FooterLink.H1>
                <FooterLink.H1  to="/siginin" ><T>$105/mo.</T></FooterLink.H1>
              </FooterLinkItems.Col>
              <FooterColumn>
                <FooterLinkItems>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    ELD
                  </FooterLink.P>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    Fleet Management
                  </FooterLink.P>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    Log Annotiation
                  </FooterLink.P>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    Tracking History
                  </FooterLink.P>
                </FooterLinkItems>
                <FooterLinkItems>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    Driver Alarm
                  </FooterLink.P>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    GPS Tracking
                  </FooterLink.P>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    IFTA Reports
                  </FooterLink.P>
                  <FooterLink.P to="/siginin">
                    <FooterIcon src="ProductsImgs/Vector.svg" />
                    Chat
                  </FooterLink.P>
                </FooterLinkItems>
              </FooterColumn>
              </FooterMainColumn>


              <FooterLinkBtn>
                <Btn to="/siginin">Terms of Service</Btn>
              </FooterLinkBtn>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </ServicesFooterContainer>
    </ServicesContainer>
  );
};

export default Services;
