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
  FormInputTextarea,
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

  const text =[
    <div>
          Answer: An electronic logging device (ELD) connected to the vehicle collects { <a style={{color:'red'}} href="https://store.tteld.com/">Store.tteld.com </a>} directly
        from the CMV’s engine. The data may include the status of engine power (on/off), the speed,
         how long the engine has been operating, how many miles have been covered, and other additional data. Then, 
         this data is sent to the TT ELD application that demonstrates this information and enables drivers or loggers to enter 
         some supplementary information. 
    </div>
  ]

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
                  TT ELD is a large, experienced team that works with many
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
  
                    <Form name="contact" method="POST" data-netlify="true">
                      <input type="hidden" name="form-name" value="contact" />
   
                      <FormMainCol>
                        <FormCol1>
                          <FormLabel htmlFor="name">First Name</FormLabel>
                          <FormInput
                            id="name"
                            onChange={(e) => setSubmitterName(e.target.value)}
                            name="name"
                            type="text"
                            placeholder="First Name*"
                            required
                          />
                        </FormCol1>
                        <FormCol>
                          <FormLabel htmlFor="last">
                            Last name
                          </FormLabel>
                          <FormInput
                            id="last"
                            name="last"
                            type="text"
                            placeholder=" Last name"
                            required
                          />
                        </FormCol>
                      </FormMainCol>
                      <FormLabel htmlFor="company">Company name</FormLabel>
                      <FormInput
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        required
                      />
                      {/* <DisplayInput>
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
                      </DisplayInput> */}

                      <FormMainCol2>
                        <FormCol12>
                          <FormLabel htmlFor="youremail">Your Email</FormLabel>
                          <FormInput
                            type="email"
                            name="email"
                            id="youremail"
                            placeholder="your-email@companiy.com"
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
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormInputTextarea
                        id="message"
                        name="message"
                        // type="text"
                        placeholder="Type your message here.."
                        required
                        
                        // rows="5"
                      />
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
      "Answer: Everything you need to manage your fleet. All in one place. ELD Compliance, Driver Safety, GPS Tracking. The easiest-to-use electronic logging device (ELD) and software.",
  },
  {
    question: "How TT ELD helps us ?",
    answer:
      "Answer: Thanks to its multiple beneficial functions, TT ELD will help you minimize the risks, keep your activities compliant with laws, reduce fuel wastage, optimize transportation activities, diagnose your vehicles’ conditions, improve safety and security, and reduce extra costs.    ",
  },
  {
    question: "What are the advantages of TT ELD ?",
    answer:
      "Answer: TT ELD has a durable device and easy-to-use application with plenty of beneficial functions.",
  },
  {
    question: "How does TT ELD works ?",
    answer:
      "Answer: An electronic logging device (ELD) connected to the vehicle collects data directly from the CMV’s engine. The data may include the status of engine power (on/off), the speed, how long the engine has been operating, how many miles have been covered, and other additional data. Then, this data is sent to the TT ELD application that demonstrates this information and enables drivers or loggers to enter some supplementary information.",
  },
  {
    question: "Which devices are suitable for TT ELD software ?",
    answer:
      "Answer:  Electronic logging devices like PT30 ELD and IOSiX ELD are the ones that can be connected to TT ELD software. ",
  },
  {
    question: "Can I order device from you ? ",
   
    answer:<>Answer: Of course, you can order device at our online store. Here is the link to our online store: <a target="_blank" rel="noreferrer" style={{color:'#4080c9', hover:'red'}} href="https://store.tteld.com/">Store.tteld.com </a> </>,
  },
  {
    //7
    question: "Can I pick up my order ? ",
    answer:
      "Answer: You can pick up your order from our office in 799 N Court Street, Suite 7 Medina OH 44256, USA. ",
  },
  {
    //8
    question: "How does the billing system work ? ",
    answer:
      "Answer: Our monthly fee is 105 USD. You can join our software any time - our system will calculate the amount of money you have to pay for the time left until the end of the month, and starting with the new month, you will have to pay 105 USD. If you don’t pay on time, you won’t be able to use our software. Also, we use Stripe Payments for fee transactions. ",
  },
  {
    //9
    question: "Where can I download necessary documents ? ",
    answer:
      <>Answer: You can download necessary documents and manuals from our store <a target="_blank" rel="noreferrer" style={{color:'#4080c9', hover:'red'}} href="https://store.tteld.com/">(Store.tteld.com) </a> , “Resources” page of <a target="_blank" rel="noreferrer" style={{color:'#4080c9', hover:'red'}} href="https://app.tteld.com/#/auth/companies">app.tteld.com </a> or Telegram channel named “TT ELD RESOURCES” (link: <a target="_blank" rel="noreferrer" style={{color:'#4080c9', hover:'red'}} href="https://t.me/tteld_res">https://t.me/tteld_res </a> ).
      </>,
  },
  {
    //10
    question: "Where can I watch video lessons and tutorials ?  ",
    answer:<>Answer: Of course, you can order device at our online store. Here is the link to our online store: <a target="_blank" rel="noreferrer" style={{color:'#4080c9', hover:'red'}} href="https://t.me/tteld_res">https://t.me/tteld_res </a> </>,

  },
  {
    //11
    question: "Can I create IFTA reports for drivers using my ELD ?  ",
    answer:
      "Answer: Yes. You can create IFTA reports using our TT ELD software and device.   ",
  },
  {
    //12
    question: "Will ELD location data identify street addresses ?",
    answer:
      "Answer: Yes. This is possible with our GPS tracking system. ",
  },
  {
    //13
    question: "Does TT ELD have the Split-Sleeper break feature? How can I turn on the split-sleeper berth feature for my fleet ? ",
    answer:
      "Answer: TT ELD does have Split-Sleeper break feature and it works in compliance with FMCSA standards. You can turn it on in TT ELD’s dashboard page.",
  },
  // {
  //   //14
  //   question: "Does TT ELD have the Split-Sleeper break feature? How can I turn on the split-sleeper berth feature for my fleet ? ",
  //   answer:
  //     "Answer: TT ELD does have Split-Sleeper break feature and it works in compliance with FMCSA standards. You can turn it on in TT ELD’s dashboard page.",
  // },
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
