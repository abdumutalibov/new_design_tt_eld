import { useState } from "react";
import Slider from "react-slick";
import { ArrowNext, ArrowPrev, Col, Container, ImgStars, RatingCards, RatingP, RatingWrappers, User, UserImg, UserInfo, UserName } from "./styled";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import styles from '../../styles/Drivers.module.css' 
function Review480() {

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
    slidesToShow: 1,

    centerMode: true,
    centerPadding: "0",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // dots: true,
    beforeChange:(current, next)=> setImageIndex(next)
  };
  return (
    <>
    
    <Container>
      <Slider {...settings} className={styles.slider}>
        {userRows.map((item ,id ) => (
          <RatingWrappers>

          
          <div
            key={id}
            className={id === imageIndex ? "slides activeSlides" : "slides"}
          >
            {/* <RatingCard>{img}</RatingCard> */}
            <RatingCards>
          <ImgStars src={item.imgStar} />
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
              </RatingCards>
              
          </div>
          </RatingWrappers>
        ))}
      </Slider>
    </Container>
    </>
  );
}

export default Review480;


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
    username: "Trashae Hubbard",
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

  {
    id: 5,
    username: "Tony Haque",
    info: "From Amazon.com",
    imgStar:"Rating/star2.svg",

    avatar:"Rating/men2.svg",
    title:
      " We were able to try out the device and all the back office things we need. Our drivers were so happy to no longer waste a ton of time messing with tablets. If you want a reliable, easy-to-use device, TT  ELD is where you need to go.",
  },

];
