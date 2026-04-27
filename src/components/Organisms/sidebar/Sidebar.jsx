import styled from "styled-components";
import {
  LinksArray,
  SecondarylinksArray,
  ToggleTema,
} from "../../../index";
import { v } from "../../../styles/variables";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";


export function Sidebar({ state, setState }) {
  return (
    <Main $isopen={state.toString()}>
      {/* Mobile Overlay */}
      {state && <MobileOverlay onClick={() => setState(false)} />}

      {/* Mobile Hamburger Button */}
      {!state && (
        <MobileToggle onClick={() => setState(true)}>
          <Icon icon="ph:list-bold" />
        </MobileToggle>
      )}

      <Container $isopen={state.toString()}>
        {/* Mobile Close Button */}
        <MobileClose onClick={() => setState(false)}>
          <Icon icon="ph:x-bold" />
        </MobileClose>

        <div className="Logocontent">
          <div className="imgcontent">
            <img src={v.logo} alt="Logo" />
          </div>
          <h2 className="title">MBTienda</h2>
        </div>

        <NavLinks $isopen={state.toString()}>
          <div className="SectionTitle">MENÚ PRINCIPAL</div>
          {LinksArray.map(({ icon, label, to }) => (
            <div className="LinkContainer" key={label}>
              <NavLink
                to={to}
                className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
              >
                <div className="content">
                  <Icon className="Linkicon" icon={icon} />
                  <span className="label_text">{label}</span>
                </div>
              </NavLink>
            </div>
          ))}

          <Divider />

          <div className="SectionTitle">CONFIGURACIÓN</div>
          {SecondarylinksArray.map(({ icon, label, to, color }) => (
            <div className="LinkContainer" key={label}>
              <NavLink
                to={to}
                className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
              >
                <div className="content">
                  <Icon color={color} className="Linkicon" icon={icon} />
                  <span className="label_text">{label}</span>
                </div>
              </NavLink>
            </div>
          ))}

          <div className="LinkContainer">
            <div className="Links" style={{ cursor: "pointer" }}>
              <div className="content">
                <Icon
                  color="#ec3616"
                  className="Linkicon"
                  icon="ph:dots-three-circle-bold"
                />
                <span className="label_text">Más Opciones</span>
              </div>
            </div>
          </div>
        </NavLinks>

        <FooterWrapper $isopen={state.toString()}>
          <ToggleTema />
          <button className="SidebarCollapseBtn" onClick={() => setState(!state)}>
            <Icon icon={state ? "ph:caret-line-left-bold" : "ph:caret-line-right-bold"} />
          </button>
        </FooterWrapper>
      </Container>
    </Main>
  );
}

const MobileOverlay = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 998;
  }
`;

const MobileToggle = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 20px;
    left: 20px;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    background: ${(props) => props.theme.bgcards};
    color: ${(props) => props.theme.text};
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    border: 1px solid ${(props) => props.theme.color2};
    z-index: 900;
    cursor: pointer;
    svg {
      font-size: 24px;
    }
  }
`;

const MobileClose = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    background: transparent;
    color: ${(props) => props.theme.text};
    border: none;
    cursor: pointer;
    z-index: 1001;
    svg {
      font-size: 24px;
    }
  }
`;

const Main = styled.div`
  width: ${({ $isopen }) => ($isopen === "true" ? "260px" : "80px")};
  height: 100vh;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 0;
  }
`;

const Container = styled.div`
  background: ${({ theme }) => theme.bgcards};
  color: ${(props) => props.theme.text};
  height: 100%;
  width: 100%;
  border-right: 1px solid ${({ theme }) => theme.color2};
  box-shadow: 2px 0 15px rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 999;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    transform: ${({ $isopen }) => ($isopen === "true" ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({ $isopen }) => ($isopen === "true" ? "4px 0 20px rgba(0,0,0,0.2)" : "none")};
  }

  .Logocontent {
    display: flex;
    align-items: center;
    justify-content: ${({ $isopen }) => ($isopen === "true" ? "flex-start" : "center")};
    padding: 24px 20px;
    height: 80px;
    border-bottom: 1px solid transparent;
    
    .imgcontent {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 36px;
      width: 36px;
      height: 36px;
      border-radius: 8px;
      background: ${(props) => props.theme.bgAlpha};
      padding: 4px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    
    .title {
      margin-left: 12px;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: ${(props) => props.theme.text};
      opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
      width: ${({ $isopen }) => ($isopen === "true" ? "auto" : "0")};
      overflow: hidden;
      white-space: nowrap;
      transition: opacity 0.3s ease;
    }
  }
`;

const NavLinks = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 0;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 4px;
  }

  .SectionTitle {
    font-size: 11px;
    font-weight: 700;
    color: ${(props) => props.theme.colorSubtitle};
    padding: 0 20px;
    margin-bottom: 8px;
    margin-top: 16px;
    opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
    white-space: nowrap;
    overflow: hidden;
    transition: opacity 0.2s;
    letter-spacing: 0.5px;
  }

  .LinkContainer {
    margin: 2px 12px;
  }

  .Links {
    border-radius: 6px; /* Sharper, more professional corners */
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.text};
    height: 40px; /* Tighter height */
    transition: all 0.2s ease;
    overflow: hidden;
    
    .content {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 12px; /* Tighter padding */
      
      .Linkicon {
        font-size: 20px;
        min-width: 20px;
      }

      .label_text {
        margin-left: 12px;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        opacity: ${({ $isopen }) => ($isopen === "true" ? "1" : "0")};
        transition: opacity 0.2s ease-in-out;
      }
    }

    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    &.active {
      background: ${(props) => props.theme.bgAlpha};
      color: ${(props) => props.theme.color1};
      font-weight: 600;
      box-shadow: inset 3px 0 0 ${(props) => props.theme.color1}; /* Minimalist indicator */
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: ${(props) => props.theme.color2};
  margin: 16px 20px;
  opacity: 0.5;
`;

const FooterWrapper = styled.div`
  padding: 16px 16px;
  border-top: 1px solid ${(props) => props.theme.color2};
  display: flex;
  align-items: center;
  justify-content: ${({ $isopen }) => ($isopen === "true" ? "space-between" : "center")};
  flex-direction: ${({ $isopen }) => ($isopen === "true" ? "row" : "column")};
  gap: 12px;

  .SidebarCollapseBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: transparent;
    color: ${(props) => props.theme.text};
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    svg {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      display: none; /* Mobile uses the close button at the top */
    }
  }

  /* Hide the toggle text when closed to fit in the 80px space */
  .label {
    display: ${({ $isopen }) => ($isopen === "true" ? "block" : "none")};
  }
`;