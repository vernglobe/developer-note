import styled from "styled-components";

// Children Component
export const Children = styled.div<{displaySidebar: boolean}>`
  width: 100%;
  height: 100%;
  margin-right: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};

  @media (max-width: 468px) {
    margin-right: 5rem;
  }
`;

// border-radius: top right bottom left
export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0.75rem 0rem 2rem 0rem;
  flex-direction: column;
  border-radius: 20px 0px 0px 20px;
  box-shadow: 5px 10px 20px #F3C3F8 inset;
  font-size: 0.9rem;
  background-color: #F5DEF8;
`;

export const SidebarLogoWrapper = styled.div<{displaySidebar: boolean}>`
  padding: 0.5rem 0rem 0rem 0rem;
  margin: 0rem 1rem;
  display: inline;
  right: 10px;
  text-align: right;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;

  @media (max-width: 468px) {
    
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 468px) {
    display: none;
  }
`;

export const SidebarBrand = styled.span<{displaySidebar: boolean}>`
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
`;

export const SidebarToggler = styled.button<{displaySidebar: boolean}>`
  cursor: pointer;
  border-radius: 10px;
  padding:5px;
  background: #CBBAFF;
  color: #5e35b1 !important;
  display: ${({ displaySidebar }) => (displaySidebar ? "inline-block" : "none")};

  @media (max-width: 468px) {
    display: none;
  }

  &:hover {
    background: #5e35b1;
    color: #ffffff !important;

  }
`;

// SidebarItem styles
export const ItemsList = styled.ul`
  list-style: none;
  padding-left: 0 !important;
`;

export const ItemContainer = styled.li`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  display: flex;

  &:hover {
    background: #E8A3DD;
    box-shadow: 5px 10px 20px #BA83B1 inset;
    color: #ffffff;
    font-weight: bold;
  }

  &.active {
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #61445C;
  padding-left: 20px;

  &:hover {
    color: #ffffff;
  }
`;

export const ItemName = styled.span<{displaySidebar: boolean}>`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "0.5rem" : "0")};
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  text-transform: capitalize;
 
  @media (max-width: 468px) {
    display: none;
  }
`;

// Sidebar Container
// padding: top right
export const SidebarContainer = styled.div<{displaySidebar: boolean}>`
  padding: 6rem 0rem 0rem 0rem;
  position: fixed;
  right: 0;
  width: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  transition: width 350ms ease;
  
  overflow-x: hidden;

  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }) => !displaySidebar && "center"};
  }

  &:hover {

    @media (min-width: 468px) {
      width: ${({ displaySidebar }) => !displaySidebar && "15rem"};

      ${SidebarLogoWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "space-between"};
      }

      ${SidebarBrand} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
      }

      ${SidebarToggler} {
        display: ${({ displaySidebar }) => !displaySidebar && "inline-block"};
      }

      ${ItemWrapper} {
        justify-content: ${({ displaySidebar }) =>
          !displaySidebar && "flex-start"};
      }

      ${ItemName} {
        display: ${({ displaySidebar }) => !displaySidebar && "block"};
        margin-left: ${({ displaySidebar }) => !displaySidebar && "0.5rem"};
      }
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eaeced;

    &:hover {
      background: #d5e0f3;
    }
  }

  @media (max-width: 468px) {
    width: 5rem;
  }
`;
