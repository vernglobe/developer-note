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
import { DevIcon, MenuCloseIcon, MenuOpenIcon, MenuRoundedIcon } from "../Icons";

const MAX_MOBILE_WIDTH = 468;
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
            <SidebarToggler
              displaySidebar={displaySidebar}
              onClick={handleSidebarDisplay}
            >
              <MenuRoundedIcon/>
            </SidebarToggler>
          </SidebarLogoWrapper>
          <SidebarItems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}
