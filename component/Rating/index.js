import React from "react";
import { useState } from "react";

import Slider from "react-slick";
import {
  ArrowNext,
  ArrowPrev,
  Col,
  Cont,
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
import Review from "../Review/review";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Review1280 from "../Review1280/review";
import Review480 from "../Review480/review";

const Rating = () => {

  const NextArrow = ({ onClick }) => {
    return (
      <ArrowNext onClick={onClick}>
        <FaArrowRight />
      </ArrowNext>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <ArrowPrev onClick={onClick}>
        <FaArrowLeft />
      </ArrowPrev>
    );
  };
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
   nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    grabCursor:true,
    // dots: true,
    beforeChange:(current, next)=> setImageIndex(next)
  };
  return (
    <RatingContainer id="pricing">
      <RatingH1>Our Rating Among Customers</RatingH1>
      <RatingText>
        TT ELD is a company that serves many customers at the same time and we
        are glad to see you among our customers
      </RatingText>
      <Cont>

  
      <Slider {...settings}>
        {userRows.map((item ,id ) => (
          <RatingWrapper>

          <div className="margin">
          <div
            key={id}
            className={id === imageIndex ? "slide activeSlide" : "slide"}
          >
            <RatingCard>
          <ImgStar src={item.imgStar} />
          <RatingP>
         {item.title}
          </RatingP>
              
<User>
<UserImg src={item.avatar}/>
            <Col>
              <UserName>{item.username}</UserName>
              <UserInfo>From Amazon.com</UserInfo>
            </Col>
</User>
              </RatingCard>
              
          </div>
          </div>
          </RatingWrapper>
        ))}
      </Slider> 
         </Cont>
     <Review1280/>
      <Review/>
      <Review480/>
    </RatingContainer>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <ArrowPrev onClick={onClick}>
      <FaArrowLeft />
    </ArrowPrev>
  );
};
export default Rating;



export const userRows = [
  {
    id: 1,
    username: "Darika Samak",
    info: "From Amazon.com",
    imgStar:"Rating/star.svg",
    avatar:"Rating/men1.svg",
    title:
      "TT ELD is one of the most dependable, durable, and accurate systems in the business. It`s easy to use, affordably priced, and has been independently tested for ELD mandate compliance by the PIT Group research firm",
  },
  {
    id: 2,
    username: "Paromita Haque",
    info: "From Amazon.com",
    imgStar:"Rating/star2.svg",

    avatar:"Rating/men2.svg",
    title:
      " We were able to try out the device and all the back office things we need. Our drivers were so happy to no longer waste a ton of time messing with tablets. If you want a reliable, easy-to-use device, TT  ELD is where you need to go.",
  },
  {
    username: "Trashae Hubbard",
    info: "From Amazon.com",
    imgStar:"Rating/star.svg",
    id: 3,
    username: "Jon Snow",
    avatar:"Rating/men3.svg",
    title:
      "  We are a power only company with 227 owner operators who started  with another ELD solution and had nothing but problems out of it. When we realized that we as a company could not keep this up we reached out to TT ELD",
  },
  {
    id: 4,
    username: "Paromita Haque",
    info: "From Amazon.com",
    imgStar:"Rating/star2.svg",

    avatar:"Rating/men2.svg",
    title:
      " We were able to try out the device and all the back office things we need. Our drivers were so happy to no longer waste a ton of time messing with tablets. If you want a reliable, easy-to-use device, TT  ELD is where you need to go.",
  },

];









{/* <RatingWrapper>
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
      </RatingWrapper> */}