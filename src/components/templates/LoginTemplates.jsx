import { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { Btnsave, InputText2, Title, Mensajes, Device } from "../../index"
import { loginImages } from '../../assets/images/index'
import { useAuthStore } from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";

export function LoginTemplates() {
    const [currentImage, setCurrentImage] = useState(0);

    const { user, iniciarSesion, cerrarSesion } = useAuthStore();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alerta, setAlerta] = useState({ visible: false, tipo: "", titulo: "", texto: "", onConfirm: null });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await iniciarSesion(email, password);
            setAlerta({
                visible: true,
                tipo: "success",
                titulo: "¡Bienvenido!",
                texto: "Inicio de sesión exitoso.",
                onConfirm: () => navigate("/")
            });
        } catch (error) {
            setAlerta({
                visible: true,
                tipo: "error",
                titulo: "Error",
                texto: "Credenciales incorrectas. Inténtalo de nuevo.",
                onConfirm: () => setAlerta((prev) => ({ ...prev, visible: false }))
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % loginImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ContenedorLogin>
            <div className="branding-side">
                {loginImages.map((img, index) => (
                    <div
                        key={index}
                        className={`carousel-bg ${index === currentImage ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="branding-overlay"></div>

                <div className="branding-content">
                    <div className="logo-placeholder">MB</div>
                    <h1 className="brand-title">MB Tiendas POS</h1>
                    <p className="brand-subtitle">Gestión inteligente de ventas y control de inventario de clase empresarial. Toma el control total de tu negocio.</p>
                </div>
            </div>

            <section className="form-side">
                <div className="card">
                    <div className="card-header">
                        <Title className="form-title">Bienvenido de nuevo</Title>
                        <p className="subtitle">Ingrese sus credenciales para acceder a su panel</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <InputText2>
                            <label htmlFor="email" className="form__label">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                className="form__field"
                                placeholder="ejemplo@empresa.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </InputText2>

                        <InputText2>
                            <label htmlFor="password" className="form__label">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                className="form__field"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </InputText2>

                        <div className="btn-container">
                            <Btnsave titulo="Iniciar Sesión" type="submit" bgcolor="#0d6efd" color="#fff" width="100%" />
                        </div>
                    </form>
                </div>
            </section>
            <Mensajes
                visible={alerta.visible}
                tipo={alerta.tipo}
                titulo={alerta.titulo}
                texto={alerta.texto}
                onConfirm={alerta.onConfirm}
            />
        </ContenedorLogin>
    )
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.05); }
  100% { transform: translateY(0px) scale(1); }
`;

const ContenedorLogin = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.bgtotal};
    overflow: hidden;

    @media ${Device.tablet} {
        flex-direction: row;
    }

    .branding-side {
        position: relative;
        flex: 1;
        background-color: #0f172a;
        color: white;
        display: none;
        flex-direction: column;
        justify-content: center;
        padding: 60px;
        overflow: hidden;

        @media ${Device.tablet} {
            display: flex;
            flex: 1.1;
        }

        .carousel-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 1.5s ease-in-out, transform 8s linear;
            transform: scale(1.05);
            z-index: 0;

            &.active {
                opacity: 1;
                transform: scale(1);
            }
        }

        .branding-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 1;
        }

        .branding-content {
            position: relative;
            z-index: 3;
            max-width: 550px;
            margin: 0 auto;
            animation: ${fadeIn} 1s ease-out;

            .logo-placeholder {
                width: 65px;
                height: 65px;
                background: linear-gradient(135deg, #3b82f6, #0d6efd);
                border-radius: 18px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 26px;
                font-weight: 800;
                margin-bottom: 35px;
                box-shadow: 0 15px 30px rgba(13, 110, 253, 0.4);
                color: #fff;
            }

            .brand-title {
                font-size: clamp(2.5rem, 4vw, 4rem);
                font-weight: 800;
                line-height: 1.1;
                margin-bottom: 25px;
                letter-spacing: -0.03em;
                background: linear-gradient(to right, #ffffff, #94a3b8);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            .brand-subtitle {
                font-size: clamp(1rem, 1.5vw, 1.25rem);
                color: #94a3b8;
                line-height: 1.7;
                font-weight: 400;
                max-width: 90%;
            }
        }
    }

    .form-side {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 20px;
        background-color: ${({ theme }) => theme.bgtotal};
        position: relative;

        .card {
            width: 100%;
            max-width: 400px;
            background: ${({ theme }) => theme.bg};
            padding: 40px 30px;
            border-radius: 24px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0,0,0,0.05);
            border: 1px solid ${({ theme }) => theme.color2};
            position: relative;
            z-index: 10;
            animation: ${fadeIn} 0.8s ease-out;
            
            .card-header {
                text-align: left;
                margin-bottom: 40px;

                .form-title {
                    text-align: left;
                    font-size: 1.75rem;
                }

                .subtitle {
                    color: ${({ theme }) => theme.text};
                    opacity: 0.6;
                    font-size: 15px;
                    margin-top: 10px;
                }
            }

            form {
                display: flex;
                flex-direction: column;
                
                .forgot-password {
                    display: block;
                    text-align: right;
                    font-size: 13px;
                    color: #0d6efd;
                    text-decoration: none;
                    margin-top: 8px;
                    font-weight: 600;
                    transition: color 0.2s;
                    
                    &:hover {
                        color: #0b5ed7;
                        text-decoration: underline;
                    }
                }
            }

            .btn-container {
                margin-top: 25px;
            }

            @media ${Device.tablet} {
                padding: 20px;
                box-shadow: none;
                border: none;
                background: transparent;
                max-width: 440px;
            }
        }
    }
`
