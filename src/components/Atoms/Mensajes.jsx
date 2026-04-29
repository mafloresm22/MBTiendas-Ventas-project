import styled, { keyframes } from "styled-components";
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

export function Mensajes({
  visible,
  tipo = "success",
  titulo,
  texto,
  onConfirm
}) {
  if (!visible) return null;

  const iconos = {
    success: <FaCheckCircle />,
    error: <FaExclamationCircle />,
    warning: <FaExclamationTriangle />,
    info: <FaInfoCircle />
  };

  return (
    <Overlay>
      <ModalBox className={tipo}>
        <div className={`icon-wrapper ${tipo}`}>
          <div className="icon-svg">{iconos[tipo]}</div>
        </div>
        <h2 className="title">{titulo}</h2>
        <p className="text">{texto}</p>
        <button className={`confirm-btn btn-${tipo}`} onClick={onConfirm}>
          Aceptar
        </button>
      </ModalBox>
    </Overlay>
  );
}

const fadeIn = keyframes`
  from { opacity: 0; backdrop-filter: blur(0px); }
  to { opacity: 1; backdrop-filter: blur(8px); }
`;

const slideUp = keyframes`
  0% { transform: translateY(40px) scale(0.95); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  animation: ${fadeIn} 0.4s ease-out forwards;
`;

const ModalBox = styled.div`
  background: ${({ theme }) => theme.bg || "#ffffff"};
  color: ${({ theme }) => theme.text || "#1a1a1a"};
  border-radius: 24px;
  padding: 40px 30px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.25), 
              inset 0px 1px 1px rgba(255, 255, 255, 0.1);
  animation: ${slideUp} 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  border: 1px solid ${({ theme }) => theme.bg4 || "rgba(0,0,0,0.05)"};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
  }
  &.success::before { background: #059630cc; }
  &.error::before { background: #dc2626; }
  &.warning::before { background: #d97706; }
  &.info::before { background: #2563eb; }

  .icon-wrapper {
    position: relative;
    width: 90px;
    height: 90px;
    margin: 0 auto 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon-svg {
      position: relative;
      z-index: 1;
      font-size: 4.8rem;
      filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.2));
    }

    &.success { .icon-svg { color: #05963d; } }
    &.error { .icon-svg { color: #dc2626; } }
    &.warning { .icon-svg { color: #d97706; } }
    &.info { .icon-svg { color: #2563eb; } }
  }

  .title {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }

  .text {
    font-size: 1.05rem;
    color: ${({ theme }) => theme.colorSubtitle || "#666666"};
    margin-bottom: 30px;
    line-height: 1.6;
    padding: 0 10px;
  }

  .confirm-btn {
    width: 100%;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 14px 0;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0px 4px 15px rgba(0,0,0,0.15);

    &.btn-success { background: #059635; }
    &.btn-error { background: #dc2626; }
    &.btn-warning { background: #d97706; }
    &.btn-info { background: #2563eb; }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0px 8px 25px rgba(0,0,0,0.25);
    }

    &:active {
      transform: translateY(1px);
    }
  }
`;