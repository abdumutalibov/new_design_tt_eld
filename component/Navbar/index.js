import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";

import {
  Icon,
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

import { CgMenu } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <MobileIcon onClick={toggle}>

              <CgMenu />
            </MobileIcon>

            <Link href="/" passHref>
              
              <NavLogo>
                
                <NavImg src="Logo_tt_eld.png" alt="" />
                {/* <NavImg src="Drivers/Logo.svg" alt="" /> */}
                {/* <NavImg src="https://tteld.com/assets/images/custom/logo.svg" alt="" /> */}
              </NavLogo>
            </Link>

            <NavMenu>
              <NavItem>
                <Link href="#features">
                  <div className={styles.listItem}>
                    <NavLinks primary>Features</NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#reviews">
                  <div className={styles.listItem}>
                    <NavLinks>Reviews</NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#products">
                  <div className={styles.listItem}>
                    <NavLinks>Store</NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#pricing">
                  <div className={styles.listItem}>
                    <NavLinks>Pricing</NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#about">
                  <div className={styles.listItem}>
                    <NavLinks>About</NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#request">
                  <div className={styles.listItem}>
                    <NavLinks>Request Demo</NavLinks>
                  </div>
                </Link>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink >Get it Now</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
