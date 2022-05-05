import React from "react";
import {
  Col,
  ImgStar,
  RatingCard,
  RatingContainer,
  RatingH1,
  RatingP,
  RatingText,
  RatingWrapper,
  User,
  UserImg,
  UserInfo,
  UserName,
} from "./RatingElements";

const Rating = () => {
  return (
    <RatingContainer id="about">
      <RatingH1>Our Rating Among Customers</RatingH1>
      <RatingText>
        TT ELD is a company that serves many customers at the same time and we
        are glad to see you among our customers
      </RatingText>
      <RatingWrapper>
        <RatingCard>
          <ImgStar src="Rating/star.svg" />
          <RatingP>
            TT ELD is one of the most dependable, durable, and accurate systems
            in the business. It`s easy to use, affordably priced, and has been
            independently tested for ELD mandate compliance by the PIT Group
            research firm
          </RatingP>
          <User>
            <UserImg src="Rating/men1.svg" />
            <Col>
              <UserName>Darika Samak</UserName>
              <UserInfo>From Amazon.com</UserInfo>
            </Col>
          </User>
        </RatingCard>
        <RatingCard>
          <ImgStar src="Rating/star2.svg" />
          <RatingP>
            We were able to try out the device and all the back office things we
            need. Our drivers were so happy to no longer waste a ton of time
            messing with tablets. If you want a reliable, easy-to-use device, TT
            ELD is where you need to go.”
          </RatingP>
          <User>
            <UserImg src="Rating/men2.svg" />
            <Col>
              <UserName>Paromita Haque</UserName>
              <UserInfo>From Amazon.com</UserInfo>
            </Col>
          </User>
        </RatingCard>
        <RatingCard>
          <ImgStar src="Rating/star.svg" />
          <RatingP>
            We are a power only company with 227 owner operators who started
            with another ELD solution and had nothing but problems out of it.
            When we realized that we as a company could not keep this up we
            reached out to TT ELD
          </RatingP>
          <User>
            <UserImg src="Rating/men3.svg" />
            <Col>
              <UserName>Trashae Hubbard</UserName>
              <UserInfo>From Amazon.com</UserInfo>
            </Col>
          </User>
        </RatingCard>
      </RatingWrapper>
    </RatingContainer>
  );
};

export default Rating;
