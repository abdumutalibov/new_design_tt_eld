import React from "react";
import {
  Col,
  Col2,
  Col3,
  DisplayInput,
  Form,
  FormButton,
  FormCol,
  FormCol1,
  FormCol12,
  FormCol2,
  FormContent,
  FormInput,
  FormLabel,
  FormMainCol,
  FormMainCol2,
  FormWrap,
  FrequentlyDecrement,
  FrequentlyDecrement2,
  FrequentlyLogin,
  FrequentlyP,
  FrequentlyWrapper,
  FrequntlyBox1,
  FrequntlyBox2,
  FrequntlyContainer,
  FrequntlyH1,
  FrequntlyH2,
  FrequntlyT2,
  FrequntlyText,
  IconsButtonSpan,
  IconsText,
  IconsText2,
  LoginContainer,
  LoginHr,
  LoginText,
  LoginTextButton,
  LoginTxt1,
  LoginTxt2,
  LoginTxt3,
  LoginTxt4,
} from "./FrequentlyElements";

const Frequntly = () => {
  return (
    <FrequntlyContainer id="about">
      <FrequntlyH1>Frequently asked question</FrequntlyH1>
      <FrequntlyText>
        Answers to frequently asked questions If you can`t find the answer you
        are looking for here please let us know and we will definitely answer
      </FrequntlyText>
      <FrequentlyWrapper>
        <FrequntlyBox1>
          <Col>
            <FrequntlyH2>What is TT ELD ?</FrequntlyH2>
            <FrequentlyDecrement src="Frequently/minus.svg" />
          </Col>

          <FrequentlyP>
            Everything you need to manage your fleet. All in one place. Driver
            Safety, GPS Tracking, and ELD Compliance. The most easy-to-use ELD
            device and application
          </FrequentlyP>
        </FrequntlyBox1>
        {/* <FrequentlyCard>
          <FrequentlyH3>How TT ELD helps us ?</FrequentlyH3>
          <InCrement src="Frequently/plus.svg" />
        </FrequentlyCard> */}
        <FrequntlyBox2>
          <Col2>
            <FrequntlyT2>What is TT ELD ?</FrequntlyT2>
            <FrequentlyDecrement2 src="Frequently/plus.svg" />
          </Col2>
        </FrequntlyBox2>
        <FrequntlyBox2>
          <Col2>
            <FrequntlyT2>What are the advantages of TT ELD</FrequntlyT2>
            <FrequentlyDecrement2 src="Frequently/plus.svg" />
          </Col2>
        </FrequntlyBox2>
        <FrequntlyBox2>
          <Col2>
            <FrequntlyT2>How TT ELD works</FrequntlyT2>
            <FrequentlyDecrement2 src="Frequently/plus.svg" />
          </Col2>
        </FrequntlyBox2>
        <FrequntlyBox2>
          <Col2>
            <FrequntlyT2>Why exactly TT ELD</FrequntlyT2>
            <FrequentlyDecrement2 src="Frequently/plus.svg" />
          </Col2>
        </FrequntlyBox2>
        <FrequntlyBox2>
          <Col2 id="request">
            <FrequntlyT2>Why should I buy TT ELD</FrequntlyT2>
            <FrequentlyDecrement2 src="Frequently/plus.svg" />
          </Col2>
        </FrequntlyBox2>

        <FrequentlyLogin>
          <Col3>
            <LoginText>
              <LoginTxt1>Let’s talk to you about your company</LoginTxt1>
              <LoginTxt2>
                TTELD is a large, experienced team that works with many
                companies at once. We look forward to seeing you among our
                customers.
              </LoginTxt2>
              <LoginHr />
              <LoginTxt3>
                Any problem about your booking? You can contact us on :
              </LoginTxt3>
              <LoginTxt4>+1 (833) 888 83 53 info@tteld.com</LoginTxt4>
            </LoginText>

            <LoginContainer>
              <FormWrap>
                <FormContent>
                  <Form action="#">
                    <FormMainCol>
                      <FormCol1>
                        <FormLabel htmlFor="for">First Name</FormLabel>
                        <FormInput
                          name="name"
                          type="text"
                          placeholder="Your Name"
                          required
                        />
                      </FormCol1>
                      <FormCol>
                        <FormLabel htmlFor="for">Your last name</FormLabel>
                        <FormInput
                          name="name"
                          type="text"
                          placeholder="Your last name"
                          required
                        />
                      </FormCol>
                    </FormMainCol>
                    <FormLabel htmlFor="for">Company name</FormLabel>
                    <FormInput
                      name="company"
                      type="text"
                      placeholder="Company Name"
                      required
                    />
                    <DisplayInput>
                      <FormLabel htmlFor="for">Your Email</FormLabel>
                      <FormInput
                        name="email"
                        type="email"
                        placeholder="youremail@gmail.com"
                        required
                      />
                      <FormLabel htmlFor="for">Amount of truck</FormLabel>
                      <FormInput
                        name="truckAmount"
                        type="number"
                        placeholder="Amount of trucks"
                        required
                      />
                    </DisplayInput>

                    <FormMainCol2>
                      <FormCol12>
                        <FormLabel htmlFor="for">Your Email</FormLabel>
                        <FormInput
                          name="email"
                          type="email"
                          placeholder="youremail@gmail.com"
                          required
                        />
                      </FormCol12>
                      <FormCol2>
                        <FormLabel htmlFor="for">Amount of truck</FormLabel>
                        <FormInput
                          name="truckAmount"
                          type="number"
                          placeholder="Amount of trucks"
                          required
                        />
                      </FormCol2>
                    </FormMainCol2>

                    <FormButton type="submit">Send message</FormButton>
                  </Form>
                </FormContent>
              </FormWrap>
            </LoginContainer>

            <LoginTextButton>Any problem about your booking?</LoginTextButton>
            <LoginTextButton>
              You can contact us on :
              <IconsButtonSpan>
                <IconsText src="FooterIcons/email-icon.svg"/>Info@tteld.com
              </IconsButtonSpan>
              <IconsButtonSpan>
                <IconsText2 src="FooterIcons/phone-icon.svg"/>+1 (833) 888 83 53
              </IconsButtonSpan>
            </LoginTextButton>
          </Col3>
        </FrequentlyLogin>
      </FrequentlyWrapper>
    </FrequntlyContainer>
  );
};

export default Frequntly;
