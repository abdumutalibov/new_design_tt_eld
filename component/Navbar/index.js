import { useEffect, useState } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavImg,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./Navbar";
import { FaBars } from "react-icons/fa";
const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] =useState(false)

  const changeNav =()=>{
   if(window.scroll >=80){
     setScrollNav(true)
   } else{
     setScrollNav(false)
   }
  }

  useEffect(()=>{
    window.addEventListener('scroll',changeNav)
  },[])
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo href="/" passHref>
            <NavImg
              src="https://tteld.com/assets/images/custom/logo-footer.png"
              alt=""
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="products">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="features">Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="reviews">Reviews</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="pricing">Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="request">Request Demo</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Get it Now</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
