import styled from "styled-components";
import { useThemeStore } from "../../store/ThemeStore";
import { Icon } from "@iconify/react";

export function ToggleTema() {
    const { theme, setTheme } = useThemeStore();

    return (
        <ToggleContainer onClick={setTheme} $isDark={theme === "dark"}>
            <div className="track">
                <div className="thumb">
                    <Icon icon={theme === "dark" ? "ph:moon-bold" : "ph:sun-bold"} />
                </div>
            </div>
            <span className="label">Tema {theme === "dark" ? "Oscuro" : "Claro"}</span>
        </ToggleContainer>
    );
}

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.bgAlpha};
  }

  .track {
    width: 44px;
    height: 24px;
    background: ${(props) => props.theme.bg4};
    border-radius: 12px;
    position: relative;
    transition: background 0.3s;
    background: ${({ $isDark, theme }) => $isDark ? theme.color1 : theme.bg4};
  }

  .thumb {
    position: absolute;
    top: 2px;
    left: ${({ $isDark }) => $isDark ? "22px" : "2px"};
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    svg {
      font-size: 12px;
      color: ${({ $isDark }) => $isDark ? "#171717" : "#ffac33"};
    }
  }

  .label {
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    white-space: nowrap;
    overflow: hidden;
  }
`;