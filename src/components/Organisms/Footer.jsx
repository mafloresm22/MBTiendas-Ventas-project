import styled from "styled-components";
import { v } from "../../styles/variables";

export function Footer() {
    return (
        <Container>
            <div className="footer-content">
                <div className="copyright">
                    <strong>
                        Copyright © {new Date().getFullYear()}{" "}
                        <span className="brand-link">MBTiendas.com.pe</span>.
                    </strong>{" "}
                    Todos los derechos reservados.
                </div>
                <div className="version">
                    <b>Versión</b> 1.0.0
                </div>
            </div>
        </Container>
    );
}

const Container = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.bg3};
  border-top: 1px solid ${({ theme }) => theme.bg4};
  color: ${({ theme }) => theme.colorSubtitle};
  font-size: 0.875rem;
  transition: all 0.3s ease;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .copyright {
    strong {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
    }

    .brand-link {
      color: ${v.primary};
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;

      &:hover {
        color: ${v.color1};
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

  .version {
    b {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
    }
  }

  @media (max-width: ${v.bpbart}) {
    .footer-content {
      flex-direction: column;
      gap: 10px;
      text-align: center;
      padding: 15px;
    }

    .version {
      display: block;
    }
  }
`;
