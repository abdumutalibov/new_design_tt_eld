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
import { FaBars } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
import { CgMenu } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
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
                <NavImg src="Drivers/Logo.svg" alt="" />
              </NavLogo>
            </Link>

            <NavMenu>
              <NavItem>
                <Link href="#products">
                  <div className={styles.listItem}>
                    <NavLinks primary>Products</NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#features">
                  <div className={styles.listItem}>
                    <NavLinks>Features</NavLinks>
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
