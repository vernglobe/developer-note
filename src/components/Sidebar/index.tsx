import React, { useState } from "react";

import {
  Children,
  SidebarContainer,
  SidebarWrapper,
  SidebarLogoWrapper,
  SidebarLogo,
  SidebarBrand,
  SidebarToggler,
} from "./SidebarStyles";
import BrandLogo from "./BrandLogo.svg";

import { SidebarItems } from "..";
import { DevIcon, MenuCloseIcon, MenuOpenIcon } from "../Icons";

const MAX_MOBILE_WIDTH = 700;
const MOBILE_VIEW = window.innerWidth <= MAX_MOBILE_WIDTH;

export default function Sidebar({ children }:any) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const handleSidebarDisplay = (e: any) => {
    e.preventDefault();
    if (window.innerWidth > MAX_MOBILE_WIDTH) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer id="dev-sidebar" displaySidebar={displaySidebar}>
        <SidebarWrapper>
          <SidebarLogoWrapper displaySidebar={displaySidebar}>
            <SidebarLogo href="#">
              <span className="app-brand-logo demo">
                <DevIcon />
              </span>
              <SidebarBrand displaySidebar={displaySidebar} className="app__brand__text">
                DevsNotes
              </SidebarBrand>
            </SidebarLogo>
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              {displaySidebar? <MenuCloseIcon />: <MenuOpenIcon />}
            </SidebarToggler>
          </SidebarLogoWrapper>
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}
