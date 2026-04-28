import styled from "styled-components";
import { Icono } from "../../index";
export function Btnsave({
    funcion,
    titulo,
    bgcolor,
    icono,
    url,
    color,
    disabled, width
}) {
    return (
        <Container $width={width}
            disabled={disabled}
            $color={color}
            type="submit"
            $bgcolor={bgcolor}
            onClick={funcion}
        >
            <section className="content">
                <Icono $color={color}>{icono}</Icono>
                {titulo && (
                    <span className="btn">
                        <a href={url} target="_blank">
                            {titulo}
                        </a>
                    </span>
                )}
            </section>
        </Container>
    );
}
const Container = styled.button`
  font-weight: 600;
  display: flex;
  font-size: 15px;
  padding: 14px 24px;
  border-radius: 12px;
  background-color: ${(props) => props.$bgcolor || props.theme.color2};
  border: 1.5px solid ${(props) => props.$bgcolor === 'transparent' ? props.theme.color2 : 'transparent'};
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${(props) => typeof props.$color === 'function' ? props.$color(props) : (props.$color ? props.$color : props.theme.text)};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.$width || 'auto'};
  
  .content {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
  
  .btn a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background-color: ${(props) => props.$bgcolor === '#0d6efd' ? '#0b5ed7' : props.$bgcolor === 'transparent' ? 'rgba(0,0,0,0.03)' : props.theme.color2};
    transform: translateY(-2px);
    box-shadow: ${(props) => props.$bgcolor === '#0d6efd' ? '0 8px 16px rgba(13, 110, 253, 0.2)' : '0 4px 6px rgba(0, 0, 0, 0.05)'};
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &[disabled] {
    background-color: #e9ecef;
    color: #6c757d;
    cursor: not-allowed;
    border-color: #e9ecef;
    box-shadow: none;
    transform: none;
  }
`;