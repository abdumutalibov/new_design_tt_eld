import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="#products" onClick={toggle}>Products</SidebarLink>
          <SidebarLink to="features" onClick={toggle}>Features</SidebarLink>
          <SidebarLink to="reviews" onClick={toggle}>Reviews</SidebarLink>
          <SidebarLink to="pricing" onClick={toggle}>Pricing</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="request" onClick={toggle}>Request Demo</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute href='/signin'>
Sigin In
            </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>

    </SidebarContainer>
  );
};

export default Sidebar;
