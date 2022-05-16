import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";

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
import { IconContext } from "react-icons/lib";
import Link from "next/link";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isTabActive, setIsTabActive] = useState(true);
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
            <Link href="/" passHref>
              <NavLogo>
                <NavImg
                  src="Drivers/Logo.svg"
                  alt=""
                />
              </NavLogo>
            </Link>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu active={isTabActive}>
              <NavItem>

                <Link href="#products">
                  <div className={styles.listItem}>  
                  <NavLinks primary
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    activeClass="active"
                    onClick={() => {
                      isTabActive && setIsActive("Yangi");
                    }}
                    active={isActive === "Yangi"}
                  >
                    Products
                  </NavLinks>
               </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#features">
                <div className={styles.listItem}>  

                  <NavLinks
                    onClick={() => {
                      isTabActive && setIsActive("Qabul qilgan");
                    }}
                    active={isActive === "Qabul qilgan"}
                  >
                    Features
                  </NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#reviews">
                <div className={styles.listItem}>  

                  <NavLinks
                    onClick={() => {
                      isTabActive && setIsActive("Jonatilgan");
                    }}
                    active={isActive === "Jonatilgan"}
                  >
                    Reviews
                  </NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#pricing">
                <div className={styles.listItem}>  

                  <NavLinks
                    onClick={() => {
                      isTabActive && setIsActive("Yopilgan");
                    }}
                    active={isActive === "Yopilgan"}
                  >
                    Pricing
                  </NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#about">
                <div className={styles.listItem}>  

                  <NavLinks
                    onClick={() => {
                      isTabActive && setIsActive("About");
                    }}
                    active={isActive === "About"}
                  >
                    About
                  </NavLinks>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#request">
                <div className={styles.listItem}>  

                  <NavLinks
                    onClick={() => {
                      isTabActive && setIsActive("Demo");
                    }}
                    active={isActive === "Demo"}
                  >
                    Request Demo
                  </NavLinks>
                  </div>
                </Link>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink href="/Signin">Get it Now</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
