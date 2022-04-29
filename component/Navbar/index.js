import React from "react";
import { MobileIcon, Nav, NavbarContainer, NavImg, NavItem, NavLinks, NavLogo, NavMenu } from "./Navbar";
// import {FaBars} from 'react-icons/fs'
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo href="/" passHref><NavImg   src="https://tteld.com/assets/images/custom/logo-footer.png"
          alt=""/></NavLogo>
          <MobileIcon>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to='about'>About</NavLinks>
              </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
