import React, { useState } from "react";

import {
  Accordion,
  Cl,
  Col,
  Col2,
  Col3,
  Content,
  DisplayInput,
  Dropwn,
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
  Item,
  LoginContainer,
  LoginHr,
  LoginText,
  LoginTextButton,
  LoginTextButtons,
  LoginTxt1,
  LoginTxt2,
  LoginTxt3,
  LoginTxt4,
  MainLog,
  MaxWidth,
  Show,
  Title,
  TitleH2,
  TitleSpan,
  Wrapper,
} from "./FrequentlyElements";

const Frequntly = () => {
  const [selected, setSelected] = useState(null);
  const [submitterName, setSubmitterName] = useState("");

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <FrequntlyContainer id="about">
      <FrequntlyH1>Frequently asked question</FrequntlyH1>
      <FrequntlyText>
        Answers to frequently asked questions If you can`t find the answer you
        are looking for here please let us know and we will definitely answer
      </FrequntlyText>
      <FrequentlyWrapper>
        <MaxWidth>
          {data.map((item, i) => (
            <FrequntlyBox2 className={selected === i ? "border" : "border1"}>
              <Col onClick={() => toggle(i)}>
                <FrequntlyT2 className={selected === i ? "color" : "color1"}>
                  {item.question}
                </FrequntlyT2>
                <TitleSpan>
                  {selected === i ? (
                    <FrequentlyDecrement src="Frequently/minus.svg" />
                  ) : (
                    <FrequentlyDecrement2 src="Frequently/plus.svg" />
                  )}
                </TitleSpan>
              </Col>
              <FrequentlyP
                className={selected === i ? "content show" : "content"}
              >
                {item.answer}
              </FrequentlyP>
            </FrequntlyBox2>
          ))}
        </MaxWidth>
        <MainLog id="request">
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
                <LoginTxt4>+1 (833) 888 83 53 </LoginTxt4>
                <LoginTxt4>info@tteld.com </LoginTxt4>
              </LoginText>

              <LoginContainer>
                <FormWrap>
                  <FormContent>
                    {/* <form name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">Your Name:</label> <br />
        <input
          type="text"
          name="name"
          id="yourname"
          onChange={(e) => setSubmitterName(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form> */}
                    <Form name="contact" method="POST" data-netlify="true">
                      <input type="hidden" name="form-name" value="contact" />
                      {/* <p>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">Your Name:</label> <br />
        <input
          type="text"
          name="name"
          id="yourname"
          onChange={(e) => setSubmitterName(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="youremail">Your Email:</label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">Message:</label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p> */}
                      <FormMainCol>
                        <FormCol1>
                          <FormLabel htmlFor="name">First Name</FormLabel>
                          <FormInput
                            id="name"
                            onChange={(e) => setSubmitterName(e.target.value)}
                            name="name"
                            type="text"
                            placeholder="Your Name*"
                            required
                          />
                        </FormCol1>
                        <FormCol>
                          <FormLabel htmlFor="last">
                            Your last name
                          </FormLabel>
                          <FormInput
                            id="last"
                            name="last"
                            type="text"
                            placeholder="Your last name"
                            required
                          />
                        </FormCol>
                      </FormMainCol>
                      <FormLabel htmlFor="company">Company name</FormLabel>
                      <FormInput
                        id="company"
                        name="company"
                        type="text"
                        placeholder="your company name"
                        required
                      />
                      <DisplayInput>
                        <FormLabel htmlFor="youremail">Your Email</FormLabel>
                        <FormInput
                          type="email"
                          name="email"
                          id="youremail"
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

                      {/* <FormMainCol2>
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
                      </FormMainCol2> */}
                      {/* <input type="submit" value="Send Message" /> */}
                      {/* <p>
        <button type="submit">Send</button>
      </p> */}
                      <FormButton type="submit">Send message</FormButton>
                    </Form>
                  </FormContent>
                </FormWrap>
              </LoginContainer>

              <LoginTextButton primary>
                Any problem about your booking?
              </LoginTextButton>
              <LoginTextButton>
                You can contact us on :
                <Cl>
                  <IconsButtonSpan>
                    <IconsText src="FooterIcons/email-icon.svg" />
                    Info@tteld.com
                  </IconsButtonSpan>
                  <IconsButtonSpan>
                    <IconsText2 src="FooterIcons/phone-icon.svg" />
                    +1 (833) 888 83 53
                  </IconsButtonSpan>
                </Cl>
              </LoginTextButton>
            </Col3>
          </FrequentlyLogin>
        </MainLog>
      </FrequentlyWrapper>
    </FrequntlyContainer>
  );
};

export default Frequntly;

const data = [
  {
    question: "What is TT ELD ?",
    answer:
      "Everything you need to manage your fleet. All in one place. Driver Safety, GPS Tracking, and ELD Compliance. The most easy-to-use ELDdevice and application",
  },
  {
    question: "How TT ELD helps us",
    answer:
      "Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.",
  },
  {
    question: "What are the advantages of TT ELD",
    answer:
      "Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.",
  },
  {
    question: "How TT ELD works",
    answer:
      "Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.",
  },
  {
    question: "Why exactly TT ELD",
    answer:
      "Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.",
  },
  {
    question: "Why should I buy TT ELD",
    answer:
      "Fast Refresh will perform a full reload when you edit a file that is imported by modules outside of the React rendering tree. It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh. Fast Refresh requires at least one parent function component in your React tree.",
  },
];

{
  /* <FrequntlyBox1>
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
        </FrequntlyBox2> */
}
