import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesIconShopping,
  ServicesP,
  ServicesText,
  ServicesTextRight,
  ServicesTextRightItem,
  ServicesWrapper,
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
          <ServicesH2>IOSX ELD Device</ServicesH2>
          <ServicesP>$120.00 USD</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img2.svg" />
          <ServicesH2>PT30 ELD Device</ServicesH2>
          <ServicesP>$120.00 USD</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img3.svg" />
          <ServicesH2>PT30 - 9 Pin cable</ServicesH2>
          <ServicesP>$25.00 USD</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img4.svg" />
          <ServicesTextRight>
            {/* <ServicesH2>IOSX ELD Device</ServicesH2> */}
<ServicesTextRightItem>
  
          <ServicesP>$120.00 USD</ServicesP>
          <ServicesIconShopping src='ProductsImgs/shopping.svg'/>
</ServicesTextRightItem>

          </ServicesTextRight>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img5.svg" />
          <ServicesH2>PT30 - OBD II 16 Pin cable</ServicesH2>
          <ServicesP>$25.00 USD</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src="ProductsImgs/img6.svg" />
          <ServicesH2>Instructions and sticker</ServicesH2>
          <ServicesP>$00.00 USD</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
