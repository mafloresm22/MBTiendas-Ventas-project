import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useAuthStore } from "../../store/AuthStore";

export function Header() {
  const { user } = useAuthStore();

  return (
    <HeaderContainer>
      <div className="user-section">
        <div className="user-profile">
          <div className="user-icon">
            <Icon icon="solar:user-bold-duotone" />
          </div>
          <div className="user-info">
            <span className="user-email">{user?.email}</span>
            {/* <span className="user-name">ROL</span> */}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.bg};
  border-bottom: 1px solid ${({ theme }) => theme.color2};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  color: ${({ theme }) => theme.text};
  z-index: 50;
  box-sizing: border-box;

  .user-section {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .user-profile {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 12px;
    border-radius: 12px;
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.color2};
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      background: ${({ theme }) => theme.bgAlpha2 || theme.bgAlpha};
      transform: translateY(-1px);
    }

    .user-icon {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      background: ${({ theme }) => theme.bg};
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.text};
      font-size: 18px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    }

    .user-info {
      display: flex;
      flex-direction: column;
      
      .user-name {
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colorSubtitle};
        letter-spacing: 0.5px;
        line-height: 1;
      }
      
      .user-email {
        font-size: 12px;
        font-weight: 600;
        color: ${({ theme }) => theme.text};
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 15px;
    .user-info {
        display: none;
    }
  }
`;
