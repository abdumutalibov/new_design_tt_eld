import React from "react";
import { CloseIcon, Icon, Logo, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <Icon onClick={toggle}> */}
        {/* <CloseIcon /> */}
      {/* </Icon> */}
      <SidebarWrapper>
<Icon>
  <Logo src="Signin/LogoSidebar.png"/>
</Icon>
        <SidebarMenu>
          <SidebarLink href="#products" onClick={toggle}>Products</SidebarLink>
          <SidebarLink href="#features" onClick={toggle}>Features</SidebarLink>
          <SidebarLink href="#reviews" onClick={toggle}>Reviews</SidebarLink>
          <SidebarLink href="#pricing" onClick={toggle}>Pricing</SidebarLink>
          <SidebarLink href="#about" onClick={toggle}>About</SidebarLink>
          <SidebarLink href="#request" onClick={toggle}>Request Demo</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            {/* <SidebarRoute href='/Signin'>
Sigin In
            </SidebarRoute> */}
        </SideBtnWrap>
      </SidebarWrapper>

    </SidebarContainer>
  );
};

export default Sidebar;
